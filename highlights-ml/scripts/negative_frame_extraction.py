r""" Negative data generation script for flickMatch Youtube videos 
"""
import pandas as pd
import argparse
import cv2
import os
from utils import save_frame


def parse_arguments():
    """
    Arguments Parser for all the command line arguments required by the code.

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
    """
    Get annotations from the annotations spreadsheet.

    This function loads the spreadsheet from the provided `annotations_file_path`.
    It reads the `video_id`, `start`, and `end` columns from the spreadsheet and returns a dictionary of video annotations.

    Args:
        annotations_file_path: Path to the spreadsheet of annotations.

    Returns:
        video_annotations: Dictionary of video annotations with video ID as the key and a list of (start, end) tuples as the value.
    """
    print("Fetching annotations from file path={}".format(annotations_file_path))
    data = pd.read_excel(annotations_file_path)
    columns = ['video_id', 'start', 'end']

    video_annotations = {}

    for _, row in data.iterrows():
        video_id = row['video_id']
        start = row['start']
        end = row['end']
        if pd.isna(video_id) or pd.isna(start) or pd.isna(end):
            continue  # Skip rows with missing values

        if video_id not in video_annotations:
            video_annotations[video_id] = []

        video_annotations[video_id].append((int(start), int(end)))

    print("Successfully fetched annotations.")
    return video_annotations


def main():
    """
    Main function that handles the execution of the script.
    """
    args = parse_arguments()
    annotations_file_path = args.annotations_file_path
    frames_save_folder = args.frames_save_folder
    video_path = args.video_path
    video_id = args.video_id

    os.makedirs(frames_save_folder, exist_ok=True)

    video_annotations = get_annotations(annotations_file_path)

    match_found = False
    prev_end_frame = -1

    if video_id in video_annotations:
        match_found = True

        for start, end in video_annotations[video_id]:
            if prev_end_frame < start - 1:
                save_frame(video_path, frames_save_folder, 150, prev_end_frame + 1, start - 1)

            prev_end_frame = end

    video_length = cv2.VideoCapture(video_path).get(cv2.CAP_PROP_FRAME_COUNT)
    if prev_end_frame < video_length - 1:
        save_frame(video_path, frames_save_folder, 150, prev_end_frame + 1, int(video_length) - 1)

    if not match_found:
        print("No annotations found for the provided video ID.")


if __name__ == "__main__":
    main()
