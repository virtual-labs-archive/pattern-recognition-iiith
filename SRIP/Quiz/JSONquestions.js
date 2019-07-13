var questions = [
["Which of the following distance metric can not be used in k-NN?", "Manhattan", "Tanimoto", "Mahalanobis", "All can be used", "4"],
["Which of the following machine learning algorithm can be used for imputing missing values of both categorical and continuous variables?", "K-NN", "Linear Regression", "Logistic Regression", "SVM", "1"],
["Which of the following distance measure do we use in case of categorical variables in k-NN?", "Euclidean Distance", "Manhattan Distance", "Hamming Distance", "None of the above", "3"],
["The strength  (degree) of the correlation between a set of independent variables X and a dependent variable Y is measured by", "Coefficient of Determination", "Standard error of estimate", "Coefficient of Correlation", "All of the above", "4"],
["In k-NN what will happen when you increase/decrease the value of k?", "The boundary becomes smoother with increasing value of K", "The boundary becomes smoother with decreasing value of K", "Smoothness of boundary doesn’t dependent on value of K", "None of these", "1"],
["Which of the following function is used for k-means clustering ?", "k-mean", "heatmap", "k-means", "sklearn", "3"],
["Which of the following clustering requires merging approach ?", "Naive Bayes", "Partitional", "Hierarchical", "None of the Mentioned", "3"],
["What is the minimum no. of variables/ features required to perform clustering?", "0", "1", "2", "3", "2"],
["Is it possible that Assignment of observations to clusters does not change between successive iterations in K-Means", "Yes", "No", "Can't say", "None of these", "1"],
["Feature scaling is an important step before applying K-Mean algorithm. What is reason behind this?", "In distance calculation it will give the same weights for all features", "You always get the same clusters. If you use or don't use feature scaling", "In Manhattan distance it is an important step but in Euclidian it is not", "None of these", "1"],
["Which of the following are the high and low bounds for the existence of F-Score?", "[0, 1]", "(0, 1)", "[-1, 1]", "(-1, 1)", "1"],
["The algorithm that need to access a table several times during execution is", "Nearest neighbor search", "n-table scan algorithm", "Hybrid algorithm", "Zoom scan algorithm", "2"],
["K-nearest neighbor is one of the", "OLAP tool", "Learning technique", "Data warehousing tool", "Purest search technique", "4"],
["The complexity of data mining algorithm is represented by", "log n", "n log n", "2n log n", "n", "2"],
["A trivial result that is obtained by an extremely simple method is called", "Naive prediction", "Correct prediction", "Accurate prediction", "Wrong prediction", "1"],
["In K-nearest neighbor algorithm K stands for", "Number of total records", "Number of neighbors that are investigated", "Number of iterations", "Randon number", "2"],
["The information on two attributes is displayed in ________ in scatter diagram", "Visualization space", "Scatter space", "Cartesian space", "Interactive space", "3"],
["Which of the following option is true about k-NN algorithm?", "It can be used for classification", "It can be used for regression", "It can be used in both classification and regression", "None of the above", "3"],
["Which of the following statement is true about k-NN algorithm?", "k-NN performs much better if all of the data have the same scale", "k-NN works well with a small number of input variables (p), but struggles when the number of inputs is very large", "k-NN makes no assumptions about the functional form of the problem being solved", "All of the above", "4"],
["If you are using Multinomial mixture models with the expectation-maximization algorithm for clustering a set of data points into two clusters, which of the assumptions are important", "All the data points follow two multinomial distribution", "All the data points follow n Gaussian distribution (n>2)", "All the data points follow two Gaussian distribution", "All the data points follow n multinomial distribution (n>2)", "1"],
["Which of the following is/are valid iterative strategy for treating missing values before clustering analysis?", "Nearest Neighbor assignment", "Imputation with mean", "Imputation with Expectation Maximization algorithm", "All of the above", "3"],
["Which of the following algorithm is most sensitive to outliers?", "K-means clustering algorithm", "K-medians clustering algorithm", "K-modes clustering algorithm", "K-medoids clustering algorithm", "1"],
["When you find noise in data which of the following option would you consider in k-NN?", "I will decrease the value of k", "I will increase the value of k", "Noise can not be dependent on value of k", "None of these", "2"],
["Which of the following would be the leave on out cross validation accuracy for k=5?", "11/14", "10/14", "9/14", "8/14", "2"],
["Suppose you want to predict the class of new data point x=1 and y=1 using eucludian distance in 3-NN. In which class this data point belong to?", "+ class", "- class", "Can't say", "None of these", "1"]];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
} 

shuffle(questions);