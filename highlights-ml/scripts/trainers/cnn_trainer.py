r"""Trainer Class for CNN.

"""

import tensorflow as tf
from scripts.models.cnn_binary_classifier import BinaryClassifierCNN
from scripts.trainers.trainer_utils import BinaryAccuracy
import matplotlib.pyplot as plt
from scripts.trainers.base_trainer import Trainer


class CNNTrainer(Trainer):

    def __init__(
        self, 
        backbone, 
        checkpoint_path, 
        logdir="",
        load_weights=False, 
        save_checkpoint_epoch_frequency=1        
    ):
        super(CNNTrainer, self).__init__(logdir=logdir)
        self.checkpoint_path = checkpoint_path
        self.save_checkpoint_epoch_frequency = save_checkpoint_epoch_frequency
        
        # Every implementation for Trainer needs to have these four parameters for training.
        self.classifier = BinaryClassifierCNN(backbone, load_weights, self.checkpoint_path)
        self.accuracy_metric = BinaryAccuracy(from_logits=True)
        self.loss_function = tf.keras.losses.BinaryCrossentropy(from_logits=True)
        self.loss_metric = tf.keras.metrics.BinaryCrossentropy(from_logits=True)
        self.optimizer = tf.keras.optimizers.Adam()


    @tf.function
    def train_step(self, x_batch_train, y_batch_train, classifier):
        with tf.GradientTape() as tape:
            logits = classifier.model(x_batch_train, training=True)
            loss_value = self.loss_function(y_batch_train, logits)

        grads = tape.gradient(loss_value, classifier.model.trainable_weights)
        self.optimizer.apply_gradients(zip(grads, classifier.model.trainable_weights))

        self.loss_metric.update_state(y_batch_train, logits)
        self.accuracy_metric.update_state(y_batch_train, logits)


    @tf.function
    def validation_step(self, x_batch_val, y_batch_val, classifier):
        val_logits = classifier.model(x_batch_val, training=False)
        self.loss_metric.update_state(y_batch_val, val_logits)
        self.accuracy_metric.update_state(y_batch_val, val_logits)


    @tf.function
    def test_step(self, x_batch_test, y_batch_test, classifier, loss_metric, accuracy_metric):
        test_logits = classifier.model(x_batch_test, training=False)
        loss_metric.update_state(y_batch_test, test_logits)
        accuracy_metric.update_state(y_batch_test, test_logits)


    def plot_visualizations(
            self, 
            training_losses, 
            training_accuracies, 
            validation_losses, 
            validation_accuracies
    ):
        epochs = len(training_losses)

        # Plot training loss and validation loss
        plt.figure(figsize=(10, 5))
        plt.subplot(1, 2, 1)
        plt.plot(range(1, epochs + 1), training_losses, label='Training Loss')
        plt.plot(range(1, epochs + 1), validation_losses, label='Validation Loss')
        plt.xlabel('Epoch')
        plt.ylabel('Loss')
        plt.title('Training and Validation Loss')
        plt.legend()

        # Plot training accuracy and validation accuracy
        plt.subplot(1, 2, 2)
        plt.plot(range(1, epochs + 1), training_accuracies, label='Training Accuracy')
        plt.plot(range(1, epochs + 1), validation_accuracies, label='Validation Accuracy')
        plt.xlabel('Epoch')
        plt.ylabel('Accuracy')
        plt.title('Training and Validation Accuracy')
        plt.legend()

        plt.tight_layout()
        plt.show()


    def test_image(self, image):
        return self.classifier.model(image)