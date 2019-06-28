var questions = [
["Probability distribution of discrete random variable is classified as", "probability mass function" , "posterior mass function", "interior mass function", "continuous mass function", "1"],
["The appropriate graph of probability density function is: ", "Curve", "Histogram", "Polygon", "All","1"],
["A discrete probability distribution may be represented by: ", "Table", "Graph", "Mathematical equation", "All","4"],
["If the random variable takes negative values, then the negative values will have: ", "Positive Probabilities", "Negative Probabilities", "Negative Probabilities", "All","1"],
["Total area under the curve of a continuous probability density function is always equal to: ", "0", "1", "-1", "None of the above","2"],
["A quantity resulting from an experiment that, by chance, can assume different values is called: ", "Random experiment", "Random sample", "Random variable", "Random process","3"],
["In a discrete probability distribution the sum of all the probabilities is always equal to: ", " 0", "1", "Minimum", "Maximum","2"],
["Numbers selected by a random process and are equally distributed in a table are called: " , "Attributes", "Random variables", "Random numbers", "Quantitative variables","3"],
["Which one is not an example of random experiment?", "A coin is tossed and the outcome is either a head or a tail ", " A six-sided die is rolled ", "Some number of persons will be admitted to a hospital emergency room during any hour. ", "All medical insurance claims received by a company in a given year. ","4"],
["A basketball player makes 80 percent of his free throws during the season. What is the probability that he will make exactly 6 of his next 8 free throws?", "0.1468", "0.3355", "0.1678", "0.2936","4"],
["The covariance of two random variables", "does not have an upper or lower bound", "does not provide an indication of the direction of the relationship between the variables", "is greatly influenced by the scaling of the numbers.", "both Answer 1 and 3","4"],
["The sum of the product of each value of a discrete random variable X times its probability is referred to as its ", "expected value", "Variance", "Mean", "Both a and c","4"],
["Difference between highest and lowest observation is 20 and coefficient of range is 0.077 then sum of highest and lowest value is", "210", "220", "260", "240", "3"],
["What is Euclidean distance?", "technique used to find the distance among objects", "technique used to find the dissimilarity among objects", "Both 1 and 2", "None of the above", "3"],
["Find the distance of the point (-6, 8) from the origin", "8", "11", "10", "9", "3"],
["Find the value of p for which the points (-5, 1), (1, p) and (4, -2) are collinear.", "-3", "-2", "0", "-1", "4"],
["What is the basic operation of closest pair algorithm using brute force technique?", "Euclidean distance", "Radius", "Area", "Manhattan distance", "1"],
["Which of the following is similar to Euclidean distance?", "Manhattan distance", "Pythagoras metric", "Chebyshev distance", "Heuristic distance", "2"],
["Which of the following areas do closest pair problem arise?", "computational geometry", "graph colouring problems", "numerical problems", "string matching", "1"],
["Which approach is based on computing the distance between each pair of distinct points and finding a pair with the smallest distance?", "Brute force", "Exhaustive search", "Divide and conquer", "Branch and bound", "1"],
["The most important condition for which closest pair is calculated for the points (pi, pj) is?", "i>j", "i!=j", "i=j", "i<j", "4"],
["What is the runtime efficiency of using brute force technique for the closest pair problem?", "O(N)", "O(N log N)", "O(N^2)", "O(log N)", "3"],
["Which point lies on y-axis?", "(1, 3)", "(0, 3)", "(5, 2)", "(2, 3)", "2"],
["Which point lies in IV quadrant?", "(-3,-4)", "(2,-4)", "(-2, 3)", "(0, 1)", "2"],
["Which graph is parallel to x-axis?", "y=x+1", "y=2", "x=3", "x=2y", "2"]
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