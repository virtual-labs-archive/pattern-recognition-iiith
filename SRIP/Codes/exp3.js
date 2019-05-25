var xaxis = [-1.0 ,-0.75, -0.50, -0.25, 0.0, 0.25, 0.50, 0.75, 1.0];
var finaldata = {};  //dataset for Perceptron
var data1=[]; //for class 1
var count1=0; //count of all points of class 1
var data2=[]; //for class 2
var count2=0; //count of all points of class 2
var learningParameter;
var dataArray = [];
var q1=0;
var q2=0;


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
function addDataPoints1() {
	var xValue1;
    xValue1 = Number(document.getElementById("xValue1").value);
    data1[q1] = xValue1;
    q1++;
    count1++;
    //console.log(data1); //Ctrl+Shift+J
	return data1; //seeing the output in console window
}


//Manually adding data points for class 2
function addDataPoints2() {
	var xValue2;
    xValue2 = Number(document.getElementById("xValue2").value);
    data2[q2] = xValue2;
    q2++;
    count2++;
    //console.log(data2); //Ctrl+Shift+J
	return data2; //seeing the output in console window
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
}

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
	type: "scatter",
  	data: {labels: xaxis, dataset: []}
  });



//Perceptron function
function perceptronFunc(finaldata){
	var weights=[0, 0];
	var bias=1;
	for(var c=0; c<(count1+count2); c++) {
		var activation = 0;
		for(var d=0; d<2; d++){
			activation = activation + (weights[d] * dataArray[c][d]) + bias;
			if((activation<=0 && dataArray[c][2]>0)||(activation>0 && dataArray[c][2]<0)){
				weights[0] = weights[0] + learningParameter*dataArray[c][2]*dataArray[c][0];
				weights[1] = weights[1] + learningParameter*dataArray[c][2]*dataArray[c][1];
			}
			
		}
	}
	console.log(activation);
}


/*to run the Perceptron Algorithm
 On clicking the Start button*/
function start(){
	document.getElementById("step").style.visibility="visible";
	document.getElementById("step-100").style.visibility="visible";
	learningParameter = document.getElementById("learning-parameter").value;
	for(var j=0;j<data1.length;j++){
		finaldata[j] = data1[j];
		
	}
	
	var jc=data1.length;
	for(var i=0;i<data2.length;i++){
		finaldata[jc] = data2[i];
		jc++;
	}

//Making 2D array
	for(var i = 0; i<(count1+count2); i++) {
        dataArray[i] = [];
        dataArray[i][0] = finaldata[i];
        if(i<count1){
        	dataArray[i][1] = 1.00;
        	dataArray[i][2] = 1;
        }
        else{
        	dataArray[i][1] = -1.00;
        	dataArray[i][2] = -1;
        }
    }
	perceptronFunc(finaldata);
}



/* On clicking the Step button*/
function changeStatusStep(){
	document.getElementById("column-1").innerHTML = "iterations:2";
	document.getElementById("step").style.visibility="hidden";
	document.getElementById("step-100").style.visibility="hidden";
}


/* On clicking the Step100 button*/
function changeStatusStep100(){
	document.getElementById("column-2").innerHTML = "Classes Separated, iterations:2";
	document.getElementById("step").style.visibility="hidden";
	document.getElementById("step-100").style.visibility="hidden";
}


/* On clicking the Clear button*/
document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("column-1").innerHTML = "";
	document.getElementById("column-2").innerHTML = "";
	document.getElementById("input-data-from-user-class1").style.visibility="hidden";
	document.getElementById("input-data-from-user-class2").style.visibility="hidden";
	data1 = [];
	data2 = [];
	finaldata = [];
	dataArray = [];
	q1=0;
	q2=0;
	finaldata = [];
	//window.myScatter.reset();
})

