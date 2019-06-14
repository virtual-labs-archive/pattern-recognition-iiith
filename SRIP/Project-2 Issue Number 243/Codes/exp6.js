window.onload = function() {
    var distributionFunction = 0;
    var series1 = []; //stores class 1 points and plots on chart
    var series2 = []; //stores class 2 points and plots on chart
    var xmin1 = 0;
    var ymin1 = 0;
    var xmin2 = 0;
    var ymin2 = 0;
    var xmax1 = 0;
    var ymax1 = 0;
    var xmax2 = 0;
    var ymax2 = 0;
    var xmeanClass1 = 0;
    var ymeanClass1 = 0;
    var xmeanClass2 = 0;
    var ymeanClass2 = 0;
    var covariance11Val1 = 0;
    var covariance12Val1 = 0;
    var covariance22Val1 = 0;
    var covariance11Val2 = 0;
    var covariance12Val2 = 0;
    var covariance22Val2 = 0;
    var s1Size = 0;
    var s2Size = 0;

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

    function addDataPointsAndRender1() {
        xValue = Number(document.getElementById("xValue").value);
        yValue = Number(document.getElementById("yValue").value);
        series1.push({
            x: xValue,
            y: yValue
            });
        chart.render();
    }
    
    function addDataPointsAndRender2() {
        xValue = Number(document.getElementById("xValue").value);
        yValue = Number(document.getElementById("yValue").value);
        series2.push({
            x: xValue,
            y: yValue
        });
        chart.render();
    }
    
    function clear(){
        series1 = []; 
        series2 = []; 
        xmeanClass1 = 0.0;
        ymeanClass1 = 0.0;
        xmeanClass2 = 0.0;
        ymeanClass2 = 0.0;
        chart.render();
    }

    function addcalculateMLE() {
        distributionFunction = document.getElementById("distribution-function").value;
        var i1 = 0;
        var i2 = 0; 
        xmin1 = 100.0;
        ymin1 = 100.0;
        xmin2 = 100.0;
        ymin2 = 100.0;
        xmax1 = -100.0;
        ymax1 = -100.0;
        xmax2 = -100.0;
        ymax2 = -100.0;
        xmeanClass1 = 0.0;
        ymeanClass1 = 0.0;
        xmeanClass2 = 0.0;
        ymeanClass2 = 0.0;
        var l1gammax = 0.0;
        var l1gammay = 0.0;

    //FINDING THE MEAN FOR X-VALUE AND Y-VALUE OF CLASS 1
        for(i1 = 0; i1 < series1.length; i1++){
            xmeanClass1 += series1[i1].x;
            ymeanClass1 += series1[i1].y;
        
            if (distributionFunction === 1) {
                l1gammax += series1[i1].x;
                l1gammay += series1[i1].y;
            }
            if (series1[i1].x < xmin1) {
                xmin1 = series1[i1].x;
            }
            if (series1[i1].x > xmax1) {
                xmax1 = series1[i1].x;
            }
            if (series1[i1].y < ymin1) {
                ymin1 = series1[i1].y;
            }
            if (!series1[i1].y > ymax1) 
                continue;
            ymax1 = series1[i1].y;
        }

        if (distributionFunction === 1) {
            l1gammax /= series1.length;
            l1gammay /= series1.length;
        }

        xmeanClass1 = xmeanClass1 / series1.length;
        ymeanClass1 = ymeanClass1 / series1.length;
        if (distributionFunction === 0) {
            document.getElementById("mean1x").innerHTML = xmeanClass1;
            document.getElementById("mean1y").innerHTML = ymeanClass1;
        }

    //VARIANCE CALCULATION FOR X-VALUE AND Y-VALUE OF CLASS 1
        covariance11Val1 = 0.0;
        covariance12Val1 = 0.0;
        covariance22Val1 = 0.0;
        for (i1 = 0; i1 < series1.length; i1++) {
            covariance11Val1 += Math.pow(series1[i1].x, 2.0);
            covariance22Val1 += Math.pow(series1[i1].y, 2.0);
            covariance12Val1 += series1[i1].y * series1[i1].x;
        }

        covariance11Val1 = covariance11Val1 / series1.length - xmeanClass1 * xmeanClass1;
        covariance22Val1 = covariance22Val1 / series1.length - ymeanClass1 * ymeanClass1;
        covariance12Val1 = covariance12Val1 / series1.length - xmeanClass1 * ymeanClass1;
        
        if (distributionFunction === 0) {
            document.getElementById("c11-1").innerHTML = covariance11Val1;
            document.getElementById("c12-1").innerHTML = covariance12Val1;
            document.getElementById("c21-1").innerHTML = covariance12Val1;
            document.getElementById("c22-1").innerHTML = covariance22Val1;
        }

        if (distributionFunction === 1) {
            document.getElementById("c11-1").innerHTML = "";
            document.getElementById("c12-1").innerHTML = "";
            document.getElementById("c21-1").innerHTML = "";
            document.getElementById("c22-1").innerHTML = "";
        }
        s1Size = series1.length;

    //FINDING THE MEAN FOR X-VALUE AND Y-VALUE OF CLASS 2
        var l2gammax = 0.0;
        var l2gammay = 0.0;

        for(i2 = 0; i2 < series2.length; i2++){
            xmeanClass2 += series2[i2].x;
            ymeanClass2 += series2[i2].y;
        
            if (distributionFunction === 1) {
                l2gammax += series2[i2].x;
                l2gammay += series2[i2].y;
            }
            if (series2[i2].x < xmin2) {
                xmin2 = series2[i2].x;
            }
            if (series2[i2].x > xmax2) {
                xmax2 = series2[i2].x;
            }
            if (series2[i2].y < ymin2) {
                ymin2 = series2[i2].y;
            }
            if (!series2[i2].y > ymax2){
                continue;
            }
            ymax2 = series2[i2].y;
        }

        if (distributionFunction === 1) {
            l2gammax /= series2.length;
            l2gammay /= series2.length;
        }

        xmeanClass2 = xmeanClass2 / series2.length;
        ymeanClass2 = ymeanClass2 / series2.length;
        if (distributionFunction === 0) {
            document.getElementById("mean2x").innerHTML = xmeanClass2;
            document.getElementById("mean2y").innerHTML = ymeanClass2;
        }

    //VARIANCE CALCULATION FOR X-VALUE AND Y-VALUE OF CLASS 2
        covariance11Val2 = 0.0;
        covariance12Val2 = 0.0;
        covariance22Val2 = 0.0;
        for (i2 = 0; i2 < series2.length; i2++) {
            covariance11Val2 += Math.pow(series2[i2].x, 2.0);
            covariance22Val2 += Math.pow(series2[i2].y, 2.0);
            covariance12Val2 += series2[i2].y * series2[i2].x;
        }

        covariance11Val2 = covariance11Val2 / series2.length - xmeanClass2 * xmeanClass2;
        covariance22Val2 = covariance22Val2 / series2.length - ymeanClass2 * ymeanClass2;
        covariance12Val2 = covariance12Val2 / series2.length - xmeanClass2 * ymeanClass2;
        
        if (distributionFunction === 0) {
            document.getElementById("c11-2").innerHTML = covariance11Val2;
            document.getElementById("c12-2").innerHTML = covariance12Val2;
            document.getElementById("c21-2").innerHTML = covariance12Val2;
            document.getElementById("c22-2").innerHTML = covariance22Val2;
        }

        if (distributionFunction === 1) {
            document.getElementById("c11-1").innerHTML = "";
            document.getElementById("c12-1").innerHTML = "";
            document.getElementById("c21-1").innerHTML = "";
            document.getElementById("c22-1").innerHTML = "";
            document.getElementById("c11-2").innerHTML = "";
            document.getElementById("c12-2").innerHTML = "";
            document.getElementById("c21-2").innerHTML = "";
            document.getElementById("c22-2").innerHTML = "";
        }
        s2Size = series2.length;

    }  
    
    function addmarkAll() {
        var j;
        var p1;
        var p2;
        var i;
        var series1=[];
        var series2 = [];
        var l = -1;
        var r = 1;
        if(distributionFunction === 0){
            for(i = l; i < r; i += (r - l) / 100.0){
                for (j = l; j < r; j += (r - l) / 100.0) {
                    p1 = prob1(j, i);
                    if (p1 > (p2 = prob2(j, i))) {
                        series1.push({
                            x: i,
                            y: j
                        });
                        chart.render();
                        continue;
                    }
                    series2.push({
                        x: i,
                        y: j
                    });
                    chart.render();
                }
            }
            //chart.render();
        }

        if (distributionFunction === 1) {
            for (i = l; i < r; i += (r - l) / 100.0) {
                for (j = l; j < r; j += (r - l) / 100.0) {
                    p1 = prob1(j, i);
                    if (p1 > (p2 = prob2(j, i))) {
                        series1.push({
                            x: i,
                            y: j
                        });
                        chart.render();
                    }
                    if (p2 > p1) {
                        series2.push({
                            x: i,
                            y: j
                        });
                        chart.render();
                    }
                    if (p1 !== p2 || p1 === 0.0) {
                        continue;
                    }
                    series2.push({
                        x: i,
                        y: j
                    });
                    chart.render();
                }
            }
            //chart.render();
        }
        console.log(series1);
        console.log(series2);
        
    }
    
    function prob1(x, y){
        var r = 0.0;
        if(distributionFunction == 0){
            var sigmax = Math.sqrt(covariance22Val1);
            var sigmay = Math.sqrt(covariance11Val1);
            var rho = covariance12Val1 / (sigmax * sigmay);
            rho = 0.0;
            r = 1.0 / (6.283185307179586 * sigmax * sigmay * Math.sqrt(1.0 - rho * rho)) * Math.exp(-1.0 / (2.0 * (1.0 - rho * rho)) * (Math.pow(y - xmeanClass1, 2.0) / covariance11Val1 + Math.pow(x - ymeanClass1, 2.0) / covariance22Val1 - 2.0 * rho * (y - xmeanClass1) * (x - ymeanClass1) / (sigmax * sigmay)));
            if (distributionFunction == 1 && x <= xmax1 && x >= xmin1 && y <= ymax1 && y >= ymin1) {
                r = s1Size;
            }
            console.log(r);
        return r;
        }
        
    }

    function prob2(x, y) {
        var r = 0.0;
        if (distributionFunction == 0) {
            var sigmax = Math.sqrt(covariance22Val2);
            var sigmay = Math.sqrt(covariance11Val2);
            var rho = covariance12Val2 / (sigmax * sigmay);
            rho = 0.0; 
            r = 1.0 / (6.283185307179586 * sigmax * sigmay * Math.sqrt(1.0 - rho * rho)) * Math.exp(-1.0 / (2.0 * (1.0 - rho * rho)) * (Math.pow(y - xmeanClass2, 2.0) / covariance11Val2 + Math.pow(x - ymeanClass2, 2.0) / covariance22Val2 - 2.0 * rho * (y - xmeanClass2) * (x - ymeanClass2) / (sigmax * sigmay)));
        }
        if (distributionFunction == 1 && x <= xmax2 && x >= xmin2 && y <= ymax2 && y >= ymin2) {
            r = s2Size;
        }
        console.log(r);
        return r;
    }


    var addClass1 = document.getElementById("add-class-1");
    addClass1.addEventListener("click", addDataPointsAndRender1);
    var addClass2 = document.getElementById("add-class-2");
    addClass2.addEventListener("click", addDataPointsAndRender2);
    var clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clear)
    var calculateMLE = document.getElementById("calculate-mle");
    calculateMLE.addEventListener("click", addcalculateMLE);
    var markAll=document.getElementById("mark-all");
    markAll.addEventListener("click", addmarkAll);
}