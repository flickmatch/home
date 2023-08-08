# Highlights using Machine Learning

This folder contains the code to generate labelled data and train ML models to get video statistics and generate highlights for Flickmatch videos.

## Layout

`scripts`: Contains all the python scripts for relevant code.

`data`: Contains all the data. This is never checked into GitHub, maintained on separate storage systems such as google drive. 

Directory Structure:

```python

Data Directory Structure:

----data
--------fm_{model}
------------data_{description}
----------------train
----------------test
----------------validation
------------model_{description}
----------------ckpt
----------------tensorboard

Evaluation/Visualization Directory Structure
----viz
--------video_{name}
------------data
----------------video_name.mp4
------------fm_{model}
----------------model_{description}
--------------------visualizations

```

Note of Caution: Currently, these directories need to be manually created before the code is run. In the future, we aim to automate this process.

## Training Binary Classifier Using CNNs

`scripts/run_scripts/cnn_train.py`: This script can be used to train a binary classifier based on CNNs to detect `goal` frames in an image. This script performs validation and testing also.  

The following command line arguments need to be supplied:
```python
backbone: Can be either 'resnet' or 'vgg16'
checkpoint_path: Path to save checkpoints during training
train_dataset_directory: Directory path of training data
validation_dataset_directory: Directory path of validation data
```

The following command line arguments are optional: 
```python
load_weights: Loads weights from the checkpoint_path into the model initially.
save_checkpoint_epoch_frequency: Frequency to save checkpoint. 1 by default (saves at every epoch)
epochs: Number of epochs to run. 10 by default.
perform_test: If test_dataset is present. 
test_dataset_directory: Directory path of test data. Default is None in case no testing is to be performed at the end.
batch_size: Batch size of training. Default is 32.
```

Sample Command:
```python
!python3 scripts/cnn_train.py 
--backbone 'resnet' 
--checkpoint_path 'data/fm_{model}/model_{description}/ckpt' 
--load_weights 
--save_checkpoint_epoch_frequency 5 
--train_data_directory 'data/fm_{model}/data_{description}/train'
--test_dataset_directory 'data/fm_{model}/data_{description}/test'
--validation_dataset_directory 'data/fm_{model}/data_{description}/validation'
--epochs 50 
--perform_test
```

Sample Command With Real Values:

```python
!python3 scripts/run_scripts/cnn_train.py 
--backbone 'resnet' 
--checkpoint_path '/content/gdrive/MyDrive/highlights-ml/data/fm_cnn_binary_classification/model_cnn_dense16_val_test_opposite_bs16/ckpt' 
--save_checkpoint_epoch_frequency 1 
--epochs 20 
--perform_test 
--train_dataset_directory '/content/gdrive/MyDrive/highlights-ml/data/fm_cnn_binary_classification/data_only_goals/train' 
--validation_dataset_directory '/content/gdrive/MyDrive/highlights-ml/data/fm_cnn_binary_classification/data_only_goals/test' 
--test_dataset_directory '/content/gdrive/MyDrive/highlights-ml/data/fm_cnn_binary_classification/data_only_goals/validation' 
--batch_size 16 
--logdir '/content/gdrive/MyDrive/highlights-ml/data/fm_cnn_binary_classification/model_cnn_dense16_val_test_opposite_bs16/tensorboard'
```

## Evaluation Script

`scripts/evaluation.py` can be used to evaluate any trained model on any video.

The following command line arguments need to be supplied:
```python
video_path: Path to the saved video. 
model: Can currently only be 'cnn'
checkpoint_path: Model loading path
save_folder: Folder to save prediction images from the video
threshold: Binary classifier thresholding value. 0.5 by default. 
```

The following command line arguments are optional: 
```python
backbone: Can be 'resnet' or 'vgg16' depending on the saved model
```

Sample Command:

```python
!python3 scripts/run_scripts/evaluation.py --video_path 'viz/video_{name}/data/video_name.mp4' 
--model 'cnn' 
--backbone 'resnet' 
--checkpoint_path 'data/fm_{model}/model_{description}/ckpt' 
--save_folder 'viz/video_{name}/fm_{model}/model_{description}/visualizations'
 --threshold 0.5

```

Sample Command With Real Values:

```python
!python3 scripts/run_scripts/evaluation.py 
--video_path '/content/gdrive/MyDrive/highlights-ml/viz/video_southcity_gurgaon_08_07_23__07_00_PM_08_00_PM/data/FlickMatch - South City, Gurgaon 08_07_23 07_00 PM - 08_00 PM.mp4' 
--model 'cnn' 
--backbone 'resnet' 
--checkpoint_path '/content/gdrive/MyDrive/highlights-ml/data/fm_cnn_binary_classification/model_cnn_dense16_val_test_opposite_bs16/ckpt' 
--save_folder '/content/gdrive/MyDrive/highlights-ml/viz/video_southcity_gurgaon_08_07_23__07_00_PM_08_00_PM/fm_cnn_binary_classification/model_cnn_dense16_val_test_opposite_bs16/visualizations' 
--threshold 0.5
```