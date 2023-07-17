import pandas as pd
import argparse
import os
from utils_exp import save_frame, get_annotations


def parse_arguments():
    """
    Arguments Parser for all the command line arguments required by the code.

    Returns:
        args containing:
            annotations_file_path: Path to the spreadsheet of annotations.
            frames_save_folder: Path to save the frames for this video.
            video_path: Path to the video file.
            video_id: Video ID to match in the annotations file.
            frame_interval: Interval in frames for saving frames.
    """
    parser = argparse.ArgumentParser(
        prog='positive_data_generation',
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
        '--Link',
        type=str,
        required=True,
        help="Link to match in annotations_file."
    )
    parser.add_argument(
        '--frame_interval',
        type=int,
        default=1,
        help="Interval in frames for saving frames. Default is 1 (save every frame)."
    )

    args = parser.parse_args()
    return args


def main():
    """
    Main function that handles the execution of the script.
    """
    args = parse_arguments()
    annotations_file_path = args.annotations_file_path
    frames_save_folder = args.frames_save_folder
    video_path = args.video_path
    Link = args.Link
    frame_interval = args.frame_interval

    os.makedirs(frames_save_folder, exist_ok=True)

    video_annotations = get_annotations(annotations_file_path)

    if Link in video_annotations:
        durations = video_annotations[Link]
        for start, end in durations:
            save_frame(video_path, frames_save_folder, start, end, frame_interval)
    else:
        print("No annotations found for Link ={}".format(Link))


if __name__ == '__main__':
    main()
