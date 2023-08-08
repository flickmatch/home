r"""Backbones for Neural Network Models.

"""

import tensorflow as tf
import keras


def get_vgg16_model():
  # VGG16
  vgg = tf.keras.applications.VGG16(
      include_top=False,
      weights='imagenet',
      input_shape=(224, 224, 3),
      pooling='avg'
  )
  vgg.trainable = False
  return vgg


def get_resnet50_model():
  # Resnet50
  resnet = tf.keras.applications.resnet50.ResNet50(
      include_top=False,
      weights='imagenet',
      input_shape=(224, 224, 3),
      pooling='avg'
  )
  resnet.trainable = False
  return resnet