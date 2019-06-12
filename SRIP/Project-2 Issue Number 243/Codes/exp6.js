var data1=[0,0,0];
var data=[];
var res=0;
var learning_rate=0.001;
var iterations=0;
var row=[];
var xVal;
var yVal = 100;
var dataLength=50;
window.onload = function() {
var dps=[];
var dps1 = [];
var dps2 = [];
var chart = new CanvasJS.Chart("chartContainer", {
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
  });

var chart1 = new CanvasJS.Chart("chartContainer1",{
  zoomEnabled: true,
  axisX:{
  title: "X-axis",
  gridThickness: 1
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
  },
  {
  type: "line",    
  dataPoints: dps2 
  }]
  });

function addDataPoints() {
  for (var j = 0; j < dataLength; j++) { 
    console.log(data[j][0]);
    xVal = data[j][0];
    yVal = (-data1[0]/data1[1])*xVal -(data1[2]/data1[1]);
    dps2.push({
                    x: xVal,
                    y: yVal
                  });  
                  chart1.render();    
                }
              }

            function addDataPointsAndRender1() {
                xValue = Number(document.getElementById("xValue").value);
                yValue = Number(document.getElementById("yValue").value);
                var arr=[];
                arr.push(xValue,yValue,1);
                row.push(1);
                data.push(arr);
                arr=[];
                dps.push({
                    x: xValue,
                    y: yValue
                });
                chart.render();
                
            }

            function addDataPointsAndRender2() {
                xValue = Number(document.getElementById("xValue").value);
                yValue = Number(document.getElementById("yValue").value);
                var arr=[];
                arr.push(xValue,yValue,1);
                row.push(0);
                data.push(arr);
                arr=[];
                dps1.push({
                    x: xValue,
                    y: yValue
                    
                });
                chart.render();
                
            }