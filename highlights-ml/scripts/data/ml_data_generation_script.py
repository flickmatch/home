r"""Script to generate labelled data for Flickmatch YouTube Videos.

"""
from utils import _VIDEO_URL_COLUMN_NAME, _START_DURATION_COLUMN_NAME, _END_DURATION_COLUMN_NAME, get_annotations, download_video , resize_image
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
            frame_space: Defines gap b/w successive frames to be extracted. These need to be uniformly spaced for maximum variation among frames. 
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
        '--frame_space', 
        type=int, 
        required=True, 
        help="Frame space means after how much frame should the next frame be extracted ."
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
        help="whether or not to generate negative data."
    )
    args = parser.parse_args()
    return args

def extract_and_segregate_frames(video_save_folder, video_name, goal_durations, frame_space, positive_frames_save_folder, negative_frames_save_folder):
    print("Extracting relevant frames at frame rate={}".format(frame_space))
    video_path = os.path.join(video_save_folder, video_name)
    cap = cv2.VideoCapture(str(video_path))
    fps = cap.get(cv2.CAP_PROP_FPS)
    print("FPS =", fps)
    goal_durations = sorted(goal_durations)
    goal_durations = np.array(goal_durations)
    goal_durations = fps * goal_durations

    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print("Total frames in video =", total_frames)

    frame_indices = np.arange(total_frames)
    goal_frame_indices = []

    for start, end in goal_durations:
        start_frame_idx = int(start)
        end_frame_idx = int(end)
        print("start frame index is  ", start_frame_idx)
        print("end frame index ", end_frame_idx)

        # Generate the goal frame indices for this duration
        goal_frame_indices.extend(range(start_frame_idx, end_frame_idx, frame_space))
        print(goal_frame_indices)

    goal_frame_indices = np.array(goal_frame_indices)

    # Mask to get positive frames
    positive_mask = np.isin(frame_indices, goal_frame_indices)
    positive_frame_indices = frame_indices[positive_mask]
    print(positive_mask)
    print("length of positive frame indices is:", len(positive_frame_indices))

    # Mask to get negative frames and length to balance no. of negative frames w.r.t positive frames
    num_positive_frames = len(positive_frame_indices)
    negative_mask = ~np.isin(frame_indices, positive_frame_indices)
    negative_frame_index = frame_indices[negative_mask]
    print(negative_mask)
    print(len(negative_frame_index))

    frame_counter = 0 
    length_negative_frame = 0 
    for frame_idx in frame_indices:
     ret, frame = cap.read()
     if ret:
        print("frame_counter", frame_counter)
        
        # Check if the current frame is a positive frame based on its index
        if frame_idx in positive_frame_indices:
            # Save the frame to the positive folder
            positive_frame_path = os.path.join(positive_frames_save_folder, f"frame_{frame_counter:04d}.png")
            frame = resize_image(frame, target_shape=(1280, 1280))
            cv2.imwrite(positive_frame_path, frame)
            print("saving positive frames")
            
        elif frame_idx in negative_frame_index:
            # Save the frame to the negative folder
            if length_negative_frame <= num_positive_frames:
                if frame_idx % frame_space == 0:
                    negative_frame_path = os.path.join(negative_frames_save_folder, f"frame_{frame_counter:04d}.png")
                    frame = resize_image(frame, target_shape=(1280, 1280))
                    cv2.imwrite(negative_frame_path, frame)
                    print("saving negative frames")
                    length_negative_frame += 1
            
        
        frame_counter += 1
        print("Current frame:", frame_counter, "/", total_frames)
    
     else:
        break

    cap.release()
    print("Successfully saved all frames to the positive and negative folders.")

def main():
    args = parse_arguments()
    video_url = args.video_url
    video_name = args.video_name
    video_save_folder = args.video_save_folder
    annotations_file_path = args.annotations_file_path
    frame_space = args.frame_space
    positive_frames_save_folder = args.positive_frames_save_folder
    negative_frames_save_folder = args.negative_frames_save_folder
    

    # Saves the video at the `save_folder` location. Currently commented out due to some issue with youtube video downloading.
    # download_video(video_url, video_save_folder, video_name) 

    # Get goal durations
    goal_durations = get_annotations(video_url, annotations_file_path) 

    # Get positive and negative goal samples for each duration.
    extract_and_segregate_frames(video_save_folder, video_name, goal_durations, frame_space, positive_frames_save_folder, negative_frames_save_folder)


if __name__ == '__main__':
    main()