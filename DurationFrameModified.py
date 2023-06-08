# purpose of the code -> To convert a given video into frames of desired fps that too creating separate folders for each such durations within specified output_path .
# constants for example uses 
# video_path -> specify the folder where the video to be processed is placed/available 
# output_path -> specify the folder where you wish to store output frames 


video_path = "C:\\Users\\shiva\\OneDrive - solutions.com\\Desktop\\FlickMatchDatabase\\FlickMatch Gachibowli, Hyderabad - 28_05_2023 06_00 PM - 07_00 PM.mp4"
output_path = "C:\\Users\\shiva\\OneDrive - solutions.com\\Desktop\\FlickMatchDatabase\\OutputVideo\\Hyderabad_28_05_2023"
durations = [(10,12)] # Start and end times for each duration
frame_rate = 1 # Extract 1 frames per second # if frame rate is 2 , resultant video will contain fps/frame_rate frames per second .


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
        duration_output_path = os.path.join(output_path, f"Goal{i+1}")
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


extract_frames(video_path, output_path, durations, frame_rate)

