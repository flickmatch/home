import pandas as pd
import argparse
import cv2
import os


def parse_arguments():
    r"""Arguments Parser for all the command line arguments required by the code.

    Returns:
        args containing:
            annotations_file_path: Path to the spreadsheet of annotations.
            frames_save_folder: Path to save the frames for this video.
            video_path: Path to the video file.
            video_id: Video ID to match in the annotations file.
    """
    parser = argparse.ArgumentParser(
        prog='negative_data_generation',
        description='Generates Data from YouTube Video and Annotations File.'
    )

    parser.add_argument(
        '--annotations_file_path',
        type=str,
        required=True,
        help="File path of the annotations (labels) spreadsheet."
    )
    parser.add_argument(
        '--frames_save_folder',
        type=str,
        required=True,
        help="Final saving folder for the goal frames."
    )
    parser.add_argument(
        '--video_path',
        type=str,
        required=True,
        help="Path to the video file."
    )
    parser.add_argument(
        '--video_id',
        type=int,
        required=True,
        help="Video ID to match in the annotations file."
    )
    
    args = parser.parse_args()
    return args


def get_annotations(annotations_file_path):
    r"""Get annotations from the annotations spreadsheet.

    This function loads the spreadsheet from the provided `annotations_file_path`.
    It reads the `video_id`, `start`, and `end` columns from the spreadsheet and returns a list of tuples.

    Keyword Arguments:
        annotations_file_path: Path to the spreadsheet of annotations.

    Returns:
        annotations: List of tuples containing (video_id, start, end) values.
    """
    print("Fetching annotations from file path={}".format(annotations_file_path))
    data = pd.read_excel(annotations_file_path)
    columns = ['video_id', 'start', 'end']

    annotations = []
    for _, row in data.iterrows():
        video_id = row['video_id']
        start = row['start']
        end = row['end']
        if pd.isna(video_id) or pd.isna(start) or pd.isna(end):
            continue  # Skip rows with missing values

        annotations.append((int(video_id), int(start), int(end)))

    print("Successfully fetched annotations.")
    return annotations


def extract_frames(video_path, frames_save_folder, interval, start_frame, end_frame):
    r"""Extracts frames from the video between the specified start and end frames with a given interval.

    This function extracts the frames from the video between the specified start and end frames,
    using the frame index as the reference. It extracts frames at the specified interval.

    Keyword Arguments:
        video_path: Path to the video file.
        frames_save_folder: Path to save the frames for this video.
        interval: Interval in frames i.e. for extracting 1 frame after every 5 second , interval = fps*5 
        start_frame: Starting frame index to extract.
        end_frame: Ending frame index to extract.

    Returns:
        None. Saves the frames at the specified location.
    """
    cap = cv2.VideoCapture(video_path)
    cap.set(cv2.CAP_PROP_POS_FRAMES, start_frame)

    frame_index = start_frame
    frame_counter = 0

    while cap.isOpened() and frame_index <= end_frame:
        ret, frame = cap.read()
        if ret:
            if frame_counter % int(interval) == 0:
                # Save frame to specified folder
                frame_name = f"frame_{frame_index}.jpg"
                frame_path = os.path.join(frames_save_folder, frame_name)
                cv2.imwrite(frame_path, frame)

            frame_index += 1
            frame_counter += 1
        else:
            break

    cap.release()

    print("Frames saved at location={}".format(frames_save_folder))


def main():
    args = parse_arguments()
    annotations_file_path = args.annotations_file_path
    frames_save_folder = args.frames_save_folder
    video_path = args.video_path
    video_id = args.video_id

    os.makedirs(frames_save_folder, exist_ok=True)

    annotations = get_annotations(annotations_file_path)

    match_found = False
    prev_end_frame = -1

    for video_id_, start, end in annotations:
        if video_id_ == video_id:
            match_found = True

            if prev_end_frame < start - 1:
                extract_frames(video_path, frames_save_folder, 150, prev_end_frame + 1, start - 1)

            prev_end_frame = end

    video_length = cv2.VideoCapture(video_path).get(cv2.CAP_PROP_FRAME_COUNT)
    if prev_end_frame < video_length - 1:
        extract_frames(video_path, frames_save_folder, 150, prev_end_frame + 1, int(video_length) - 1)

    if not match_found:
        print("No annotations found for the provided video ID.")


if __name__ == "__main__":
    main()
