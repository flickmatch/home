import cv2

def extract_frames(video_path, output_path, durations, frame_rate=1):
    # Open the video file
    video = cv2.VideoCapture(video_path)

    # Check if the video file was successfully opened
    if not video.isOpened():
        print("Error opening video file")
        return

    # Create a directory for saving the frames
    import os
    os.makedirs(output_path, exist_ok=True)

    # Calculate the frame numbers for each duration based on the given time
    fps = video.get(cv2.CAP_PROP_FPS)
    print(fps)
    frame_durations = [(int(start_time * fps / frame_rate), int(end_time * fps / frame_rate)) for start_time, end_time in durations]

    # Initialize variables
    frame_count = 0
    duration_index = 0
    success = True

    # Calculate the delay between frames
    

    # Read the video frames
    while success:
        # Read a frame from the video
        success, frame = video.read()

        if success:
            # Check if the current frame is within the current duration
            if frame_count >= frame_durations[duration_index][0] and frame_count <= frame_durations[duration_index][1]:
                # Save the frame as an image file
                frame_path = os.path.join(output_path, f"frame_{frame_count:04d}.jpg")
                cv2.imwrite(frame_path, frame)

                # Delay before extracting the next frame
                import time
               # time.sleep(delay)

            # Increment frame count
            frame_count += 1

            # Check if the current duration has ended
            if frame_count > frame_durations[duration_index][1]:
                duration_index += 1

                # Check if all durations have been processed
                if duration_index >= len(frame_durations):
                    break

    # Release the video file
    video.release()

# Example usage
video_path = "C:\\Users\\shiva\\OneDrive - solutions.com\\Desktop\\FlickMatchDatabase\\FlickMatch_-_Gachibowli%2C%C2%A0Hyderabad_26_05_23(720p).mp4"
output_path = "C:\\Users\\shiva\\OneDrive - solutions.com\\Desktop\\FlickMatchDatabase\\OutputVideo"
frame_rate = 1
#frames_per_second = 30//frame_rate
durations = [(1656.0, 1660.0)]  # List of start and end times for each duration
#durations = durations*frames_per_second 
 # Extract fps/frame_rate frames per second

extract_frames(video_path, output_path, durations, frame_rate)


