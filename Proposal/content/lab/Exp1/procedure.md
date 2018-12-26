#Feature Representation
Note the structure of the lab: The first pane allows you to select a dataset from a list of available ones. Each dataset has a set of features that have been extracted for your use. You are required to select or create two features for each dataset such that resultant feature space representation is effective. You can visualize the data in the feature space, once you define the features. You can also check the accuracy of the resulting nearest neighbor classifier on a set of test samples

##Stage 1:
1.  Load the 0-1 dataset and select the first two features.
2.  Display the samples in a 2-d feature space
3.  Click the classify button to check the accuracy of the NN classifier for the chosen representation.
4.  Note the target accuracy for the experiment. Modify the features to achieve the target accuracy.

`Note: You can get a complete view of the data samples and the corresponding features below the experiment pane. Plot different features to get an idea of the nature of different features. Derive new features based on this by combining multiple features using addition or multiplication.`

##Stage 2:
1.  Repeat the above procedure for the different datasets given in the experiment. In each case, note the target accuracy and try to achieve it. Note that in some cases, you may not be able to cross the target accuracy using the provided features only (see next stage).

##Stage 3:
1.  Read the instructions on how to extract your own features for the datasets. Extract the features using your favorite programming environment, and dump the features into an xml file in the specified format.
2.  Use these new features that you created to achieve the target accuracy in cases where you were not able to do with the features provided.