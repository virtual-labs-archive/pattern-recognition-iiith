var data1=[0,0,0];
var data=[];
var res=0;
var learning_rate=0.001;
var iterations=0;
var row=[];
var xVal;
var yVal = 10;
window.onload = function() {
    var dps=[]; //stores class 1 points and plots on chart
    var dps1 = []; //stores class 2 points and plots on chart
    var dps2 = [];
    var chart = new CanvasJS.Chart("chartContainer", {
        axisX:{
            title: "X-axis"
        },
        axisY: {
            title: "Y-axis"
        },
        data: [{
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
        });

    function addDataPoints() {
        for(var j = 0; j < data.length; j++) { 
            xVal = data[j][0];
            yVal = (-data1[0]/data1[1])*xVal -(data1[2]/data1[1]);
            dps2.push({
                x: xVal,
                y: yVal
            });  
            chart.render();    
        }
    }

    function addDataPointsAndRender1() {
        xValue = Number(document.getElementById("xValue").value);
        yValue = Number(document.getElementById("yValue").value);
        /*var arr=[];
        arr.push(xValue,yValue,1);
        row.push(1);
        data.push(arr);
        arr=[];*/
        dps.push({
            x: xValue,
            y: yValue
            });
        chart.render();
        console.log(dps);
                
    }

    function addDataPointsAndRender2() {
        xValue = Number(document.getElementById("xValue").value);
        yValue = Number(document.getElementById("yValue").value);
        /*var arr=[];
        arr.push(xValue,yValue,1);
        row.push(0);
        data.push(arr);
        arr=[];*/
        dps1.push({
            x: xValue,
            y: yValue
        });
        chart.render();
        console.log(dps1);
    }
    
    function addcalculateMLE() {
        
    }
    
    function addmarkAll() {
        
    }
    
    var addClass1 = document.getElementById("add-class-1");
    addClass1.addEventListener("click", addDataPointsAndRender1);
    var addClass2 = document.getElementById("add-class-2");
    addClass2.addEventListener("click", addDataPointsAndRender2);
    var calculateMLE = document.getElementById("calculate-mle");
    calculateMLE.addEventListener("click", addcalculateMLE);
    var markAll=document.getElementById("mark-all");
    markAll.addEventListener("click", addmarkAll);
}