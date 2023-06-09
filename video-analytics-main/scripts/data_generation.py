r"""Script to generate labelled data for Flickmatch YouTube Videos.

"""

import argparse
import json


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
            goal_frames_with_durations_json_save_path: Json save path.  
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
        '--goal_frames_with_durations_json_save_path',
        type=str,
        required=True, 
        help="Final saving folder for the json of goals against frames."
    )
    args = parser.parse_args()
    return args


def download_video(video_url, video_save_folder):
    r"""Download video from youtube and save.
    
    Keyword Arguments:
        video_url: YouTube URL for video.
        video_save_folder: Path to folder to save downloaded video.

    Returns:
        None. Saves `video` in the provided `video_save_folder` location.
    """
    pass


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
    pass


def extract_frames(video_save_folder, goal_duration, frame_rate):
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
        goal_duration: One tuple of `goal_durations` from `get_annotations` function. Particularly,
            (start_time, end_time)
        frame_rate: The number of frames we require per second. These need to be uniformly spaced
            for maximum variation among frames.

    Returns:
        goal_frames: Frames for that particular durations `goal_duration` goals.
    """
    pass


def save_frames(frames, frames_save_folder):
    r"""Saves the frames to a specified location `frames_save_folder`.
    
    Keyword Arguments:
        frames: Video frames to save
        frames_save_folder: Path to save the frames for this video. 
    
    Returns:
        None. Saves the frames at the specified location.
    """
    pass


def save_dictionary_as_json(all_goal_frames_with_durations, goal_frames_with_durations_json_save_path):
    r"""Saves the dictionary `all_goal_frames_with_durations` to a specified location 
        `goal_frames_with_durations_json_save_path`.
    
    Keyword Arguments:
        all_goal_frames_with_durations: {(start_time, end_time):[[], []...]}
        goal_frames_with_durations_json_save_path: Json save path.  
    
    Returns:
        None. Saves the dictionary as json at the specified location.
    """
    pass


def main():
    # Parse arguments
    args = parse_arguments()
    video_url = args.video_url
    video_save_folder = args.video_save_folder
    annotations_file_path = args.annotations_file_path
    frame_rate = args.frame_rate
    goal_frames_with_durations_json_save_path = args.goal_frames_with_durations_json_save_path
    frames_save_folder = args.frames_save_folder

    # Saves the video at the `save_folder` location.
    download_video(video_url, video_save_folder) 

    # Get goal durations
    goal_durations = get_annotations(video_url, annotations_file_path) 

    # Create dictionary of all the goals with their timings.
    all_goal_frames_with_durations = {} 

    # Get positive goal samples for each duration.
    for (start_time, end_time) in goal_durations:
        current_goal_frames =  extract_frames(video_save_folder, (start_time, end_time), frame_rate)
        all_goal_frames_with_durations[(start_time, end_time)] = current_goal_frames
    frames = all_goal_frames_with_durations.values()

    # Save required frames and dictionary.
    save_dictionary_as_json(all_goal_frames_with_durations, goal_frames_with_durations_json_save_path) # Simply saves the dictionary as a json file.
    save_frames(frames, frames_save_folder)


if __name__ == __main__:
    main()