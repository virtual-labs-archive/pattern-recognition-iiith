var GridSize = 50;
var XAxisDistanceGridLines = 15;
var YAxisDistanceGridLines = 10;
var XAxisStartingPoint = { number: 0.125};
var YAxisStartingPoint = { number: 0.125};

var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");

// canvas width
var CanvasWidth = canvas.width;

// canvas height
var CanvasHeight = canvas.height;

function script()
{
    ctx.fillStyle="#000000";
     // no of vertical grid lines
var NumLinesX = Math.floor(CanvasHeight/GridSize);

// no of horizontal grid lines
var NumLinesY = Math.floor(CanvasWidth/GridSize);
var i=0;
// Draw grid lines along X-axis
for(i=0; i<=NumLinesX; i++)
 {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i === XAxisDistanceGridLines) {
        ctx.strokeStyle = "#000000";
    }
    else{
        ctx.strokeStyle = "#e9e9e9";
    }
    
    if(i === NumLinesX) {
        ctx.moveTo(0, GridSize*i);
        ctx.lineTo(CanvasWidth, GridSize*i);
    }
    else {
        ctx.moveTo(0, GridSize*i+0.5);
        ctx.lineTo(CanvasWidth, GridSize*i+0.5);
    }
    ctx.stroke();
}
// Draw grid lines along Y-axis
for(i=0; i<=NumLinesY; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i === YAxisDistanceGridLines) {
        ctx.strokeStyle = "#000000";
    }
    else{
        ctx.strokeStyle = "#e9e9e9";
    }
    
    if(i === NumLinesY) {
        ctx.moveTo(GridSize*i, 0);
        ctx.lineTo(GridSize*i, CanvasHeight);
    }
    else {
        ctx.moveTo((GridSize*i)+0.5, 0);
        ctx.lineTo((GridSize*i)+0.5, CanvasHeight);
    }
    ctx.stroke();
}
// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(YAxisDistanceGridLines*GridSize, XAxisDistanceGridLines*GridSize);

// Ticks marks along the positive X-axis
for(i=1; i<(NumLinesY - YAxisDistanceGridLines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo((GridSize*i)+0.5, -3);
    ctx.lineTo((GridSize*i)+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.fillText(XAxisStartingPoint.number*i, GridSize*i, 15);
}
// Ticks marks along the negative X-axis
for(i=1; i<YAxisDistanceGridLines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-((GridSize*i)+0.5), -3);
    ctx.lineTo(-((GridSize*i)+0.5), 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.fillText(-XAxisStartingPoint.number*i, -GridSize*i, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(NumLinesX - XAxisDistanceGridLines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, (GridSize*i)+0.5);
    ctx.lineTo(3, (GridSize*i)+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.fillText(-YAxisStartingPoint.number*i, -15, (GridSize*i)+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<XAxisDistanceGridLines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -((GridSize*i)+0.5));
    ctx.lineTo(3, -((GridSize*i)+0.5));
    ctx.stroke();

    // Text value at that point
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.fillText(YAxisStartingPoint.number*i, -15, -((GridSize*i)+3));
}
}
function scriptForT2Dataset()
{
    var i=0;
     ctx.fillStyle="#000000";
    // no of vertical grid lines
var NumLinesX = Math.floor(CanvasHeight/25);

// no of horizontal grid lines
var NumLinesY = Math.floor(CanvasWidth/25);

// Draw grid lines along X-axis
for(i=0; i<=NumLinesX; i++)
 {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i === XAxisDistanceGridLines) 
        {
            ctx.strokeStyle = "#000000";
        }
    else{
        ctx.strokeStyle = "#e9e9e9";
    }
    
    if(i === NumLinesX) {
        ctx.moveTo(0, 25*i);
        ctx.lineTo(CanvasWidth,25*i);
    }
    else {
        ctx.moveTo(0, 25*i+0.5);
        ctx.lineTo(CanvasWidth, 25*i+0.5);
    }
    ctx.stroke();
}
// Draw grid lines along Y-axis
for(i=0; i<=NumLinesY; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i === YAxisDistanceGridLines) {
        ctx.strokeStyle = "#000000";
    }
    else {
        ctx.strokeStyle = "#e9e9e9";
    }
    
    if(i === NumLinesY) {
        ctx.moveTo(GridSize*i, 0);
        ctx.lineTo(GridSize*i, CanvasHeight);
    }
    else {
        ctx.moveTo(GridSize*i+0.5, 0);
        ctx.lineTo(GridSize*i+0.5, CanvasHeight);
    }
    ctx.stroke();
}
// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(YAxisDistanceGridLines*GridSize, XAxisDistanceGridLines*25);

// Ticks marks along the positive X-axis
for(i=1; i<(NumLinesY - YAxisDistanceGridLines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(GridSize*i+0.5, -3);
    ctx.lineTo(GridSize*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.fillText(XAxisStartingPoint.number*i, GridSize*i, 15);
}
// Ticks marks along the negative X-axis
for(i=1; i<YAxisDistanceGridLines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-GridSize*i+0.5, -3);
    ctx.lineTo(-GridSize*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.fillText(-XAxisStartingPoint.number*i, -GridSize*i, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(NumLinesX - XAxisDistanceGridLines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, 25*i+0.5);
    ctx.lineTo(3, 25*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.fillText(-YAxisStartingPoint.number*i, -15, 25*i+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<XAxisDistanceGridLines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -25*i+0.5);
    ctx.lineTo(3, -25*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = "9px Arial";
    ctx.textAlign = "center";
    ctx.fillText(YAxisStartingPoint.number*i, -15, -25*i+3);
}
}
script();

