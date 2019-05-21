/*Creating Graph 1*/
var color = Chart.helpers.color;
var xaxis = [-1.00, -0.75, -0.50, -0.25, 0.00, 0.25, 0.50, 0.75, 1.00];

function generateData() {
	var data = [];
	data.push({
			x: '0',
			y: '0'
		});
	return data;
}


function addDataPoints() {
	var data=[];
    xValue = Number(document.getElementById("xValue").value);
    data.push({
        x: xValue,
    });
	return data;

}

var myChart1 = {
	datasets: [{
		label: 'Class 1',
				borderColor: window.chartColors.red,
				backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
				data: generateData()
			}, {
				label: 'Class 2',
				borderColor: window.chartColors.blue,
				backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
				data: generateData()
	}]  
};


window.onload = function(){
	var ctx = document.getElementById("graph-1");
	window.myScatter = Chart.Scatter(ctx, {
		label: xaxis,
		data: myChart1
	})
}

document.getElementById('addButton').addEventListener('click', function() {
	myChart1.datasets.forEach(function(dataset) {
	dataset.data = dataset.data.map(function() {
	return {
			x: randomScalingFactor(),
			y: '0'
			};
		});
	});
	window.myScatter.update();
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
	myChart1.destroy();
	myChart1 = new Chart(ctx, { type: 'scatter', dataset: dps});

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
	myChart1.reset();
}

