var data1=[0,0,0];
var data=[];
var res=0;
var learning_rate=0.001;
var iterations=0;
var row=[];
var xVal;
var yVal = 100;
var dataLength=50;


var chart1 = {
    axisX:{
        title: "X-axis",
        gridThickness: 1
        },
    axisY: {
            title: "Y-axis"
        },
    data: [
        {
            showInLegend: true,           
            legendText: "Class 1",
            color: "red",
            type: "scatter",
            dataPoints: dps
            },
            {
            showInLegend: true,           
            legendText: "Class 2",
            color: "blue",
            type: "scatter",
            dataPoints: dps1
            }]
}


window.onload = function() {
    var dps=[];
    var dps1 = [];
    var dps2 = [];
    var ctx = document.getElementById("chartContainer");
    window.myScatter = new Chart(ctx, myChart1);
    
    chart.render();
}