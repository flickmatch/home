import argparse
import cv2
import os
import pandas as pd

def extract_frames(video_path, output_path, durations_file, extract_frame_rate=1):
    """
    Extract frames from a video file and save them as images.

    Args:
        video_path (str): Path to the input video file.
        output_path (str): Path to the output directory for frames.
        durations_file (str): Path to the spreadsheet file containing durations.
        extract_frame_rate (int, optional): Frame rate for frame extraction. Defaults to 1.

    Returns:
        None
    """

    # Open the video file
    video = cv2.VideoCapture(video_path)

    # Check if the video file was successfully opened
    if not video.isOpened():
        print("Error opening video file")
        return

    # Create the main output directory
    os.makedirs(output_path, exist_ok=True)

    # Read the durations from the spreadsheet
    durations_df = pd.read_csv(durations_file)

    # Iterate over each duration
    for i, row in durations_df.iterrows():
        start_time = row['Start']
        end_time = row['End']

        # Calculate the frame numbers for the duration
        fps = video.get(cv2.CAP_PROP_FPS)
        start_frame = int(start_time * fps)
        end_frame = int(end_time * fps)

        # Create a subdirectory for the duration
        duration_output_path = os.path.join(output_path, f"Goal{i+1}")
        os.makedirs(duration_output_path, exist_ok=True)

        # Set the frame position to the start frame
        video.set(cv2.CAP_PROP_POS_FRAMES, start_frame)

        # Initialize variables for this duration
        frame_count = start_frame
        success = True

        # Read the video frames until the end frame
        while success and frame_count <= end_frame:
            # Read a frame from the video
            success, frame = video.read()

            if success:
                # Save the frame as an image file within the duration subdirectory
                frame_path = os.path.join(duration_output_path, f"frame_{frame_count:04d}.jpg")
                cv2.imwrite(frame_path, frame)

                # Increment frame count
                frame_count += 1

               

    # Release the video file
    video.release()


def main():
    """
    Entry point for executing the script.

    Returns:
        None
    """

    parser = argparse.ArgumentParser(description='Convert a video into frames based on durations from a spreadsheet.')
    parser.add_argument('video_path', help='Path to the input video file')
    parser.add_argument('output_path', help='Path to the output directory for frames')
    parser.add_argument('--durations_file', help='Path to the spreadsheet file containing durations')
    parser.add_argument('--extract_frame_rate', type=int, default=1, help='Extracted frame rate')

    args = parser.parse_args()

    extract_frames(args.video_path, args.output_path, args.durations_file, args.extract_frame_rate)


if __name__ == '__main__':
    main()
