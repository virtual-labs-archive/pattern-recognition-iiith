window.onload = function() {
    var t1dataset = [["Class", "ImageID", "Contrast Ratio", "Aspect Ratio", "Perimeter", "X-Symmetry", "Y-Symmetry", "Holes"], 
    [0, 2, 0.19, 0.092, 87, 131, 137, 2],
    [0, 22, 0.204, 0.095, 86, 143, 133, 2],
    [0, 35, 0.215505761659127, 0.0847880299251871, 77.0, 113.0, 119.0, 2.0], 
    [0, 38, 0.236594959162299, 0.0897755610972568, 73.0, 132.0, 130.0, 2.0],
    [0, 52, 0.278957873167097, 0.0972568578553617, 93.0, 149.0, 125.0, 2.0]];
    var series1 = [];
    var series2 = [];
    var dataset = 0;
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
            dataPoints: series1
        },
        {
            showInLegend: true,           
            legendText: "Class 2",
            color: "blue",
            type: "scatter",
            dataPoints: series2
            }]
        });

    function load(){
        dataset = document.getElementById("dataset-button").value;
        document.getElementById("select-1-button").disabled = false;
        document.getElementById("select-2-button").disabled = false;
        document.getElementById("plot-button").disabled = false;
        document.getElementById("test-button").disabled = false;
        document.getElementById("target").textContent = "Target Accuracy: " + dataset;
        document.getElementById("table-id").style.visibility = "visible";
        var table = document.createElement("TABLE");
        table.border = "1";
        table.width="100%";
 
        //Get the count of columns.
        var columnCount = t1dataset[0].length;
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = t1dataset[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < t1dataset.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = t1dataset[i][j];
            }
        }
 
        var dvTable = document.getElementById("table-id");
        dvTable.textContent = "";
        dvTable.appendChild(table);
    }

    function plot(){
        series1.push({
            x: xValue,
            y: yValue
            });
        chart.render();
    }

    var lo = document.getElementById("load-button");
    lo.addEventListener("click", load);
    var plo = document.getElementById("plot-button");
    plo.addEventListener("click", plot);
};