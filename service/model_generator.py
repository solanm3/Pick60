# Import libraries
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
from sklearn.tree import DecisionTreeClassifier
from sklearn.externals import joblib
from sklearn import datasets
import pandas as pd
import numpy as np

import datetime
import warnings

from sklearn.calibration import calibration_curve
from sklearn import preprocessing, svm, linear_model, model_selection
from sklearn.model_selection import learning_curve, cross_validate, ShuffleSplit, train_test_split
warnings.filterwarnings('ignore')

# Get the dataset
pred_set = pd.read_csv('gamesDiffs.csv')
df = pd.read_csv("NFLdataset.csv")
df['game_result'] = df['home_result'].map({'Win': 1, 'Loss': 0})

# Split the dataset into features and labels
train_set = df.loc[df['date'] > '2014-08-03']
train_set = train_set.loc[train_set['date'] < '2018-08-03']

# Map win/loss to 1/0
train_set['home_result'] = train_set['home_result'].map({'Win': 1, 'Loss': 0})

# Calculate passing yardage differential
train_set['yppa_diff'] = train_set['yppa_home'] - train_set['yppa_away']

# Calculate rushing yardage differential
train_set['rush_diff'] = train_set['rush_home'] - train_set['rush_away']

# Calculate drive point differential
train_set['drive_points_diff'] = train_set['drive_points_home'] - train_set['drive_points_away']

# Calculate drive point differential
train_set['turnover_diff'] = train_set['turnovers_home'] - train_set['turnovers_away']

# Calculate sack_times differential
train_set['sack_times_diff'] = train_set['sack_times_home'] - train_set['sack_times_away']

# Calculate sack_yards differential
train_set['sack_yards_diff'] = train_set['sack_yards_home'] - train_set['sack_yards_away']

# Split the dataset into training (80%) and testing (20%) data
pred_set.rename(columns = {'d_p_diff':'drive_points_diff'}, inplace = True)
pred_set.rename(columns = {'turn_diff':'turnover_diff'}, inplace = True)
pred_set.rename(columns = {'sack_t_diff':'sack_times_diff'}, inplace = True)
pred_set.rename(columns = {'sack_y_diff':'sack_yards_diff'}, inplace = True)



train_set = train_set[['season', 'week', 'home', 'away', 'game_result', 'yppa_diff', 'rush_diff', 'drive_points_diff', 'turnover_diff', 'sack_yards_diff', 'sack_times_diff']]


training_cols = [col for col in train_set if col.endswith('diff')]
testing_cols = [col for col in pred_set if col.endswith('diff')]
X_train = train_set[training_cols]
X_test = pred_set[testing_cols]
y_train = train_set['game_result']
y_test = pred_set['game_result']
#X_train.drop(x_train.columns[1], axis=1, inplace=True)

df.to_csv(("original_dataset.csv"))
train_set.to_csv("diff_dataset.csv")

# Build the classifier and make prediction
classifier = DecisionTreeClassifier()
classifier.fit(X_train, y_train)
prediction = classifier.predict(X_test)

# Print the confusion matrix
print("Confusion Matrix:")
print(confusion_matrix(y_test, prediction))

# Save the model to disk
joblib.dump(classifier, 'classifier.joblib', protocol = 2)





