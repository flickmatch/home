r"""Script for common utilities across all modules of FM ML scripts.

"""
import pandas as pd
import cv2
import pytube


_VIDEO_URL_COLUMN_NAME = 'Link'
_START_DURATION_COLUMN_NAME = 'Start'
_END_DURATION_COLUMN_NAME = 'End'


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
    start_times = data.loc[data[_VIDEO_URL_COLUMN_NAME]==video_url][_START_DURATION_COLUMN_NAME]
    end_times = data.loc[data[_VIDEO_URL_COLUMN_NAME]==video_url][_END_DURATION_COLUMN_NAME]
    goal_durations = list(zip(start_times.values, end_times.values))
    print("Successfully fetched annotations.")
    return goal_durations


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
