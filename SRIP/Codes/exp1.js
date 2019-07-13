window.onload = function() {
    var series1 = []; //stores class 1 points and plots on chart
    var series2 = []; //stores class 2 points and plots on chart
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
    }

    function plot(){
        var xValue = 1;
        var yValue = 2;
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
    /*var addClass2 = document.getElementById("add-class-2");
    addClass2.addEventListener("click", addDataPointsAndRender2);
    var addClass1 = document.getElementById("add-class-1");
    addClass1.addEventListener("click", addDataPointsAndRender1);
    var addClass2 = document.getElementById("add-class-2");
    addClass2.addEventListener("click", addDataPointsAndRender2);
    var addClass1 = document.getElementById("add-class-1");
    addClass1.addEventListener("click", addDataPointsAndRender1);
    var addClass2 = document.getElementById("add-class-2");
    addClass2.addEventListener("click", addDataPointsAndRender2);*/
};