r"""Script to generate labelled data for Flickmatch YouTube Videos.

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


def extract_frames(video_save_folder, video_name, goal_durations, frame_rate):
    r"""Extracts frames from the video from the specified duration at the
    specified frame rate.

    This function loads the video saved by the function `download_video`  in the `save_folder` 
    location, frame-by-frame. Then, it extracts the frames defined by `goal_duration` that
    `get_annotations` function returns depending on the `frame_rate` that defines how many
    frames we required per second. This function will return `frame_rate` * `goal_duration` 
    number of frames per video.  

    Keyword Arguments:
        video_save_folder: Folder location of the saved video extracted from YouTube in function
            `download_video`.
        video_name: Name of the video returned from `download_video` function.
        goal_duration: One tuple of `goal_durations` from `get_annotations` function. Particularly,
            (start_time, end_time)
        frame_rate: The number of frames we require per second. These need to be uniformly spaced
            for maximum variation among frames.

    Returns:
        goal_frames: Frames for that particular durations `goal_duration` goals.
    """
    print("Extracting relevant frames at frame rate={}".format(frame_rate))
    video_path = os.path.join(video_save_folder, video_name)
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    goal_durations = sorted(goal_durations)
    goal_durations = np.array(goal_durations)
    goal_durations = fps * goal_durations

    all_frames = []

    while cap.isOpened():
        ret, frame = cap.read()
        if ret:
            frame = resize_image(frame, target_shape=(224, 224))
            all_frames.append(frame)
        else:
            break
    cap.release()

    # segregate positive and negative frames
    goal_frames = []
    goal_indices = []

    all_frames = np.array(all_frames)

    # generate positive frames
    for (start, end) in goal_durations:
        current_goal_frames = all_frames[int(start):int(end):int(fps//frame_rate)]
        goal_indices.extend(range(int(start), int(end)))
        goal_frames.extend(current_goal_frames)

    # generate negative frames in equal amounts
    mask = np.full(len(all_frames), True, dtype=bool)
    mask[goal_indices] = False
    non_goal_frames = np.array(all_frames[mask])
    np.random.shuffle(non_goal_frames)
    non_goal_frames = non_goal_frames[:len(goal_frames)]
    
    print(f"Extracted num={len(goal_frames)} positive and num={len(non_goal_frames)} negative frames.")
    return goal_frames, non_goal_frames


def main():    

    #TODO(shivam): Write a test case.
    # Helpful values for debugging. 
    # video_url = "https://www.youtube.com/watch?v=JK06897mSIg"
    # video_name = "test.mp4"
    # video_save_folder = "/Users/shefalisrivastava/Desktop/home/highlights-ml/data/videos"
    # annotations_file_path = "/Users/shefalisrivastava/Desktop/home/highlights-ml/data/data_labels_clean.xlsx"
    # frame_rate = 5
    # positive_frames_save_folder = "/Users/shefalisrivastava/Desktop/home/highlights-ml/data/positive"
    # negative_frames_save_folder = "/Users/shefalisrivastava/Desktop/home/highlights-ml/data/negative"
    # generate_negative_data = True

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

    # Saves the video at the `save_folder` location. Currently commented out due to some issue with youtube video downloading.
    # download_video(video_url, video_save_folder, video_name) 

    # Get goal durations
    goal_durations = get_annotations(video_url, annotations_file_path) 

    # Get positive and negative goal samples for each duration.
    positive_frames, negative_frames = extract_frames(video_save_folder, video_name, goal_durations, frame_rate)

    # Save required frames and dictionary.
    save_frames(positive_frames, positive_frames_save_folder)
    
    # Save negative data if required.
    if generate_negative_data:
        save_frames(negative_frames, negative_frames_save_folder)


if __name__ == '__main__':
    main()
