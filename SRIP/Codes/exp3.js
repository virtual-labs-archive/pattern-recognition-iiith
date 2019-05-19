/*Creating Graph1*/
var xaxis = [-1.00, -0.75, -0.50, -0.25, 0.00, 0.25, 0.50, 0.75, 1.00];
var ctx = document.getElementById("graph1");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: xaxis
  }
  
});