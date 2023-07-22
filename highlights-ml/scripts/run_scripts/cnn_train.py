r"""CNN Training Script.

"""
import sys
sys.path.append("/content/gdrive/MyDrive")
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import time
import argparse
from scripts.trainers.cnn_trainer import CNNTrainer
from scripts.run_scripts.utils import get_cnn_dataset


def parse_arguments():
    parser = argparse.ArgumentParser(
        prog='cnn_train',
        description='Trains a Binary Classifier based on CNNs to detect goals.'
    )

    parser.add_argument(
        '--backbone',
        type=str,
        required=True, 
        help="Final saving name for the downloaded video."
    )
    parser.add_argument(
        '--load_weights',
        action='store_true',
        required=False, 
        default=False,
        help="Final saving folder for the goal frames."
    )
    parser.add_argument(
        '--checkpoint_path',
        type=str,
        required=True, 
        help="Final saving name for the downloaded video."
    )
    parser.add_argument(
        '--save_checkpoint_epoch_frequency',
        type=int,
        required=False, 
        default=1,
        help="Final saving name for the downloaded video."
    )
    parser.add_argument(
        '--epochs',
        type=int,
        required=True, 
        help="Final saving name for the downloaded video."
    )
    parser.add_argument(
        '--perform_test',
        action='store_true',
        required=False, 
        help="Final saving folder for the goal frames."
    )
    parser.add_argument(
        '--train_dataset_directory',
        type=str,
        required=True, 
        help="Final saving name for the downloaded video."
    )
    parser.add_argument(
        '--validation_dataset_directory',
        type=str,
        required=True, 
        help="Final saving name for the downloaded video."
    )
    parser.add_argument(
        '--test_dataset_directory',
        type=str,
        required=False, 
        default=None,
        help="Final saving name for the downloaded video."
    )
    parser.add_argument(
        '--logdir',
        type=str,
        required=False, 
        default="",
        help="Final saving name for the downloaded video."
    )
    parser.add_argument(
        '--batch_size',
        type=int,
        required=False,
        default=32,
        help="Final saving name for the downloaded video."
    )
    args = parser.parse_args()
    return args

    

def main():

    args = parse_arguments()

    backbone = args.backbone
    load_weights = args.load_weights 
    checkpoint_path = args.checkpoint_path
    train_dataset_directory = args.train_dataset_directory
    validation_dataset_directory = args.validation_dataset_directory
    save_checkpoint_epoch_frequency = args.save_checkpoint_epoch_frequency
    epochs = args.epochs
    batch_size = args.batch_size
    perform_test = args.perform_test
    test_dataset_directory = args.test_dataset_directory
    logdir = args.logdir

    train_dataset, validation_dataset, test_dataset, _ = get_cnn_dataset(
        batch_size=batch_size,
        img_height=224,
        img_width=224,
        data_dir=train_dataset_directory,
        validation_dir=validation_dataset_directory,
        test_data_dir=test_dataset_directory
    )

    print('Loaded Dataset.')

    trainer = CNNTrainer(backbone, checkpoint_path, logdir, load_weights, save_checkpoint_epoch_frequency)
    
    print('Created CNNTrainer, starting training and validation step.')
    train_loss_list, train_accuracy_list, validation_loss_list, validation_accuracy_list = trainer.train(train_dataset, epochs, validation_dataset)
    trainer.plot_visualizations(train_loss_list, train_accuracy_list, validation_loss_list, validation_accuracy_list)

    if perform_test:
        trainer.test(test_dataset)
        
    trainer.save_model()


if __name__ == '__main__':
    main()


# !python3 scripts/run_scripts/cnn_train.py 
# --backbone 'resnet' 
# --checkpoint_path '/content/gdrive/MyDrive/fm_goal_clf' 
# --save_checkpoint_epoch_frequency 1 
# --epochs 20 
# --perform_test 
# --train_dataset_directory '/content/gdrive/MyDrive/fm_only_goal_data/train' 
# --validation_dataset_directory '/content/gdrive/MyDrive/fm_only_goal_data/validation' 
# --test_dataset_directory '/content/gdrive/MyDrive/fm_only_goal_data/test' 
# --batch_size 16