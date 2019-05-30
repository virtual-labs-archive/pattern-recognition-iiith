//var xaxis = [-1.0 ,-0.75, -0.50, -0.25, 0.0, 0.25, 0.50, 0.75, 1.0];
var finaldata = [];  //dataset for Perceptron
var chart1data = [];
var chart2data = [];
var data1 = []; //for class 1
var count1 = parseInt("0", 10); //count of all points of class 1
var data2 = []; //for class 2
var count2 = parseInt("0", 10); //count of all points of class 2
var learningParameter;
var dataArray = [];
var q1 = parseInt("0", 10);
var q2 = parseInt("0", 10);
var weights = [0, 0];
var bias = parseInt("1", 10);
var c = parseInt("0", 10);
var d = parseInt("0", 10);
var activation = parseInt("0", 10);
var k = 0.05;
var nEpoch = parseInt("5", 10);

//Initializing the graph
function generateData() {
	var data = [];
	data.push({
			x: "0",
			y: "0"
		});
	return data;
}


//Manually adding data points for class 1
function addDataPoints1x() {
	var xValue1;
    xValue1 = Number(document.getElementById("xValue1").value);
    data1[q1] = xValue1;
    chart1data.push({
    x: xValue1
    });
    q1++;
    count1++; //Ctrl+Shift+J
	return data1; //seeing the output in console window
}


function addDataPoints1y() {
	var yValue1;
	yValue1 = Number(document.getElementById("yValue1").value);
    data1[q1] = yValue1;
    chart1data.push({
    y: yValue1
    });
    q1++;
    count1++;
    return data1;
} 


//Manually adding data points for class 2
function addDataPoints2x() {
	var xValue2;
	xValue2 = Number(document.getElementById("xValue2").value);
    data2[q2] = xValue2;
    chart2data.push({
    x: xValue2
    });
    q2++;
    count2++;
	return data2; //seeing the output in console window
}


function addDataPoints2y() {
	var yValue2;
	yValue2 = Number(document.getElementById("yValue2").value);
    data2[q2] = yValue2;
    chart2data.push({
    y: yValue2
    });
    q2++;
    count2++;
    return data2;
} 

//Graph 1 creation
var myChart1 = {
	type: "scatter",
	data:{
		datasets: [{
			label: "Class 1",
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			data: generateData()
		}, {
			label: "Class 2",
			backgroundColor: window.chartColors.blue,
			borderColor: window.chartColors.blue,
			data: generateData()
		}]  
	}
};


window.onload = function(){
	var ctx = document.getElementById("graph-1");
	window.myScatter = new Chart(ctx, myChart1);
};

/*document.getElementById('add-Data-Point').addEventListener('click', function() {
	myChart1.data.datasets.forEach(function(dataset) {
	dataset.data.push(data1);
	});
	window.myScatter.update();
});*/


//after clicking Add Class 1 button, Add Data Point button is made visible
function addClass1(){
	document.getElementById("input-data-from-user-class1").style.visibility="visible";
}


//after clicking Add Class 2 button, Add Data Point button is made visible
function addClass2(){
	document.getElementById("input-data-from-user-class2").style.visibility="visible";
}


/*Creating Graph 2*/  
var ctx = document.getElementById("graph-2");
var myChart2 = new Chart(ctx, {
  });




function plotGraph(){
	var ptx = document.getElementById("graph-2");
	window.myLine = new Chart(ptx, {
		type: "scatter",
		data: {
			datasets: [{
  			label: "Perceptron Line",
			borderColor: window.chartColors.green,
  			data: [{
  			x: (-bias/weights[0]),
    		y: 0
			},{
    		x: 0,
    		y: (-bias/weights[1])
  			}]},{
  			label: "Class 1",
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			data: chart1data
  			},{
  			label: "Class 2",
			backgroundColor: window.chartColors.blue,
			borderColor: window.chartColors.blue,
			data: chart2data
			}]
		},
		options: {
			responsive: true
		}
	});
}



//Perceptron function
function predict(c, weights){
	for(d = 0; d < 2; d++){
		activation = activation + (weights[d] * dataArray[c][d]) + bias;
	}
	if(activation >= 0.0){
		return 1.0;
	}
	else{
		return 0.0;	
	}

}


function perceptronTrainWeights(dataArray, learningParameter){
	var j = 0;
	var sumError = 0;
	var error = 1;
	var prediction = 0;
	for(var epoch=0; epoch<nEpoch; epoch++){
		sumError = 0;
		for(c = 0; c < dataArray.length; c++) {
			prediction = predict(c, weights);
			error = dataArray[c][2] - prediction;
			sumError += error * 2;
			for(j = 0; j < 2; j++){
				weights[j] = weights[j] + (learningParameter * error * dataArray[c][j]);
			}
		}	
	}
	return weights;	
}


/*to run the Perceptron Algorithm
 On clicking the Start button*/
function start(){
	document.getElementById("step").style.visibility = "visible";
	document.getElementById("step-100").style.visibility = "visible";
	learningParameter = document.getElementById("learning-parameter").value;
	
	var i = 0;

	for(i = 0; i < (count1 + count2); i++){
		if(i < count1){
			finaldata[i] = data1[i];
		}
		else{
			finaldata[i] = data2[i - count1];
		}
	}

	var conut = 0;
	//2D final array
	for(i = 0; i < count1 / 2; i++){
		dataArray[i] = [];
		dataArray[i][0] = finaldata[conut];
		conut++;
		dataArray[i][1] = finaldata[conut];
		conut++;
		dataArray[i][2] = 1;
	}

	i = count1 / 2;
	var a = 0;
	while(a !== (count2 / 2)){
		dataArray[i] = [];
		dataArray[i][0] = finaldata[conut];
		conut++;
		dataArray[i][1] = finaldata[conut];
		conut++;
		dataArray[i][2] = 0;
		a++;
		i++;
	}
	
	perceptronTrainWeights(dataArray, learningParameter);
	document.getElementById("weights-return").textContent = weights;
	plotGraph();
}



/* On clicking the Step button*/
function changeStatusStep(){
	document.getElementById("column-1").textContent = "iterations: " + nEpoch;
	document.getElementById("step").style.visibility = "hidden";
	document.getElementById("step-100").style.visibility = "hidden";
}


/* On clicking the Step100 button*/
function changeStatusStep100(){
	document.getElementById("column-2").textContent = "Classes Separated, iterations: " + nEpoch;
	document.getElementById("step").style.visibility = "hidden";
	document.getElementById("step-100").style.visibility = "hidden";
}


/* On clicking the Clear button*/
document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("column-1").textContent = "";
	document.getElementById("column-2").textContent = "";
	document.getElementById("weights-return").textContent = "";
	document.getElementById("input-data-from-user-class1").style.visibility = "hidden";
	document.getElementById("input-data-from-user-class2").style.visibility = "hidden";
	data1 = [];
	data2 = [];
	dataArray = [];
	q1 = 0;
	q2 = 0;
	count1 = 0;
	count2 = 0;
	finaldata = [];
	weights = [0, 0];
	bias = 1;
	c = 0;
	d = 0;
	activation = 0;
	k = 0.05;
	//window.myScatter.reset();
});