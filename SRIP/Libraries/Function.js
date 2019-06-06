var ctx = document.getElementById('myChart').getContext('2d');
function load() 
{
  //x is the value selected by user from the list
var x=document.getElementById("s1").value;
ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines,canvas.width,canvas.height);
ctx.translate(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines);
script();
	 if(x=="T1")
      {
      document.getElementById("t1").value=1;
      document.getElementById("t2").value=0;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=1;
      document.getElementById("t6").value=0;
      document.getElementById("t7").value=1;
      document.getElementById("t8").value=0;
      document.getElementById("t9").value=0;
      document.getElementById("t10").value=1;
      document.getElementById("t11").value=0;
      document.getElementById("t12").value=1;
      ctx.beginPath();
      ctx.arc(grid_size *1,-grid_size * 0,grid_size *(1/2), 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(grid_size *0,-grid_size * 0, grid_size *(1/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      } 
    else if (x=="T2")
    {
      document.getElementById("t1").value=0;
      document.getElementById("t2").value=0;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=1;
      document.getElementById("t6").value=0.5;
      document.getElementById("t7").value=1;
      document.getElementById("t8").value=-0.5;
      document.getElementById("t9").value=0.5;
      document.getElementById("t10").value=1;
      document.getElementById("t11").value=-0.5;
      document.getElementById("t12").value=1;
    }  
    else if (x=="T3")
    {
      document.getElementById("t1").value=0;
      document.getElementById("t2").value=0;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=1;
      document.getElementById("t6").value=0;
      document.getElementById("t7").value=2;
      document.getElementById("t8").value=0;
      document.getElementById("t9").value=0;
      document.getElementById("t10").value=1;
      document.getElementById("t11").value=0;
      document.getElementById("t12").value=2;
      ctx.beginPath();
      ctx.arc(grid_size *0,-grid_size * 0,grid_size *(1/2), 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(grid_size *0,-grid_size * 0, grid_size *(2/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
    }  
    else
    {
      document.getElementById("t1").value=2;
      document.getElementById("t2").value=1;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=2;
      document.getElementById("t6").value=0.5;
      document.getElementById("t7").value=1;
      document.getElementById("t8").value=0;
      document.getElementById("t9").value=0.5;
      document.getElementById("t10").value=1;
      document.getElementById("t11").value=0;
      document.getElementById("t12").value=1;
      ctx.beginPath();
      ctx.arc(grid_size *0,-grid_size * 0, grid_size *(1/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
    }  
}
function generate()
{
  ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines,canvas.width,canvas.height);
  ctx.translate(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines);
  script();
  var value1=document.getElementById("t1").value;
  var value2=document.getElementById("t2").value;
  var value3=document.getElementById("t3").value;
  var value4=document.getElementById("t4").value;
  var value5=document.getElementById("t5").value;
  var value6=document.getElementById("t6").value;
  var value7=document.getElementById("t7").value;
  var value8=document.getElementById("t8").value;
  var value9=document.getElementById("t9").value;
  var value10=document.getElementById("t10").value;
  var value11=document.getElementById("t11").value;
  var value12=document.getElementById("t12").value;
  var digit= /^\d+$/;
  if((value1!="" && value1.match(digit)) ||(value2!="" && value2.match(digit)) ||(value3!="" && value3.match(digit)) ||(value4!="" && value4.match(digit)) ||(value5!="" && value5.match(digit)) ||(value6!="" && value6.match(digit)) ||(value7!="" && value7.match(digit)) ||(value8!="" && value8.match(digit)) ||(value9!="" && value9.match(digit)) ||(value10!="" && value10.match(digit)) ||(value11!="" && value11.match(digit)) ||(value12!="" && value12.match(digit)) )
  {
   //condition to check whether circle is to be drawn or ellipse.For that the values of major and minor axis is compared.If equal then it is circle otherwise it is ellipse
   //for class 1
   if(value5===value10 && value5>'0')
   {
    ctx.beginPath();
    ctx.arc(grid_size *value1,-grid_size * value2,grid_size *(value5/2), 0, Math.PI * 2, true);
    ctx.stroke();
   }
   else
   {
   //for ellipse
   }
   //for Class2 
   if(value7===value12 && value7>'0')
   {
    ctx.beginPath();
    ctx.arc(grid_size *value3,-grid_size * value4,grid_size *(value7/2), 0, Math.PI * 2, true);
    ctx.strokeStyle= "red";
    ctx.stroke();
   }
   else
   {
    //for ellipse
   }

  }
}
document.getElementById("b1").addEventListener('click',load);
document.getElementById("b5").addEventListener('click',generate);
