import cv2
import os

def extract_frames(video_path, output_path, durations, frame_rate=1):
    # Open the video file
    video = cv2.VideoCapture(video_path)

    # Check if the video file was successfully opened
    if not video.isOpened():
        print("Error opening video file")
        return

    # Create the main output directory
    os.makedirs(output_path, exist_ok=True)

    # Calculate the frame numbers for each duration
    fps = video.get(cv2.CAP_PROP_FPS)
    print(fps)
    frame_numbers = [(int(start_time * fps), int(end_time * fps)) for start_time, end_time in durations]

    # Calculate the delay between frames
    #delay = 1 / frame_rate

    # Iterate over each start and end frame number pair
    for i, (start_frame, end_frame) in enumerate(frame_numbers):
        # Create a subdirectory for each duration
        duration_output_path = os.path.join(output_path, f"duration_{i+1}")
        os.makedirs(duration_output_path, exist_ok=True)

        # Set the frame position to the start frame
        video.set(cv2.CAP_PROP_POS_FRAMES, start_frame)

        # Initialize variables for this iteration
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

                # Delay before extracting the next frame
                #import time
                #time.sleep(delay)

    # Release the video file
    video.release()

# Example usage
video_path = "C:\\Users\\shiva\\OneDrive - solutions.com\\Desktop\\FlickMatchDatabase\\South_gurgaon_03_06_2023.mp4"
output_path = "C:\\Users\\shiva\\OneDrive - solutions.com\\Desktop\\FlickMatchDatabase\\OutputVideo"
durations = [(10.0, 15.0)]  # Start and end times for each duration
frame_rate = 1 # Extract 2 frames per second

extract_frames(video_path, output_path, durations, frame_rate)
