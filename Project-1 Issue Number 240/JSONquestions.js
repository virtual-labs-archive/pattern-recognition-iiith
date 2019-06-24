var questions = [
["Which of the following techniques can not be used for pre-processing the inputs to an artificial neural network?", "Normalization" , "Winner-takes-all", "Principal Component Analysis(PCA)", "Deleting outliers from the training set", "2"],
["Which of the following algorithms can be used to train a single layer feedforward network?", "Hard competitive learning", "Soft competitive learning", "Genetic algorithm", "All","4"],
["Which of the following neural networks would you use for time series prediction?", "Hopfield network", "Simple recurrent network(SRN)", "Self-organizing feature map (SOFM)", "Perceptron","2"],
["Can a preceptron implement a NOT logical functions?", "No", "Only if parameters are set properly", "Yes", "Both 2 and 3","4"],
["Can a preceptron implement a AND logical functions?", "No", "Only if parameters are set properly", "Yes", "Both 2 and 3","4"],
["Can a preceptron implement a OR logical functions?", "No", "Only if parameters are set properly", "Yes", "Both 2 and 3","4"],
["When was Perceptron algorithm invented?", "1953", "1958", "1954", "1957","2"],
["Who invented Perceptron algorithm?" , "C.F. Jeff Wu", "Peter Naur", "Frank Rosen Blatt", "John Myles White","3"],
["Can a perceptron be used to detect hand written digit?", "No", "Yes", "Hand written digits cannot be read", "None of the above","2"],
["What is Perceptron rule?", "This algorithm always converges", "Can't say", "This algorithm only converges if the 2 or more classes are linearly seperable", "This algorithm only converges if the 2 classes are linearly seperable","4"],
["What is a Perceptron?", "Model of a single neuron", "Model of a mulitple neurons", "None of the above", "Both Answer 1 and 2","1"],
["Perceptron can't distingush between 2 different binary pattern with wraparound if they have same number of nonzero entries", "True", "False", "Can't say", "None of the above","1"],
["Perceptron is used for ", "Multi-class classification", "3 class classification", "2 class classification", "None of the above", "3"],
["Perceptron is a ", "Clustering method", "Supervised learning method", "Unsupervised learning method", "None of the above", "2"],
["Can perceptron learn functions?", "It only implements linearly seperable functions", "It only implements non-linearly seperable functions", "Both 1 and 2", "None of the above", "1"],
["Is perceptron linear regression?", "True", "False", "Can't say", "None of the above", "2"],
["For effective training of a neural network, the network should have ", "at least 5 to 10 times as many weights as there are training sample", "at least 15 to 20 times as many weights as there are training sample", "same number of weights as there are training sample", "at least 1 to 5 times as many weights as there are training sample", "3"],
["A single perceptron can compute the XOR function", "True", "False", "Can't say", "None of the above", "2"],
["What is a decision boundary in perceptron", "line to classify the classes", "points to classify the classes", "boundary around the classes", "None of the above", "1"],
["What is the difference between perceptron and neuron", "Perceptron is a mathematical model, Neuron is a dendrite", "Neuron is a mathematical model, Perceptron is a dendrite", "No difference", "None of the above", "1"],
["A perceptron adds up all the weighted inputs it receives, and if it exceeds a certain value, it outputs a 1, otherwise outputs a 0", "True", "False", "Sometimes it can also output intermediate values as well", "None of the above", "1"],
["Which of the following points will not form any perceptron line?", "Class 1: (-5, -4)   Class 2: (5, 5)", "Class 1: (1, 2)   Class 2: (3, 4)", "Both", "None of the above", "2"],
["Which of these points represent the perceptron line?", "x=0, y = (bias/weights[0])", "x=0, y = (-bias/weights[1])", "x=(-bias/weights[1]), y=0", "x=(bias/weights[0]), y=0", "2"],
["A perceptron classifier works,", "Only for data that is non linearly separable", "Only for data that is linearly separable", "For both linearly and non linearly separable data", "None of the above", "2"],
["What is the importance of threshold?", "It determines whether perceptron works or not", "It determines whether perceptron is correct or not", "All of the above", "It determines whether perceptron fires or not", "4"]
];

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