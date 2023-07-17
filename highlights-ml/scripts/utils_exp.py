import os
import cv2
import pandas as pd


def get_annotations(annotations_file_path):
    """
    Get annotations from the annotations spreadsheet.

    This function loads the spreadsheet from the provided `annotations_file_path`.
    It reads the `Link`, `start`, and `end` columns from the spreadsheet and returns a dictionary of video annotations.

    Args:
        annotations_file_path: Path to the spreadsheet of annotations.

    Returns:
        video_annotations: Dictionary of video annotations with Link as the key and a list of (start, end) tuples as the value.
    """
    print("Fetching annotations from file path={}".format(annotations_file_path))
    data = pd.read_excel(annotations_file_path)
    columns = ['Link', 'start', 'end']

    video_annotations = {}

    for _, row in data.iterrows():
        Link = row['Link']
        start = row['start']
        end = row['end']
        if pd.isna(Link) or pd.isna(start) or pd.isna(end):
            continue  # Skip rows with missing values

        if Link not in video_annotations:
            video_annotations[Link] = []

        video_annotations[Link].append((int(start), int(end)))

    print("Successfully fetched annotations.")
    return video_annotations


def save_frame(video_path, frames_save_folder, start_time, end_time, frame_interval):
    """
    Extracts frames from the video between the specified start and end times with a given interval.

    This function extracts the frames from the video between the specified start and end times,
    using the time as the reference. It extracts frames at the specified interval.

    Args:
        video_path: Path to the video file.
        frames_save_folder: Path to save the frames for this video.
        start_time: Starting time in seconds to extract.
        end_time: Ending time in seconds to extract.
        frame_interval: Interval in frames. For extracting 1 frame after every 5 seconds, interval = fps * 5.
                       Default value is 1, which means it saves every frame.

    Returns:
        None. Saves the frames at the specified location.
    """
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    start_frame = int(start_time * fps)
    end_frame = int(end_time * fps)

    cap.set(cv2.CAP_PROP_POS_FRAMES, start_frame)

    frame_index = start_frame
    frame_counter = 0

    while cap.isOpened() and frame_index <= end_frame:
        ret, frame = cap.read()
        if ret:
            if frame_counter % int(frame_interval) == 0:
                # Save frame to specified folder
                frame_name = f"frame_{frame_index}.jpg"  # frame_index
                frame_path = os.path.join(frames_save_folder, frame_name)
                cv2.imwrite(frame_path, frame)

            frame_index += 1
            frame_counter += 1
        else:
            break

    cap.release()

    print("Frames saved at location={}".format(frames_save_folder))
