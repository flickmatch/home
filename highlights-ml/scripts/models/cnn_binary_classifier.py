
r"""Script to train a CNN based Binary Classifier for Goal Detector.

"""
import sys
sys.path.append('highlights-ml')

from scripts.models.backbones import get_vgg16_model, get_resnet50_model
import tensorflow as tf
import keras
from keras.regularizers import l2
from keras.layers import Dense , Flatten , Dropout
import numpy as np
import os


class BinaryClassifierCNN(keras.Model):

    supported_backbones = {
      'vgg16': get_vgg16_model, 
      'resnet': get_resnet50_model
    }

    def __init__(self, backbone=None, load_weights=False, checkpoint_path=None):
      super().__init__()

      if not backbone or (backbone not in self.supported_backbones.keys()):
        raise ValueError('Backbone of CNN model is not supplied. Please supply one of these: ', self.supported_backbones.keys())
      
      backbone_model = self.supported_backbones[backbone]
      self.model = self.construct_model(backbone_model)

      if load_weights:
        self.model.load_weights(checkpoint_path)


    def construct_model(self, backbone_model):
      model = tf.keras.models.Sequential()
      model.add(tf.keras.layers.Rescaling(1./255))
      model.add(backbone_model())

      model.add(tf.keras.layers.Dense(256, activation='relu'))
      model.add(Dropout(0.2))
      model.add(tf.keras.layers.Dense(32, activation='relu'))
      model.add(tf.keras.layers.Dense(1))
      
      return model
