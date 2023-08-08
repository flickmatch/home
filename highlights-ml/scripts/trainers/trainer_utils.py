import tensorflow.keras.metrics as tfm
import tensorflow as tf

class BinaryAccuracy(tfm.BinaryAccuracy):
    def __init__(self, from_logits=False, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._from_logits = from_logits

    def update_state(self, y_true, y_pred, sample_weight=None):
        if self._from_logits:
            super(BinaryAccuracy, self).update_state(y_true, tf.nn.sigmoid(y_pred), sample_weight)
        else:
            super(BinaryAccuracy, self).update_state(y_true, y_pred, sample_weight)


def log_metrics(metrics_dict):
    print()
    for key, value in metrics_dict.items():
        print(f"{key} = {value}")
    print()