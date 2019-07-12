window.onload = function() {
    var series1 = []; //stores class 1 points and plots on chart
    var series2 = []; //stores class 2 points and plots on chart
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

    function plotfunction(){
        var xValue = 1;
        var yValue = 2;
        series1.push({
            x: xValue,
            y: yValue
            });
        chart.render();
    }

    var plo = document.getElementById("plot");
    plo.addEventListener("click", plotfunction);
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