function submitQuiz() 
{
	// get each answer 
		function answerScore (qName) {
			var radioNumber = document.getElementsByName(qName);

			for (var i = 0, length = radioNumber.length; i < length; i++) {
   				if (radioNumber[i].checked) 
   				{
					var answerValue = Number(radioNumber[i].value);
				}
			}
			if (isNaN(answerValue))
			 {
				answerValue = 0;
			}
			return answerValue;
		}

	// calcualte score with answerScore function
		var calculateScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')+ answerScore('q5')+ answerScore('q6')+ answerScore('q7')+ answerScore('q8')+ answerScore('q9')+ answerScore('q10')+ answerScore('q11')+ answerScore('q12')+ answerScore('q13')+ answerScore('q14')+ answerScore('q15')+ answerScore('q16')+ answerScore('q17')+ answerScore('q18')+ answerScore('q19')+ answerScore('q20')+ answerScore('q21')+ answerScore('q22')+ answerScore('q23')+ answerScore('q24')+ answerScore('q25'));
		
	// function to return correct answer string
		function correctAnswer (correctStringNo, qNumber) {
			return ("The correct answer for question&nbsp" + qNumber+":-" + "<strong>" + (document.getElementById(correctStringNo).htmlFor) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}
		if (answerScore('q5') === 0) {
			document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
		}
		if (answerScore('q6') === 0) {
			document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
		}
		if (answerScore('q7') === 0) {
			document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
		}
		if (answerScore('q8') === 0) {
			document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
		}
		if (answerScore('q9') === 0) {
			document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
		}
		if (answerScore('q10') === 0) {
			document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
		}
		if (answerScore('q11') === 0) {
			document.getElementById('correctAnswer11').innerHTML = correctAnswer('correctString11', 11);
		}
		if (answerScore('q12') === 0) {
			document.getElementById('correctAnswer12').innerHTML = correctAnswer('correctString12', 12);
		}
		if (answerScore('q13') === 0) {
			document.getElementById('correctAnswer13').innerHTML = correctAnswer('correctString13', 13);
		}
		if (answerScore('q14') === 0) {
			document.getElementById('correctAnswer14').innerHTML = correctAnswer('correctString14', 14);
		}
		if (answerScore('q15') === 0) {
			document.getElementById('correctAnswer15').innerHTML = correctAnswer('correctString15', 15);
		}
		if (answerScore('q16') === 0) {
			document.getElementById('correctAnswer16').innerHTML = correctAnswer('correctString16', 16);
		}
		if (answerScore('q17') === 0) {
			document.getElementById('correctAnswer17').innerHTML = correctAnswer('correctString17', 17);
		}
		if (answerScore('q18') === 0) {
			document.getElementById('correctAnswer18').innerHTML = correctAnswer('correctString18', 18);
		}
		if (answerScore('q19') === 0) {
			document.getElementById('correctAnswer19').innerHTML = correctAnswer('correctString19', 19);
		}
		if (answerScore('q20') === 0) {
			document.getElementById('correctAnswer20').innerHTML = correctAnswer('correctString20', 20);
		}
		if (answerScore('q21') === 0) {
			document.getElementById('correctAnswer21').innerHTML = correctAnswer('correctString21', 21);
		}
		if (answerScore('q22') === 0) {
			document.getElementById('correctAnswer22').innerHTML = correctAnswer('correctString22', 22);
		}
		if (answerScore('q23') === 0) {
			document.getElementById('correctAnswer23').innerHTML = correctAnswer('correctString23', 23);
		}
		if (answerScore('q24') === 0) {
			document.getElementById('correctAnswer24').innerHTML = correctAnswer('correctString24', 24);
		}
		if (answerScore('q25') === 0) {
			document.getElementById('correctAnswer25').innerHTML = correctAnswer('correctString25', 25);
		}


	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calculateScore +"/" + questionCounter;
	// for perfect score
		if (calculateScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>";
		}
		document.getElementById('userScore').innerHTML = showScore;
	}

