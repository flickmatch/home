"""Script to generate labelled data for Flickmatch YouTube Videos.

"""
from utils import _VIDEO_URL_COLUMN_NAME, _START_DURATION_COLUMN_NAME, _END_DURATION_COLUMN_NAME, get_annotations, download_video, save_frames
import argparse
import cv2
import os
import numpy as np


def parse_arguments():
    r"""Arguments Parser for all the command line arguments required by the code.

    Returns:
        args containing:
            video_url: YouTube URL for video.
            video_save_folder: Path to folder to save downloaded video.
            annotations_file_path: Path to the spreadsheet of annotations.
            frame_rate: The number of frames we require per second. These need to be uniformly spaced
                for maximum variation among frames.
            frames_save_folder: Path to save the frames for this video. 
            video_name: Name of the video to save.
            batch_size: The number of frames to include in each data sample.
    """
    parser = argparse.ArgumentParser(
        prog='data_generation',
        description='Generates Data from YouTube Video and Annotations File.'
    )
    
    parser.add_argument(
        '--video_url', 
        type=str, 
        required=True, 
        help="URL of the YouTube video."
    )
    parser.add_argument(
        '--video_save_folder', 
        type=str, 
        required=True, 
        help="Folder to save downloaded video."
    )
    parser.add_argument(
        '--annotations_file_path', 
        type=str,
        required=True, 
        help="File path of the annotations (labels) spreadsheet. "
    )
    parser.add_argument(
        '--frame_rate', 
        type=int, 
        required=True, 
        help="Frame Rate to define the number of frames per second needed to be extracted."
    )
    parser.add_argument(
        '--positive_frames_save_folder',
        type=str,
        required=True, 
        help="Final saving folder for the positive goal frames."
    )
    parser.add_argument(
        '--negative_frames_save_folder',
        type=str,
        required=True, 
        help="Final saving folder for the negative goal frames."
    )
    parser.add_argument(
        '--video_name',
        type=str,
        required=True, 
        help="Final saving name for the downloaded video."
    )
    parser.add_argument(
        '--generate_negative_data',
        action='store_true',
        required=False, 
        help="Final saving folder for the goal frames."
    )
    parser.add_argument(
        '--batch_size',
        type=int,
        required=True,
        help="The number of frames to include in each data sample."
    )
    args = parser.parse_args()
    return args


def resize_image(image, target_shape):
    r"""Resize image to provided target_shape including padding effort for no distortion.
    
    Args:
        image: image to resize
        target_shape: target shape (height, width)
    
    Returns:
        resized image
    """
    width = image.shape[0]
    height = image.shape[1]

    if height == width:
        return cv2.resize(image, target_shape)
    
    if height > width:
        padding = (height - width) // 2
        image = np.pad(image, ((padding, padding), (0, 0), (0, 0)), mode='constant')
    else:
        padding = (width - height) // 2
        image = np.pad(image, ((0, 0), (padding, padding), (0, 0)), mode='constant')

    return cv2.resize(image, target_shape)


def extract_frames(video_save_folder, video_name, goal_durations, frame_rate, batch_size):
    r"""Extracts frames from the video using sliding window approach.

    This function loads the video saved by the function `download_video` in the `save_folder` 
    location, frame-by-frame. Then, it extracts the frames using the sliding window approach .
    Each data sample is of size (B, 224, 224, 3) where B is `batch_size`.

    Args:
        video_save_folder: Folder location of the saved video extracted from YouTube in function
            `download_video`.
        video_name: Name of the video returned from `download_video` function.
        goal_durations: A list of tuples containing (start_time, end_time) for each goal duration.
        frame_rate: The number of frames per second in the video.
        batch_size: The number of frames to include in each data sample.

    Returns:
        positive_samples: A list of positive data samples, each of size (B, 224, 224, 3).
        negative_samples: A list of negative data samples, each of size (B, 224, 224, 3).
    """
    print("Extracting relevant frames with sliding window approach...")
    video_path = os.path.join(video_save_folder, video_name)
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)

    # Calculate the frame indices for sliding window approach
    all_start_frame_indices = []
    all_end_frame_indices = []

    for start_time, end_time in goal_durations:
        start_frame_indices = np.arange(start_time * frame_rate, end_time * frame_rate - batch_size , frame_rate)
        end_frame_indices = start_frame_indices + batch_size 
        all_start_frame_indices.extend(start_frame_indices)
        all_end_frame_indices.extend(end_frame_indices)
    
    all_frames = []
    while cap.isOpened():
        ret, frame = cap.read()
        if ret:
            frame = resize_image(frame, target_shape=(224, 224))
            all_frames.append(frame)
        else:
            break
    cap.release()

    all_frames = np.array(all_frames)

    positive_samples = []
    negative_samples = []

    for start, end in zip(all_start_frame_indices, all_end_frame_indices):
        data_sample_frames = all_frames[int(start):int(end):int(frame_rate)]
        if len(data_sample_frames) == batch_size:
            # Check if the data sample has the required size (B, 224, 224, 3)
            positive_samples.append(data_sample_frames)

            if len(negative_samples) < len(positive_samples):
                # Randomly select negative samples of the same size as positive samples
                num_frames_to_skip = np.random.randint(frame_rate, len(all_frames) - batch_size * frame_rate)
                negative_sample_frames = all_frames[num_frames_to_skip:num_frames_to_skip + batch_size * frame_rate:frame_rate]
                negative_samples.append(negative_sample_frames)

    print(f"Extracted {len(positive_samples)} positive and {len(negative_samples)} negative samples.")
    return positive_samples, negative_samples


def main():    
    # Parse arguments
    args = parse_arguments()
    video_url = args.video_url
    video_name = args.video_name
    video_save_folder = args.video_save_folder
    annotations_file_path = args.annotations_file_path
    frame_rate = args.frame_rate
    positive_frames_save_folder = args.positive_frames_save_folder
    negative_frames_save_folder = args.negative_frames_save_folder
    generate_negative_data = args.generate_negative_data
    batch_size = args.batch_size

    # Saves the video at the `save_folder` location. Currently commented out due to some issue with youtube video downloading.
    # download_video(video_url, video_save_folder, video_name) 

    # Get goal durations
    goal_durations = get_annotations(video_url, annotations_file_path) 

    # Get positive and negative goal samples for each duration using sliding window approach.
    positive_samples, negative_samples = extract_frames(video_save_folder, video_name, goal_durations, frame_rate, batch_size)
    
    # Save required frames and dictionary.
    save_frames(positive_samples, positive_frames_save_folder)
    
    # Save negative data if required.
    if generate_negative_data:
        save_frames(negative_samples, negative_frames_save_folder)


if __name__ == '__main__':
    main()
