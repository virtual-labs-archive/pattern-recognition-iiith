window.onload = function() {
	var loadDataset = 0;
//first dataset
	var series11 = [{x: 1, y: 3}, {x: 2, y: 2}];
	var series12 = [{x: 4, y: 10}, {x: 5, y: 10.5}];
	var series13 = [{x: 7, y: 6}, {x: 7, y: 7}];
	var series14 = [{x: 10, y: 1}, {x: 11, y: 1}];
//second dataset
	var series21 = [{x: 3, y: 4}, {x: 2, y: 3}];
	var series22 = [{x: 5, y: -2}, {x: 4, y: -3}];
	var series23 = [{x: -2, y: -4}, {x: -3, y: -4}];
	var series24 = [{x: -4, y: 2}, {x: -5, y: 2}];
//third dataset
    var series31 = [{x: -13, y: -7}, {x: -12, y: -5}];
    var series32 = [{x: -2, y: -1}, {x: -3, y: -2}];
    var series33 = [{x: -2, y: -17}, {x: -1, y: -19}];
    var series34 = [{x: -17, y: -15}, {x: -13, y: -16}];
//fourth dataset
    var series41 = [{x: 0.3, y: 0.2}, {x: 0.4, y: 0.3}];
    var series42 = [{x: -0.4, y: -0.3}, {x: -0.3, y: -0.2}];
    var series43 = [{x: 0.2, y: -0.4}, {x: 0.3, y: -0.2}];
    var series44 = [{x: -0.4, y: 0.6}, {x: -0.7, y: 0.3}];
	
	var ans = [];
	var ddag1;
	var ddag2;
    var ddag3;
    var ddag4;
    var result;

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
    var p = 0;

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
		if(loadDataset == 2){
            chart.options.data[0].dataPoints = series21;
            chart.options.data[1].dataPoints = series22;
            chart.options.data[2].dataPoints = series23;
            chart.options.data[3].dataPoints = series24;
            chart.render();
        }

        if(loadDataset == 3){
            chart.options.data[0].dataPoints = series31;
            chart.options.data[1].dataPoints = series32;
            chart.options.data[2].dataPoints = series33;
            chart.options.data[3].dataPoints = series34;
            chart.render();
        }

        if(loadDataset == 4){
            chart.options.data[0].dataPoints = series41;
            chart.options.data[1].dataPoints = series42;
            chart.options.data[2].dataPoints = series43;
            chart.options.data[3].dataPoints = series44;
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

	function compare(c1, c2, c3, c4){
    	if(c1 < c2 && c1 < c3 && c1 < c4){
    		return 1;
    	}
    	if(c2 < c1 && c2 < c3 && c2 < c4){
    		return 2;
    	}
    	if(c3 < c1 && c3 < c2 && c3 < c4){
    		return 3;
    	}
    	if(c4 < c1 && c4 < c3 && c4 < c3){
    		return 4;
    	}
    	else{
    		return 1;
    	}
    }

    function classify(){
// first dataset
        if(loadDataset == 1){
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a1 = series11[i].x - ans[j].x;
                    b1 = series11[i].y - ans[j].y;
                    c1 += Math.sqrt((a1 * a1) + (b1 * b1));
                    a2 = series12[i].x - ans[j].x;
                    b2 = series12[i].y - ans[j].y;
                    c2 += Math.sqrt((a2 * a2) + (b2 * b2));
                    a3 = series13[i].x - ans[j].x;
                    b3 = series13[i].y - ans[j].y;
                    c3 += Math.sqrt((a3 * a3) + (b3 * b3));
                    a4 = series14[i].x - ans[j].x;
                    b4 = series14[i].y - ans[j].y;
                    c4 += Math.sqrt((a4 * a4) + (b4 * b4));
                }
            }
            p = compare(c1, c2, c3, c4);
            return p; 
        }

//second dataset
        if(loadDataset == 2){
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a1 = series21[i].x - ans[j].x;
                    b1 = series21[i].y - ans[j].y;
                    c1 += Math.sqrt((a1 * a1) + (b1 * b1));
                    a2 = series22[i].x - ans[j].x;
                    b2 = series22[i].y - ans[j].y;
                    c2 += Math.sqrt((a2 * a2) + (b2 * b2));
                    a3 = series23[i].x - ans[j].x;
                    b3 = series23[i].y - ans[j].y;
                    c3 += Math.sqrt((a3 * a3) + (b3 * b3));
                    a4 = series24[i].x - ans[j].x;
                    b4 = series24[i].y - ans[j].y;
                    c4 += Math.sqrt((a4 * a4) + (b4 * b4));
                }
            }
            p = compare(c1, c2, c3, c4);
            return p;
        }

//third dataset
        if(loadDataset == 3){
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a1 = series31[i].x - ans[j].x;
                    b1 = series31[i].y - ans[j].y;
                    c1 += Math.sqrt((a1 * a1) + (b1 * b1));
                    a2 = series32[i].x - ans[j].x;
                    b2 = series32[i].y - ans[j].y;
                    c2 += Math.sqrt((a2 * a2) + (b2 * b2));
                    a3 = series33[i].x - ans[j].x;
                    b3 = series33[i].y - ans[j].y;
                    c3 += Math.sqrt((a3 * a3) + (b3 * b3));
                    a4 = series34[i].x - ans[j].x;
                    b4 = series34[i].y - ans[j].y;
                    c4 += Math.sqrt((a4 * a4) + (b4 * b4));
                }
            }
            p = compare(c1, c2, c3, c4);
            return p;
        }

//fourth dataset
        if(loadDataset == 4){
            for(i = 0; i<2; i++){
                for(j = 0; j < ans.length; j++){
                    a1 = series41[i].x - ans[j].x;
                    b1 = series41[i].y - ans[j].y;
                    c1 += Math.sqrt((a1 * a1) + (b1 * b1));
                    a2 = series42[i].x - ans[j].x;
                    b2 = series42[i].y - ans[j].y;
                    c2 += Math.sqrt((a2 * a2) + (b2 * b2));
                    a3 = series43[i].x - ans[j].x;
                    b3 = series43[i].y - ans[j].y;
                    c3 += Math.sqrt((a3 * a3) + (b3 * b3));
                    a4 = series44[i].x - ans[j].x;
                    b4 = series44[i].y - ans[j].y;
                    c4 += Math.sqrt((a4 * a4) + (b4 * b4));
                }
            }
            p = compare(c1, c2, c3, c4);
            return p;
        }
    }

    function startDDAG(){
        result = classify();
        //console.log(result);
        ddag1 = 1;
        ddag2 = 1;
        ddag3 = 1;
        ddag4 = 1;
        if(result == 1){
            document.getElementById("current-classifier").textContent = "Current Classifier: " + result + " vs " + 2;
            document.getElementById("current-class").textContent = "Current Class: " + " Not " + 2;
        }
    	if(result == 2 || result == 3 || result == 4){
            document.getElementById("current-classifier").textContent = "Current Classifier: " + 1 + " vs " + result;
            document.getElementById("current-class").textContent = "Current Class: " + " Not " + 1;
        }
        document.getElementById("next").disabled = false;
    }

    function nextDDAG(){
    	if(result == 1){
    		if(ddag1 === 1){
            	document.getElementById("current-classifier").textContent = "Current Classifier: " + result + " vs " + 3;
            	document.getElementById("current-class").textContent = "Current Class: " + " Not " + 3;
            	ddag1 += ddag1;
    		}
    		else{
    			document.getElementById("current-classifier").textContent = "Current Classifier: " + result + " vs " + 4;
    			document.getElementById("current-class").textContent = "Current Class: " + " Classified as " + result;
    			document.getElementById("next").disabled = true;
    		}
    	}

    	if(result == 2){
    		if(ddag2 === 1){
    			document.getElementById("current-classifier").textContent = "Current Classifier: " + result + " vs " + 3;
    			document.getElementById("current-class").textContent = "Current Class: " + " Not " + 3;
    			ddag2 += ddag2;
    		}
    		else{
    			document.getElementById("current-classifier").textContent = "Current Classifier: " + result + " vs " + 4;
    			document.getElementById("current-class").textContent = "Current Class: " + " Classified as " + result;
    			document.getElementById("next").disabled = true;
    		}
    	}
        
        if(result == 3){
    		if(ddag3 === 1){
    			document.getElementById("current-classifier").textContent = "Current Classifier: " + 2 + " vs " + result;
    			document.getElementById("current-class").textContent = "Current Class: " + " Not " + 2;
    			ddag3 += ddag3;
    		}
    		else{
    			document.getElementById("current-classifier").textContent = "Current Classifier: " + result + " vs " + 4;
    			document.getElementById("current-class").textContent = "Current Class: " + " Classified as " + result;
    			document.getElementById("next").disabled = true;
    		}
    	}

    	if(result == 4){
    		if(ddag3 === 1){
    			document.getElementById("current-classifier").textContent = "Current Classifier: " + 2 + " vs " + result;
    			document.getElementById("current-class").textContent = "Current Class: " + " Not " + 2;
    			ddag3 += ddag3;
    		}
    		else{
    			document.getElementById("current-classifier").textContent = "Current Classifier: " + 3 + " vs " + result;
    			document.getElementById("current-class").textContent = "Current Class: " + " Classified as " + result;
    			document.getElementById("next").disabled = true;
    		}
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