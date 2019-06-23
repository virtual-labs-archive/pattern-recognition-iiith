window.onload = function() {
	var loadDataset = 0;
	var series11 = [{x: 0.3, y: 0.2}, {x: 0.4, y: 0.3}];
	var series12 = [{x: -0.4, y: -0.3}, {x: -0.3, y: -0.2}];
	var series21 = [{x: 0.2, y: -0.4}, {x: 0.3, y: -0.2}];
	var series22 = [{x: -0.4, y: 0.6}, {x: -0.7, y: 0.3}];
	var series31 = [{x: 0.4, y: 0.6}, {x: 0.7, y: 0.3}];
	var series32 = [{x: 1.2, y: 2.1}, {x: 1.3, y: 2.3}];
	var series41 = [];
	var series42 = [];
	
	var ans = [];

	var ddag_1;
	var ddag_2;
    var result;

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
            color: "green",
            type: "scatter",
            dataPoints: 0
        },{
            showInLegend: true,           
            legendText: "Test",
            color: "gold",
            type: "scatter",
            dataPoints: 0
        }]
    });


	function datasetLoad(){
        loadDataset = document.getElementById("load-dataset").value;
        if(loadDataset === 1){
        	chart.options.data[0].dataPoints = series11;
        	chart.options.data[1].dataPoints = series12;
        	chart.render();
        }

        if(loadDataset === 2){
            chart.options.data[0].dataPoints = series21;
            chart.options.data[1].dataPoints = series22;
            chart.render();
        }

        if(loadDataset === 3){
            chart.options.data[0].dataPoints = series31;
            chart.options.data[1].dataPoints = series32;
            chart.render();
        }

        if(loadDataset === 4){
            chart.options.data[0].dataPoints = series41;
            chart.options.data[1].dataPoints = series42;
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
        chart.options.data[2].dataPoints = ans;
        chart.render();
    }

    function classify(){
        if(loadDataset === 1){
            var i = 0;
            var j = 0;
            var a1 = 0;
            var b1 = 0;
            var c1 = 0;
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a1 = series11[i].x - ans[j].x;
                    b1 = series11[i].y - ans[j].y;
                    c1 += Math.sqrt((a1 * a1) + (b1 * b1));
                }
            }
            var a2 = 0;
            var b2 = 0;
            var c2 = 0;
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a2 = series12[i].x - ans[j].x;
                    b2 = series12[i].y - ans[j].y;
                    c2 += Math.sqrt((a2 * a2) + (b2 * b2));
                }            
            }
            if(c2<c1){
                return 2;
            }
            else{
                return 1;
            }
            
        }
        /*if(loadDataset === 2){
            
        }
        if(loadDataset === 3){
            
        }
        if(loadDataset === 4){
            
        }*/
    }

    function startDDAG(){
    	ddag_1 = 1;
    	ddag_2 = 2;
    	document.getElementById("current-classifier").innerHTML = "Current Classifier: " + ddag_1 + " vs " + ddag_2;
        result = classify();
        if(result === 1){
            document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 2;
        }
        else if(result === 2){
            document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 1;
        }
        document.getElementById("next").disabled = false;
    }

    function nextDDAG(){
    	document.getElementById("current-classifier").innerHTML = "Current Classifier: " + ddag_1 + " vs " + ddag_2;
    	document.getElementById("next").disabled = true;
    	document.getElementById("current-class").innerHTML = "Current Class: " + " Classified as " + result;
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