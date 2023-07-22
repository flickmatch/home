r"""

"""
import cv2
import random
from scripts.data.data_utils import resize_image
import tensorflow as tf
import matplotlib.pyplot as plt
import numpy as np


def import_drive():
    from google.colab import drive
    drive.mount('/content/gdrive')


def get_cnn_dataset(
    batch_size=32,
    img_height=224,
    img_width=224,
    data_dir='/content/gdrive/MyDrive/Only_Goal_Train_data',
    validation_dir='/content/gdrive/MyDrive/Validationfolder_only_goal',
    test_data_dir=None
):
    train_dataset = tf.keras.preprocessing.image_dataset_from_directory(
        data_dir,
        labels='inferred',
        label_mode='binary',
        image_size=(img_height, img_width),
        batch_size=batch_size
    )
    class_names = train_dataset.class_names

    validation_dataset = tf.keras.preprocessing.image_dataset_from_directory(
        validation_dir,
        labels='inferred',
        label_mode='binary',
        image_size=(img_height, img_width),
        batch_size=batch_size
    )

    if test_data_dir:
        test_dataset = tf.keras.preprocessing.image_dataset_from_directory(
            test_data_dir,
            labels='inferred',
            label_mode='binary',
            image_size=(img_height, img_width),
            batch_size=batch_size
        )
        
    else:
       test_dataset = None
    
    return train_dataset, validation_dataset, test_dataset, class_names


def frames_from_video_file(video_path, n_frames, output_size = (224,224), frame_step = 15):
  """
    Creates frames from each video file present for each category.

    Args:
      video_path: File path to the video.
      n_frames: Number of frames to be created per video file.
      output_size: Pixel size of the output frame image.

    Return:
      An NumPy array of frames in the shape of (n_frames, height, width, channels).
  """
  # Read each video frame by frame
  result = []
  orig = []
  src = cv2.VideoCapture(str(video_path))  

  video_length = src.get(cv2.CAP_PROP_FRAME_COUNT)

  need_length = 1 + (n_frames - 1) * frame_step

  if need_length > video_length:
    start = 0
  else:
    max_start = video_length - need_length
    start = random.randint(0, max_start + 1)

  src.set(cv2.CAP_PROP_POS_FRAMES, start)
  # ret is a boolean indicating whether read was successful, frame is the image itself
  ret, frame = src.read()
  orig.append(frame)
  result.append(resize_image(frame, output_size))

  for _ in range(n_frames - 1):
    for _ in range(frame_step):
      ret, frame = src.read()
    if ret:
      orig.append(frame)
      frame = resize_image(frame, output_size)
      result.append(frame)
    else:
      result.append(np.zeros_like(result[0]))

  src.release()

  return result, orig