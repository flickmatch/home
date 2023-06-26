import cv2

def extract_frames(video_path, output_path, interval):
    # Open the video file
    video = cv2.VideoCapture(video_path)
    
    # Get the video's frame rate
    fps = video.get(cv2.CAP_PROP_FPS)
    
    # Calculate the frame interval based on the desired time interval
    frame_interval = int(fps * interval)
    
    # Initialize variables
    frame_count = 0
    success = True
    
    while success:
        # Read the next frame from the video
        success, frame = video.read()
        
        # Extract frames at the specified interval
        if frame_count % frame_interval == 0:
            # Save the frame as an image
            cv2.imwrite(output_path + "/framen{}.jpg".format(frame_count), frame)
        
        # Increment the frame count
        frame_count += 1
    
    # Release the video object
    video.release()

# Example usage
video_path = "D:\\FlickMatch Dump\\FlickMatch Gachibowli, Hyderabad - 19_06_2023 08_00 PM - 09_00 PM.mp4"
output_path = "D:\\FlickMatch Dump\\NegativeFrames"
interval = 10  # Time interval in seconds
extract_frames(video_path, output_path, interval)
