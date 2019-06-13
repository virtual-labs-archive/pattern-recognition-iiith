var ctx = document.getElementById('myChart').getContext('2d');
var previous_x="NIL";
var flag=-1;
//flag is the variable which tells which function among load and generate was atlast called. 
function load() 
{
  //x is the value selected by user from the list
flag=0;
var x=document.getElementById("s1").value;
   if(x=="T1")
      {
        if(previous_x=="T2")
        {
          ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
          ctx.translate(-grid_size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines);          
        }
        else
        {
          ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines,canvas.width,canvas.height);     
          ctx.translate(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines);
        }
      script();
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
      previous_x=x;
      } 
    else if (x=="T2")
    {
      if(previous_x=="T2")
        {
          ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
          ctx.translate(-grid_size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines);          
        }
        else
        {
          ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines,canvas.width,canvas.height);     
          ctx.translate(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines);
        }
      script_for_T2_dataset();
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
      ctx.beginPath();
      ctx.ellipse(0,0,grid_size*(1/2),25*(1/2),0.5, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
      var ct= document.getElementById('myChart').getContext('2d');
      ct.beginPath();
      ct.moveTo(-grid_size*0.42,-25*.6);
      ct.lineTo(grid_size*0.42,25*0.6);
      ct.moveTo(-grid_size*0.22,25*0.26);
      ct.lineTo(grid_size*0.22,-25*0.26);
      ct.closePath();
      ct.strokeStyle= "red";
      ct.stroke();
      ctx.beginPath();
      ctx.ellipse(0,0,grid_size*(1/2),25*(1/2),-0.5, 0, 2 * Math.PI);
      ctx.strokeStyle="black";
      ctx.stroke();
      ct.beginPath();
      ct.moveTo(-grid_size*0.42,25*.6);
      ct.lineTo(grid_size*0.42,-25*0.6);
      ct.moveTo(-grid_size*0.22,-25*0.26);
      ct.lineTo(grid_size*0.22,25*0.26);
      ct.closePath();
      ct.stroke();
      previous_x=x;
    }  
    else if (x=="T3")
    {
      if(previous_x=="T2")
        {
          ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
          ctx.translate(-grid_size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines);          
        }
        else
        {
          ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines,canvas.width,canvas.height);     
          ctx.translate(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines);
        }
      script();
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
      previous_x=x;
    }  
    else
    {
      if(previous_x=="T2")
        {
          ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
          ctx.translate(-grid_size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines);          
        }
        else
        {
          ctx.clearRect(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines,canvas.width,canvas.height);     
          ctx.translate(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines);
        }
      script();
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
      ctx.ellipse(grid_size*2,-grid_size*1,grid_size*(2/2),grid_size*(1/2),-0.5, 0, 2 * Math.PI);
      ctx.stroke();
      var ct= document.getElementById('myChart').getContext('2d');
      ct.beginPath();
      ct.moveTo(grid_size*1.8,-grid_size*1.45);
      ct.lineTo(grid_size*2.15,-grid_size*0.5);
      ct.moveTo(grid_size*1.1,-grid_size*0.55);
      ct.lineTo(grid_size*2.9,-grid_size*1.4);
      ct.closePath();
      ct.stroke();
      ctx.beginPath();
      ctx.arc(grid_size *0,-grid_size * 0, grid_size *(1/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      previous_x=x;
    }  
}
function generate()
{
  flag=1;
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
function mark_all_points()
{
  var slider_value=document.getElementById("myRange").value;
  var x=document.getElementById("s1").value;
  load();
  if(x=="T2")
  {
    // Add behind elements.
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle= "#A9A9A9";
    ctx.fillRect(-grid_size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,slider_value,canvas.height);
   var x_coordinate=(Number(-(grid_size* y_axis_distance_grid_lines))+Number(slider_value));
   ctx.fillStyle="#CD5C5C";
    ctx.fillRect(x_coordinate,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
  }
  else
  {
    // Add behind elements.
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle= "#A9A9A9";
    ctx.fillRect(-grid_size* y_axis_distance_grid_lines,-grid_size*x_axis_distance_grid_lines,slider_value,canvas.height);
    var x_coordinate=(Number(-(grid_size* y_axis_distance_grid_lines))+Number(slider_value));
    ctx.fillStyle="#CD5C5C";
    ctx.fillRect(x_coordinate,-grid_size*x_axis_distance_grid_lines,canvas.width,canvas.height);
  }
}
function Clear()
{
  flag2=-1;
  if(flag==0)
    load();
  else(flag==1)
    generate();
}
var flag2=-1;
function markpoints(event)
{
  if(flag!=-1 && flag2==0)
  {
  var x_coordinate=event.clientX;
  var y_coordinate=event.clientY;
  var x=document.getElementById("s1").value;
  if(x=="T2")
  {
    x_coordinate=Number(x_coordinate)-310;
    y_coordinate=Number(y_coordinate)-225;
    if(x_coordinate%2==0)
     {
      ctx.fillStyle = "black";
      ctx.fillRect(x_coordinate,y_coordinate,10,10);
     }
    else
     {
      ctx.fillStyle = "red";
      ctx.fillRect(x_coordinate,y_coordinate,10,10); 
     }
  }
  else
  {
    x_coordinate=Number(x_coordinate)-310;
    y_coordinate=Number(y_coordinate)-380;
    if(x_coordinate%2==0)
     {
      ctx.fillStyle = "black";
      ctx.fillRect(x_coordinate,y_coordinate,10,10);
     }
    else
     {
      ctx.fillStyle = "red";
      ctx.fillRect(x_coordinate,y_coordinate,10,10); 
     }
  }
  }
}
function mark(event)
{
 flag2=0;
 markpoints(event);
}
document.getElementById("b1").addEventListener('click',load);
document.getElementById("b5").addEventListener('click',generate);
document.getElementById("b3").addEventListener('click',mark_all_points);
document.getElementById("b4").addEventListener('click',Clear);
document.getElementById("b2").addEventListener('click',mark);

