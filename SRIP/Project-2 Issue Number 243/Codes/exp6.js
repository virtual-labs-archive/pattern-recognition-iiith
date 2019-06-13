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
    var xValClass1=[];
    var yValClass1=[];
    var xValClass2=[];
    var yValClass2=[];
    var xmeanClass1=0;
    var ymeanClass1=0;
    var xmeanClass2=0;
    var ymeanClass2=0;

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
        xValClass1.push(xValue);
        yValClass1.push(yValue);
        
        dps.push({
            x: xValue,
            y: yValue
            });
        chart.render();
        console.log(xValClass1);
        console.log(yValClass1);
    }
    
    function addDataPointsAndRender2() {
        xValue = Number(document.getElementById("xValue").value);
        yValue = Number(document.getElementById("yValue").value);
        xValClass2.push(xValue);
        yValClass2.push(yValue);
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
        console.log(xValClass2);
        console.log(yValClass2);
    }
    
    function addcalculateMLE() {
        for(var i=0; i<xValClass1.length; i++){
            xmeanClass1 = xmeanClass1 + xValClass1[i];
        }
        xmeanClass1 = xmeanClass1/xValClass1.length;

        for(var i=0; i<yValClass1.length; i++){
            ymeanClass1 = ymeanClass1 + yValClass1[i];
        }
        ymeanClass1 = ymeanClass1/yValClass1.length;

        for(var i=0; i<xValClass2.length; i++){
            xmeanClass2 = xmeanClass2 + xValClass2[i];
        }
        xmeanClass2 = xmeanClass2/xValClass2.length;

        for(var i=0; i<yValClass2.length; i++){
            ymeanClass2 = ymeanClass2 + yValClass2[i];
        }
        ymeanClass2 = ymeanClass2/yValClass2.length;

        document.getElementById("mean1x").innerHTML=xmeanClass1;
        document.getElementById("mean1y").innerHTML=ymeanClass1;
        document.getElementById("mean2x").innerHTML=xmeanClass2;
        document.getElementById("mean2y").innerHTML=ymeanClass2;
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