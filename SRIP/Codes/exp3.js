/*Creating Graph 1*/
var dps = [];
var xaxis = [-1.00, -0.75, -0.50, -0.25, 0.00, 0.25, 0.50, 0.75, 1.00];
var ctx = document.getElementById("graph-1");
var myChart1 = new Chart(ctx, {
	type: 'scatter',
  	data: {
    	labels: xaxis
  	}
  
});

function addClass1(){
	document.getElementById("input-data-from-user-class1").style.visibility="visible";
}

function addClass2(){
	document.getElementById("input-data-from-user-class2").style.visibility="visible";
}


function addDataPoints() {
    xValue = Number(document.getElementById("xValue").value);
    dps.push({
        x: xValue,
    });
   myChart1.render();
}

function renderButton(){
	var renderButton = document.getElementById("renderButton");
renderButton.addEventListener("click", addDataPoints);
myChart1.update();
}


/*Creating Graph 2 */ 
var ctx = document.getElementById("graph-2");
var myChart2 = new Chart(ctx, {
	type: 'scatter',
  	data: {
    	labels: xaxis,
    	dataset: []
  	}
  
});


/* On clicking the Start button*/
function start(){
	document.getElementById('step').style.visibility="visible";
	document.getElementById('step-100').style.visibility="visible";

	
}

/* On clicking the Step button*/
function changeStatusStep(){
	document.getElementById("column-1").innerHTML = "iterations:2";
	document.getElementById('step').style.visibility="hidden";
	document.getElementById('step-100').style.visibility="hidden";
}

/* On clicking the Step100 button*/
function changeStatusStep100(){
	document.getElementById("column-2").innerHTML = "Classes Separated, iterations:2";
	document.getElementById('step').style.visibility="hidden";
	document.getElementById('step-100').style.visibility="hidden";
}

/* On clicking the Clear button*/
function changeStatusClear(){
	document.getElementById("column-1").innerHTML = "";
	document.getElementById("column-2").innerHTML = "";
	document.getElementById("input-data-from-user-class1").style.visibility="hidden";
	document.getElementById("input-data-from-user-class2").style.visibility="hidden";
	myLineChart1.reset();
}

