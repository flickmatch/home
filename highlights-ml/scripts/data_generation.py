r"""Script to generate labelled data for Flickmatch YouTube Videos.

"""
import pandas as pd
import argparse
import json
import pytube
import cv2
import os


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
        '--frames_save_folder',
        type=str,
        required=True, 
        help="Final saving folder for the goal frames."
    )
    parser.add_argument(
        '--video_name',
        type=str,
        required=True, 
        help="Final saving name for the downloaded video."
    )
    args = parser.parse_args()
    return args


def download_video(video_url, video_save_folder, video_name):
    r"""Download video from youtube and save.
    
    Keyword Arguments:
        video_url: YouTube URL for video.
        video_save_folder: Path to folder to save downloaded video.
        video_name. Name/title of the video.

    Returns:
        None. Saves the video to the `video_save_folder` with `video_name`.
    """
    print('Downloading video from url={}'.format(video_url))
    youtube = pytube.YouTube(video_url)
    video = youtube.streams.get_highest_resolution()
    video.download(video_save_folder, video_name)
    print('Successfully downloaded video name={} from url={}'.format(video_name, video_url))


def get_annotations(video_url, annotations_file_path):
    r"""Get annotations for a video from annotations spreadsheet.

    This function first loads the spreadsheet from the provided `annotations_file_path`. 
    Then it loads the respective goal durations that have been annotated against 
    the given `video_url`. It returns a list of tuples `goal_durations` that contains the
    (start_time, end_time) of every goal that occured in that video.
    
    Keyword Arguments:
        video_url: URL of the video. #TODO(@shivam15668): This is a primary key 
            of our spreadsheet database. Check if it is referenced by video_name or video_url 
            and update accordingly. 
        annotations_file_path: Path to the spreadsheet of annotations.

    Returns:
        goal_durations
    """
    print("Fetching annotations from file path={}".format(annotations_file_path))
    data = pd.read_excel(annotations_file_path)
    video_url_column_name = 'Link'
    start_duration_column_name = 'Start'
    end_duration_column_name = 'End'
    start_times = data.loc[data[video_url_column_name]==video_url][start_duration_column_name]
    end_times = data.loc[data[video_url_column_name]==video_url][end_duration_column_name]
    goal_durations = list(zip(start_times.values, end_times.values))
    print("Successfully fetched annotations.")
    return goal_durations


def extract_frames(video_save_folder, video_name, goal_duration, frame_rate):
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
    frames_start_index = int(fps * goal_duration[0])
    frames_end_index = int(fps * goal_duration[1])

    goal_frames = []
    frame_index = 0

    while cap.isOpened():
        ret, frame = cap.read()
        if ret:
            if (frame_index >= frames_start_index and frame_index < frames_end_index):
                goal_frames.append(frame)
            frame_index += 1
        else:
            break
    cap.release()
    
    print("Extracted frames.")
    return goal_frames[::int(fps//frame_rate)]


def save_frames(frames, frames_save_folder):
    r"""Saves the frames to a specified location `frames_save_folder`.
    
    Keyword Arguments:
        frames: Video frames to save
        frames_save_folder: Path to save the frames for this video. 
    
    Returns:
        None. Saves the frames at the specified location.
    """
    for i, frame in enumerate(frames):
        frame_path = f"{frames_save_folder}/frame_{i}.jpg"
        cv2.imwrite(frame_path, frame)


def main():    

    #TODO(shivam): Write a test case.
    # Helpful values for debugging. 
    # video_url = "https://www.youtube.com/watch?v=JK06897mSIg"
    # video_name = "test.mp4"
    # video_save_folder = "/Users/shefalisrivastava/Desktop/home/highlights-ml/data/videos"
    # annotations_file_path = "/Users/shefalisrivastava/Desktop/home/highlights-ml/data/data_labels_clean.xlsx"
    # frame_rate = 5
    # frames_save_folder = "/Users/shefalisrivastava/Desktop/home/highlights-ml/data/frames"

    # Parse arguments
    args = parse_arguments()
    video_url = args.video_url
    video_name = args.video_name
    video_save_folder = args.video_save_folder
    annotations_file_path = args.annotations_file_path
    frame_rate = args.frame_rate
    frames_save_folder = args.frames_save_folder

    # Saves the video at the `save_folder` location.
    download_video(video_url, video_save_folder, video_name) 

    # Get goal durations
    goal_durations = get_annotations(video_url, annotations_file_path) 

    # Create dictionary of all the goals with their timings.
    all_frames = []

    # Get positive goal samples for each duration.
    for (start_time, end_time) in goal_durations:
        current_goal_frames =  extract_frames(video_save_folder, video_name, (start_time, end_time), frame_rate)
        all_frames.extend(current_goal_frames)

    # Save required frames and dictionary.
    save_frames(all_frames, frames_save_folder)


if __name__ == '__main__':
    main()
