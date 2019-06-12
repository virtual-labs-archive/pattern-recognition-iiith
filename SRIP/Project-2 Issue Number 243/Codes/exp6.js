var data1=[0,0,0];
var data=[];
var res=0;
var learning_rate=0.001;
var iterations=0;
var row=[];
var xVal;
var yVal = 10;
window.onload = function() {
            var dps=[];
            var dps1 = [];
            var dps2 = [];
            var chart = new CanvasJS.Chart("chartContainer", {
                axisX:{
                    title: "X-axis"
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

            function addDataPoints() {
                for (var j = 0; j < data.length; j++) { 
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
            function addstart() {
                iterations=1;
                document.getElementById("demo").innerHTML="iterations: " +iterations;
                var sign=0;
                for(var i=0; i<3; i++) {
                    sign=sign + data1[i]*data[iterations-1][i];
                }
                if(sign>=0){
                    sign=1;
                  } 
                  else {
                    sign=0;
                  }
                 var res = (row[iterations-1] - sign);
                for(var i=0;i<3;i++){
                    data1[i]=data1[i]+data[iterations-1][i]* learning_rate*res;
                }
                document.getElementById("demo1").innerHTML=data1[0]+","+data1[1]+","+data1[2];;
                addDataPoints();
            }
            function addstep() {
                iterations=iterations+1;
                document.getElementById("demo").innerHTML="iterations: " +iterations;
                var sign=0;
                for(var i=0; i<3; i++) {
                    sign=sign + data1[i]*data[iterations-1][i];
                }
                if(sign>=0){
                    sign=1;
                  } 
                  else {
                    sign=0;
                  }
                 var res = (row[iterations-1] - sign);
                 for(var i=0; i<3; i++) {
                    data1[i]=data1[i]+data[iterations-1][i]*learning_rate*res;
                }
                document.getElementById("demo1").innerHTML=data1[0]+","+data1[1]+","+data1[2];;
                addDataPoints();
            }
            function addstep100() {
                iterations=iterations+100;
                document.getElementById("demo").innerHTML="iterations: " +iterations;
                var sign=0;
                for(var i=0; i<3; i++) {
                    sign=sign + data1[i]*data[iterations-1][i];
                }
                if(sign>=0){
                    sign=1;
                  } 
                  else {
                    sign=0;
                  }
                 var res = (row[iterations-1] - sign);
                 for(var i=0; i<3; i++) {
                    data1[i]=data1[i]+data[iterations-1][i]* learning_rate*res;
                }
                document.getElementById("demo1").innerHTML=data1[0]+","+data1[1]+","+data1[2];
                addDataPoints();
            }
            var renderButton1 = document.getElementById("renderButton1");
            renderButton1.addEventListener("click", addDataPointsAndRender1);
            var renderButton2 = document.getElementById("renderButton2");
            renderButton2.addEventListener("click", addDataPointsAndRender2);
            var start1=document.getElementById("start1");
            start1.addEventListener("click", addstart);
            var step1=document.getElementById("step1");
            step1.addEventListener("click", addstep);
            var step100=document.getElementById("step100");
            step100.addEventListener("click", addstep100);
        }