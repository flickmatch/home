r"""Base Trainer Class.

"""

import time
import tensorflow as tf
from scripts.trainers.trainer_utils import log_metrics, BinaryAccuracy
from abc import abstractmethod

class Trainer:

    def __init__(self, logdir=""):
        self.define_summary_writer(logdir)
    

    @abstractmethod
    def train_step(self, x_batch_train, y_batch_train, classifier):
        pass


    @abstractmethod
    def validation_step(self, x_batch_val, y_batch_val, classifier):
        pass


    @abstractmethod
    def test_step(self, x_batch_test, y_batch_test, classifier, loss_metric, accuracy_metric):
        pass


    def train(
        self, 
        train_dataset, 
        epochs,
        validation_dataset=None, 
    ):
        
        train_loss_list = []
        train_accuracy_list = []
        validation_loss_list = []
        validation_accuracy_list = []

        for epoch in range(epochs):

            print(f"Starting Epoch={epoch}")
            start_time = time.time()

            self.accuracy_metric.reset_state()
            self.loss_metric.reset_state()

            # perform training
            for step, (x_batch_train, y_batch_train) in enumerate(train_dataset):
                self.train_step(x_batch_train, y_batch_train, self.classifier)

            training_end_time = time.time()
            
            # perform validation after every epoch of training
            if validation_dataset:
                train_loss, train_accuracy = self.loss_metric.result(), self.accuracy_metric.result()
                validation_loss, validation_accuracy = self.validate(validation_dataset)
                validation_end_time = time.time()
            else:
                validation_end_time = training_end_time # assign no time to validation.

            # print metrics
            log_metrics({
                'epoch': epoch,
                'train_loss': train_loss,
                'train_accuracy': train_accuracy,
                'validation_loss': validation_loss,
                'validation_accuracy': validation_accuracy, 
                'training_time': training_end_time - start_time,
                'validation_time': validation_end_time - training_end_time
            })

            # save checkpoint.
            if epoch % self.save_checkpoint_epoch_frequency == 0:
                self.save_checkpoint()

            train_loss_list.append(train_loss)
            train_accuracy_list.append(train_accuracy)

            tf.summary.scalar('train_loss', data=train_loss, step=epoch)
            tf.summary.scalar('train_accuracy', data=train_accuracy, step=epoch)

            if validation_dataset:
                validation_loss_list.append(validation_loss)
                validation_accuracy_list.append(validation_accuracy)
                tf.summary.scalar('validation_loss', data=validation_loss, step=epoch)
                tf.summary.scalar('validation_accuracy', data=validation_accuracy, step=epoch)

        # save model post training.
        self.save_model()

        return train_loss_list, train_accuracy_list, validation_loss_list, validation_accuracy_list


    def validate(
        self, 
        validation_dataset
    ):
        
        self.loss_metric.reset_state()
        self.accuracy_metric.reset_state()

        for index, (x_batch_val, y_batch_val) in enumerate(validation_dataset):
            self.validation_step(x_batch_val, y_batch_val, self.classifier)

        total_loss = self.loss_metric.result()
        total_accuracy = self.accuracy_metric.result()

        return total_loss, total_accuracy

    
    def test(
        self, 
        test_dataset
    ):
        loss_metric = tf.keras.metrics.BinaryCrossentropy(from_logits=True)
        accuracy_metric = BinaryAccuracy(from_logits=True)

        for x_batch_test, y_batch_test in test_dataset:
            self.test_step(x_batch_test, y_batch_test, self.classifier, loss_metric, accuracy_metric)

        total_loss = loss_metric.result()
        total_accuracy = accuracy_metric.result()

        log_metrics({
            'test_loss': total_loss,
            'test_accuracy': total_accuracy
        })

        return total_loss, total_accuracy


    def save_checkpoint(self):
        self.classifier.model.save_weights(self.checkpoint_path)
    

    def save_model(self):
        self.classifier.model.save(self.checkpoint_path)


    def load_model(self):
        self.classifier.model.load_weights(self.checkpoint_path)


    def define_summary_writer(self, logdir=""):
      file_writer = tf.summary.create_file_writer(logdir)
      file_writer.set_as_default()

