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
            annotations_file_path: Path to the spreadsheet of annotations.
            frame_rate: The number of frames we require per second. These need to be uniformly spaced
                for maximum variation among frames.
            frames_save_folder: Path to save the frames for this video.
            frame_size: Desired frame size (square dimensions).
            video_save_folder: Path to save the downloaded videos.
    """
    parser = argparse.ArgumentParser(
        prog='data_generation',
        description='Generates Data from YouTube Video and Annotations File.'
    )

    parser.add_argument(
        '--annotations_file_path',
        type=str,
        required=True,
        help="File path of the annotations (labels) spreadsheet."
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
        '--frame_size',
        type=int,
        required=True,
        help="Desired frame size (square dimensions)."
    )
    parser.add_argument(
        '--video_save_folder',
        type=str,
        required=True,
        help="Folder location to save downloaded videos."
    )
    args = parser.parse_args()
    return args

def download_video(video_url, video_save_folder, video_name):
    r"""Download video from YouTube and save.

    Keyword Arguments:
        video_url: YouTube URL for video.
        video_save_folder: Path to folder to save downloaded video.
        video_name: Name/title of the video.

    Returns:
        None. Saves the video to the `video_save_folder` with `video_name`.
    """
    video_path = os.path.join(video_save_folder, video_name)
    if os.path.exists(video_path):
        print('Video already exists: {}'.format(video_name))
        return

    print('Downloading video from url={}'.format(video_url))
    if pd.isna(video_url):
        print('Skipping video download due to empty video URL.')
        return

    youtube = pytube.YouTube(video_url)
    video = youtube.streams.get_highest_resolution()
    video.download(video_save_folder, video_name)
    print('Successfully downloaded video name={} from url={}'.format(video_name, video_url))

def get_annotations(annotations_file_path):
    r"""Get annotations from the annotations spreadsheet.

    This function loads the spreadsheet from the provided `annotations_file_path`.
    It reads the `video_url`, `Start`, and `End` columns from the spreadsheet
    and returns a list of dictionaries, each containing the video URL, start time,
    and end time.

    Keyword Arguments:
        annotations_file_path: Path to the spreadsheet of annotations.

    Returns:
        annotations: List of dictionaries containing video URL, start time, and end time.
    """
    print("Fetching annotations from file path={}".format(annotations_file_path))
    data = pd.read_excel(annotations_file_path)
    video_url_column_name = 'video_url'
    start_time_column_name = 'Start'
    end_time_column_name = 'End'

    annotations = []
    for _, row in data.iterrows():
        video_url = row[video_url_column_name]
        if pd.isna(video_url):
            continue  # Skip rows with empty video_url
        start_time = row[start_time_column_name]
        end_time = row[end_time_column_name]
        annotations.append({
            'video_url': video_url,
            'start_time': start_time,
            'end_time': end_time
        })

    print("Successfully fetched annotations.")
    return annotations

def extract_frames(video_url, video_save_folder, start_time, end_time, frame_rate, frames_save_folder, frame_size):
    r"""Extracts frames from the video within the specified duration at the specified frame rate.

    This function downloads the video if it hasn't been downloaded already.
    Then, it extracts the frames from the downloaded video within the specified duration.

    Keyword Arguments:
        video_url: URL of the video.
        video_save_folder: Folder location to save downloaded videos.
        start_time: Start time from which to extract frames.
        end_time: End time until which to extract frames.
        frame_rate: The number of frames we require per second. These need to be uniformly spaced
            for maximum variation among frames.
        frames_save_folder: Path to save the frames for this video.
        frame_size: Desired frame size (square dimensions).

    Returns:
        None. Saves the frames at the specified location.
    """
    video_name = video_url.split('=')[-1]
    download_video(video_url, video_save_folder, video_name)

    video_path = os.path.join(video_save_folder, video_name)
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    frames_start_index = int(fps * start_time)
    frames_end_index = int(fps * end_time)

    goal_frames = []
    frame_index = 0

    while cap.isOpened():
        ret, frame = cap.read()
        if ret:
            if frame_index >= frames_start_index and frame_index < frames_end_index:
                goal_frames.append(frame)
            frame_index += 1
        else:
            break
    cap.release()

    goal_frames = goal_frames[::int(fps // frame_rate)]

    goal_frames_save_folder = os.path.join(frames_save_folder, "video_{}".format(video_name))
    os.makedirs(goal_frames_save_folder, exist_ok=True)
    save_frames(goal_frames, goal_frames_save_folder, frame_size)


def save_frames(frames, frames_save_folder, frame_size):
    r"""Saves the frames to a specified location `frames_save_folder`.

    Keyword Arguments:
        frames: Video frames to save.
        frames_save_folder: Path to save the frames for this video.
        frame_size: Desired frame size (square dimensions).

    Returns:
        None. Saves the frames at the specified location.
    """
    for i, frame in enumerate(frames):
        # Resize frame to square size using padding
        height, width, _ = frame.shape
        diff = abs(height - width)
        pad_size = diff // 2

        if height > width:
            padded_frame = cv2.copyMakeBorder(frame, 0, 0, pad_size, pad_size, cv2.BORDER_CONSTANT)
        else:
            padded_frame = cv2.copyMakeBorder(frame, pad_size, pad_size, 0, 0, cv2.BORDER_CONSTANT)

        resized_frame = cv2.resize(padded_frame, (frame_size, frame_size))

        # Save frame to specified folder
        frame_name = f"frame_{i}.jpg"
        frame_path = os.path.join(frames_save_folder, frame_name)
        cv2.imwrite(frame_path, resized_frame)

    print("Frames saved at location={}".format(frames_save_folder))


def main():
    args = parse_arguments()
    annotations_file_path = args.annotations_file_path
    frame_rate = args.frame_rate
    frames_save_folder = args.frames_save_folder
    frame_size = args.frame_size
    video_save_folder = args.video_save_folder
    os.makedirs(video_save_folder, exist_ok=True)

    annotations = get_annotations(annotations_file_path)
    previous_video_url = ""
    previous_start_time = None
    previous_end_time = None

    for annotation in annotations:
        video_url = annotation['video_url']
        start_time = annotation['start_time']
        end_time = annotation['end_time']

        if pd.isna(video_url):
            print('Skipping row due to empty video URL.')
            continue

        if video_url == previous_video_url and start_time == previous_start_time and end_time == previous_end_time:
            print('Skipping duplicate row: {}'.format(video_url))
            continue

        video_name = video_url.split('=')[-1]
        video_path = os.path.join(video_save_folder, video_name)

        if os.path.exists(video_path):
            print('Video already exists: {}'.format(video_name))
        else:
            download_video(video_url, video_save_folder, video_name)

        extract_frames(video_url, video_save_folder, start_time, end_time, frame_rate, frames_save_folder, frame_size)

        previous_video_url = video_url
        previous_start_time = start_time
        previous_end_time = end_time

if __name__ == "__main__":
    main()
