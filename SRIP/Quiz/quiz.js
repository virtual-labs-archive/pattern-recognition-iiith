function submitQuiz() {

	// get each answer score
	function answerScore (qName) {
		var radiosNo = document.getElementsByName(qName);
		for (var i = 0, length = radiosNo.length; i < length; i++) {
			if (radiosNo[i].checked) {
				var answerValue = Number(radiosNo[i].value);
			}
		}
		if (isNaN(answerValue)) {
			answerValue = 0;
		}
		return answerValue;
	}

	// calc score with answerScore function
		var calcScore = (answerScore("q1") + answerScore("q2") + answerScore("q3") + answerScore("q4"));
	// function to return correct answer string
		function correctAnswer (correctStringNo, qNumber) {
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).textContent) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore("q1") === 0) {
			document.getElementById("correctAnswer1").textContent = correctAnswer("correctString1", 1);
		}
		if (answerScore("q2") === 0) {
			document.getElementById("correctAnswer2").textContent = correctAnswer("correctString2", 2);
		}
		if (answerScore("q3") === 0) {
			document.getElementById("correctAnswer3").textContent = correctAnswer("correctString3", 3);
		}
		if (answerScore("q4") === 0) {
			document.getElementById("correctAnswer4").textContent = correctAnswer("correctString4", 4);
		}

	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName("question");

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>";
		}
		document.getElementById("userScore").textContent = showScore;
	}

$(document).ready(function() {

	$("#submitButton").click(function() {
		$(this).addClass("hide");
	});

});