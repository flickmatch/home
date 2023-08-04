r"""Script to perform evaluation on any trained model for binary classification.

"""
import sys
sys.path.append("/content/gdrive/MyDrive")
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import cv2
import random
from scripts.run_scripts.cnn_train import CNNTrainer
import numpy as np
import tensorflow as tf
from PIL import Image
from matplotlib import cm
from PIL import ImageDraw
from PIL import ImageFont
import os
import argparse
from scripts.run_scripts.utils import frames_from_video_file
from scripts.data.data_utils import resize_image


def parse_arguments():
    parser = argparse.ArgumentParser(
        prog='evaluate',
        description='Evaluation Script, currently works on a Binary Classifier based on CNNs to detect goals.'
    )

    parser.add_argument(
        '--video_path',
        type=str,
        required=True, 
        help="Path to downloaded video."
    )
    parser.add_argument(
        '--model',
        type=str,
        required=True, 
        default='cnn',
        help="Path to saved model."
    )
    parser.add_argument(
        '--backbone',
        type=str,
        required=False, 
        help="CNN backbone, can be either resnet or vgg16"
    )
    parser.add_argument(
        '--checkpoint_path',
        type=str,
        required=True, 
        help="Path to checkpoint of the saved model."
    )
    parser.add_argument(
        '--save_folder',
        type=str,
        required=True, 
        help="Final saving folder for the inference on video frames."
    )
    parser.add_argument(
        '--fps_fraction_interval',
        type=float,
        required=False,
        default=5,
        help="Interval of frames to select. This values is multiplied by fps."
    )
    parser.add_argument(
        '--threshold',
        type=float,
        required=False, 
        help="Thresholding of the binary classifier."
    )

    args = parser.parse_args()
    return args


def test_video_on_cnn_model(video_path, backbone, checkpoint_path, save_folder, fps_fraction_interval, threshold=0.5):
    trainer = CNNTrainer(backbone, checkpoint_path)
    trainer.load_model()
    test_video(video_path, trainer, save_folder, fps_fraction_interval)


def test_video(video_path, trainer, save_folder, fps_fraction_interval, image_input_size=(224, 224), frame_step=15):

    cap = cv2.VideoCapture(str(video_path))
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_index = 0
    frame_rate = fps * fps_fraction_interval # extracting 1 frame per 5 seconds.

    while cap.isOpened():
        ret, frame = cap.read()
        if ret:
            frame_index += 1
            if frame_index % frame_rate == 0:
              print(f"On image with frame_index={frame_index}")
              test_image = frame.copy()
              frame = resize_image(frame, target_shape=(224, 224))
              frame = tf.expand_dims(frame, axis=0)
              predicted_label = tf.sigmoid(trainer.classifier.model(frame))
              predicted_binary_label = (predicted_label[0] >= threshold).numpy()

              if predicted_binary_label == 1:
                  predicted_label = 'not_goal'
              else:
                  predicted_label = 'goal'

              # create an image with overlay.
              test_image = Image.fromarray(np.uint8(test_image))

              I1 = ImageDraw.Draw(test_image)

              # Download font to location before beginning.
              font = ImageFont.truetype('/content/gdrive/MyDrive/Colab Notebooks/arial.ttf', 30)

              I1.text((100, 200), f"Pred={predicted_label}", font=font, fill =(255, 255, 0))
              save_path = os.path.join(save_folder, f"test_image_{frame_index}.png")

              test_image.save(save_path)

              # Check if all frames have been read
              if frame_index >= total_frames:
                  break


if __name__ == '__main__':

    args = parse_arguments()
    video_path = args.video_path
    model = args.model
    backbone = args.backbone
    checkpoint_path = args.checkpoint_path
    save_folder = args.save_folder
    threshold = args.threshold
    fps_fraction_interval = args.fps_fraction_interval

    if model == 'cnn':
        if not backbone:
            raise ValueError('Argument backbone not supplied for CNN model evaluation.')
        test_video_on_cnn_model(video_path, backbone, checkpoint_path, save_folder, fps_fraction_interval, threshold=0.5)
    else:
       raise ValueError(f'Argument model={model} not supported by evaluation script at the moment.')



