window.onload = function() {
	var loadDataset = 0;
	var series11 = [{x: 0.3, y:0.2}, {x:0.4, y:0.3}];
	var series12 = [{x: -0.4, y:-0.3}, {x:-0.3, y:-0.2}];
	var series13 = [{x: 0.2, y:-0.4}, {x:0.3, y:-0.2}];
	var series14 = [{x: -0.4, y:0.6}, {x:-0.7, y:0.3}];
	/*var series21 = [{x: 0.4, y:0.6}, {x:0.7, y:0.3}];
	var series22 = [];
	var series23 = [];
	var series24 = [];
	var series31 = [];
	var series32 = [];
	var series33 = [];
	var series34 = [];
	var series41 = [];
	var series42 = [];
	var series43 = [];
	var series44 = [];*/
	var ans = [];

	var ddag_1;
	var ddag_2;

	var chart = new CanvasJS.Chart("chartContainer", {
        title: {text: "Chart"},
        axisX:{
            title: "X-axis",
        },
        axisY: {
            title: "Y-axis",
        },
        data: [{
            showInLegend: true,           
            legendText: "Class 1",
            color: "red",
            type: "scatter",
            dataPoints: 0
        },{
            showInLegend: true,           
            legendText: "Class 2",
            color: "blue",
            type: "scatter",
            dataPoints: 0
        },{
            showInLegend: true,           
            legendText: "Class 3",
            color: "green",
            type: "scatter",
            dataPoints: 0
        },{
            showInLegend: true,           
            legendText: "Class 4",
            color: "gold",
            type: "scatter",
            dataPoints: 0
        },{
            showInLegend: true,           
            legendText: "Test",
            color: "deeppink",
            type: "scatter",
            dataPoints: 0
        }]
    });


	function datasetLoad(){
        loadDataset = document.getElementById("load-dataset").value;
        if(loadDataset == 1){
        	chart.options.data[0].dataPoints = series11;
        	chart.options.data[1].dataPoints = series12;
        	chart.options.data[2].dataPoints = series13;
        	chart.options.data[3].dataPoints = series14;
        	chart.render();
        }
    }

	function addDataPointsAndRender() {
        var xValue = Number(document.getElementById("xValue").value);
        var yValue = Number(document.getElementById("yValue").value);
        ans.push({
            x: xValue,
            y: yValue
            });
        chart.options.data[4].dataPoints = ans;
        chart.render();
    }

    function startDDAG(){
    	ddag_1 = 1;
    	ddag_2 = 4;
    	document.getElementById("current-classifier").innerHTML = "Current Classifier: " + ddag_1 + " vs " + ddag_2;
    	var x = classify(ddag_1 - 1, ddag_2 - 1);
    	//console.log(x);
    	document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + (x > 0.0 ? ddag_2 : ddag_1);
    	if(x > 0.0){
    		ddag_2 = ddag_2 - 1;
    	}
    	else{
    		ddag_1 = ddag_1 + 1;
    	}
    	document.getElementById("next").disabled = false;
    }

    function nextDDAG(){
    	document.getElementById("current-classifier").innerHTML = "Current Classifier: " + ddag_1 + " vs " + ddag_2;
    	var x = classify(ddag_1 - 1, ddag_2 - 1);
    	document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + (x > 0.0 ? ddag_2 : ddag_1);
    	if(x > 0.0){
    		ddag_2 = ddag_2 - 1;
    	}
    	else{
    		ddag_1 = ddag_1 + 1;
    	}
    	if(ddag_1 == ddag_2){
    		document.getElementById("next").disabled = true;
    		document.getElementById("current-class").innerHTML = "Current Class: " + " Classified as " + ddag_1;
    	}
    }

    function classify(x1, x2){
        
    }

	var load = document.getElementById("load");
    load.addEventListener("click", datasetLoad);
    var testPoints = document.getElementById("test-points");
    testPoints.addEventListener("click", addDataPointsAndRender);
    var start = document.getElementById("start");
    start.addEventListener("click", startDDAG);
    var next = document.getElementById("next");
    next.addEventListener("click", nextDDAG);
};