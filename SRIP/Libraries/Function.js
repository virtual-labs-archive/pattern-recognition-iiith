var i=0;
var ctx = document.getElementById('myChart').getContext('2d');
function load() 
{
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
      //var ct = document.getElementById('myChart').getContext('2d');
      ctx.beginPath();
      ctx.arc(grid_size *1,-grid_size * 0,grid_size *(1/2), 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(grid_size *0,-grid_size * 0, grid_size *(1/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      i++;
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
      i++;
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
      i++;  
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
      i++;
    }  
}

document.getElementById("b1").addEventListener('click',load);
