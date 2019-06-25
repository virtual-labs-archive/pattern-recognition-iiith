window.onload = function() {
	var loadDataset = 0;
//first dataset
	var series11 = [{x: 0.3, y: 0.2}, {x: 0.4, y: 0.3}];
	var series12 = [{x: -0.4, y: -0.3}, {x: -0.3, y: -0.2}];
	var series13 = [{x: 0.2, y: -0.4}, {x: 0.3, y: -0.2}];
	var series14 = [{x: -0.4, y: 0.6}, {x: -0.7, y: 0.3}];
//second dataset
	var series21 = [];
	var series22 = [];
	var series23 = [];
	var series24 = [];
//third dataset
    var series31 = [];
    var series32 = [];
    var series33 = [];
    var series34 = [];
//fourth dataset
    var series41 = [];
    var series42 = [];
    var series43 = [];
    var series44 = [];
	
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
            legendText: "Class 3",
            color: "blue",
            type: "scatter",
            dataPoints: 0
        },{
            showInLegend: true,           
            legendText: "Class 4",
            color: "deeppink",
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
        if(loadDataset == 1){
        	chart.options.data[0].dataPoints = series11;
        	chart.options.data[1].dataPoints = series12;
            chart.options.data[2].dataPoints = series13;
            chart.options.data[3].dataPoints = series14;
        	chart.render();
        }

        /*if(loadDataset == 2){
            chart.options.data[0].dataPoints = series21;
            chart.options.data[1].dataPoints = series22;
            chart.render();
        }

        if(loadDataset == 3){
            chart.options.data[0].dataPoints = series31;
            chart.options.data[1].dataPoints = series32;
            chart.render();
        }

        if(loadDataset == 4){
            chart.options.data[0].dataPoints = series41;
            chart.options.data[1].dataPoints = series42;
            chart.render();
        }*/
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

    function classify(){
// first dataset
        if(loadDataset == 1){
            var i = 0;
            var j = 0;
            var a1 = 0;
            var b1 = 0;
            var c1 = 0;
            var a2 = 0;
            var b2 = 0;
            var c2 = 0;
            var a3 = 0;
            var b3 = 0;
            var c3 = 0;
            var a4 = 0;
            var b4 = 0;
            var c4 = 0;
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a1 = series11[i].x - ans[j].x;
                    b1 = series11[i].y - ans[j].y;
                    c1 += Math.sqrt((a1 * a1) + (b1 * b1));
                }
            }
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a2 = series12[i].x - ans[j].x;
                    b2 = series12[i].y - ans[j].y;
                    c2 += Math.sqrt((a2 * a2) + (b2 * b2));
                }            
            }
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a3 = series13[i].x - ans[j].x;
                    b3 = series13[i].y - ans[j].y;
                    c3 += Math.sqrt((a3 * a3) + (b3 * b3));
                }            
            }
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a4 = series14[i].x - ans[j].x;
                    b4 = series14[i].y - ans[j].y;
                    c4 += Math.sqrt((a4 * a4) + (b4 * b4));
                }            
            }
            if(c1 < c2 && c1 < c3 && c1 < c4){
                return 1;
            }
            else if(c2 < c1 && c2 < c3 && c2 < c4){
                return 2;
            }
            else if(c3 < c1 && c3 < c2 && c3 < c4){
                return 3;
            }
            else if(c4 < c1 && c4 < c3 && c4 < c3){
                return 4;
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
        result = classify();
        console.log(result);
    	ddag_1 = 1;
        ddag_2 = 1;
        ddag_3 = 1;
        ddag_4 = 1;
        if(result == 1){
            document.getElementById("current-classifier").innerHTML = "Current Classifier: " + result + " vs " + 2;
            document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 2;
            ddag_2 = 3;
        }
    	else if(result == 2){
            document.getElementById("current-classifier").innerHTML = "Current Classifier: " + 1 + " vs " + result;
            document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 1;
        }
        else if(result == 3){
            document.getElementById("current-classifier").innerHTML = "Current Classifier: " + 1 + " vs " + result;
            document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 1;
        }
        else if(result == 4){
            document.getElementById("current-classifier").innerHTML = "Current Classifier: " + 1 + " vs " + result;
            document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 1;
        }
        document.getElementById("next").disabled = false;
    }

    function nextDDAG(){
        if(result == 1 && ddag_1 == 1){
    	   document.getElementById("current-classifier").innerHTML = "Current Classifier: " + result + " vs " + 3;
           document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 3;
           ddag_1 += ddag_1;
        }
        else if(result == 2 && ddag_2 == 1){
           document.getElementById("current-classifier").innerHTML = "Current Classifier: " + result + " vs " + 3;
           document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 3;
           ddag_2 += ddag_2;
        }
        else if(result == 3 && ddag_3 == 1){
           document.getElementById("current-classifier").innerHTML = "Current Classifier: " + 2 + " vs " + result;
           document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 2;
           ddag_3 += ddag_3;
        }
        else if(result == 4 && ddag_4 == 1){
           document.getElementById("current-classifier").innerHTML = "Current Classifier: " + 2 + " vs " + result;
           document.getElementById("current-class").innerHTML = "Current Class: " + " Not " + 2;
           ddag_4 += ddag_4;
        }

//final iteration
        else if(result == 1 && ddag_1 == 2){
           document.getElementById("current-classifier").innerHTML = "Current Classifier: " + result + " vs " + 4;
           document.getElementById("current-class").innerHTML = "Current Class: " + " Classified as " + result;
           document.getElementById("next").disabled = true;
        }
        else if(result == 2 && ddag_2 == 2){
           document.getElementById("current-classifier").innerHTML = "Current Classifier: " + result + " vs " + 4;
           document.getElementById("current-class").innerHTML = "Current Class: " + " Classified as " + result;
           document.getElementById("next").disabled = true;
        }
        else if(result == 3 && ddag_3 == 2){
           document.getElementById("current-classifier").innerHTML = "Current Classifier: " + result + " vs " + 4;
           document.getElementById("current-class").innerHTML = "Current Class: " + " Classified as " + result;
           document.getElementById("next").disabled = true;
        }
        else if(result == 4 && ddag_4 == 2){
           document.getElementById("current-classifier").innerHTML = "Current Classifier: " + 3 + " vs " + result;
           document.getElementById("current-class").innerHTML = "Current Class: " + " Classified as " + result;
           document.getElementById("next").disabled = true;
       }
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