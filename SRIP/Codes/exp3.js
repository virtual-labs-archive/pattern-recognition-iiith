/*Creating Graph1*/
var xaxis = [-1.00, -0.75, -0.50, -0.25, 0.00, 0.25, 0.50, 0.75, 1.00];
var ctx = document.getElementById("graph1");
var myChart = new Chart(ctx, {
	type: 'line',
  	data: {
    	labels: xaxis
  	}
  
});

var xaxis = [-1.00, -0.75, -0.50, -0.25, 0.00, 0.25, 0.50, 0.75, 1.00];
var ctx = document.getElementById("graph2");
var myChart = new Chart(ctx, {
	type: 'line',
  	data: {
    	labels: xaxis,
    	dataset: []
  	}
  
});


/*Generating a Random number*/
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.random();
}



function changeStatusStep(){
	document.getElementById("column1").innerHTML = "iterations:2";
	document.getElementById('Step').style.visibility="hidden";
	document.getElementById('Step100').style.visibility="hidden";
}

function changeStatusStep100(){
	document.getElementById("column2").innerHTML = "Classes Separated, iterations:2";
	document.getElementById('Step').style.visibility="hidden";
	document.getElementById('Step100').style.visibility="hidden";
}

function changeStatusClear(){
	document.getElementById("column1").innerHTML = "";
	document.getElementById("column2").innerHTML = "";
}

function start(){
	document.getElementById('Step').style.visibility="visible";
	document.getElementById('Step100').style.visibility="visible";
}