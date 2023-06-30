r""" utility function to be used in data generation scripts for flickMatch youtube videos 
"""
import os
import cv2


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
                frame_name = f"frame_{frame_index}.jpg"
                frame_path = os.path.join(frames_save_folder, frame_name)
                cv2.imwrite(frame_path, frame)

            frame_index += 1
            frame_counter += 1
        else:
            break

    cap.release()

    print("Frames saved at location={}".format(frames_save_folder))
