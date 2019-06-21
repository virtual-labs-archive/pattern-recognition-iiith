var GridSize = 50;
var XAxisDistanceGridLines = 15;
var YAxisDistanceGridLines = 10;
var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");
var PreviousX="NIL";
var flag=-1;
//flag is the variable which tells which function among load and generate was atlast called. 
var flag2=-1;
var flag3=-1;
function load() 
{
  //x is the value selected by user from the list
flag=0;
var x=document.getElementById("s1").value;
   if(x==="T1")
      {
        if(PreviousX==="T2")
        {
          ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines,canvas.width,canvas.height);
          ctx.translate(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines);          
        }
        else
        {
          ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines,canvas.width,canvas.height);     
          ctx.translate(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines);
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
      ctx.arc((GridSize/0.125) *1,-(GridSize/0.125) * 0,(GridSize/0.125) *(1/2), 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc((GridSize/0.125) *0,-(GridSize/0.125) * 0, (GridSize/0.125) *(1/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      PreviousX=x;
      } 
    else if (x==="T2")
    {
      if(PreviousX==="T2")
        {
          ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines,canvas.width,canvas.height);
          ctx.translate(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines);          
        }
        else
        {
          ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines,canvas.width,canvas.height);     
          ctx.translate(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines);
        }
      scriptForT2Dataset();
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
      ctx.ellipse(0,0,(GridSize/0.125)*(1/2),(25/0.125)*(1/2),0.5, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
      ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*0,-(GridSize/0.125)*0,0,(25/0.125)*(1/2),0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*0,-(GridSize/0.125)*0,(GridSize/0.125)*(1/2),0,0.5, 0, 2 * Math.PI);
       ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(0,0,(GridSize/0.125)*(1/2),(25/0.125)*(1/2),-0.5, 0, 2 * Math.PI);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*0,-(GridSize/0.125)*0,0,(25/0.125)*(1/2),-0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*0,-(GridSize/0.125)*0,(GridSize/0.125)*(1/2),0,-0.5, 0, 2 * Math.PI);
       ctx.stroke();
      PreviousX=x;
    }  
    else if (x==="T3")
    {
      if(PreviousX==="T2")
        {
          ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines,canvas.width,canvas.height);
          ctx.translate(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines);          
        }
        else
        {
          ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines,canvas.width,canvas.height);     
          ctx.translate(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines);
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
      ctx.arc((GridSize/0.125) *0,-(GridSize/0.125) * 0,(GridSize/0.125) *(1/2), 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc((GridSize/0.125) *0,-(GridSize/0.125) * 0, (GridSize/0.125) *(2/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      PreviousX=x;
    }  
    else
    {
      if(PreviousX==="T2")
        {
          ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines,canvas.width,canvas.height);
          ctx.translate(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines);          
        }
        else
        {
          ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines,canvas.width,canvas.height);     
          ctx.translate(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines);
        }
      script();
      document.getElementById("t1").value=1;
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
      ctx.ellipse((GridSize/0.125)*1,-(GridSize/0.125)*1,(GridSize/0.125)*(2/2),(GridSize/0.125)*(1/2),-0.5, 0, 2 * Math.PI);
      ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*1,-(GridSize/0.125)*1,0,(GridSize/0.125)*(1/2),-0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*1,-(GridSize/0.125)*1,(GridSize/0.125)*(2/2),0,-0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
      ctx.arc((GridSize/0.125) *0,-(GridSize/0.125) * 0, (GridSize/0.125) *(1/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      PreviousX=x;
    }  
}
function generateForT2Dataset()
{
  ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines,canvas.width,canvas.height);
    ctx.translate(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines);
    scriptForT2Dataset();
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
  if((value1!=="" && value1.match(digit)) ||(value2!=="" && value2.match(digit)) ||(value3!=="" && value3.match(digit)) ||(value4!=="" && value4.match(digit)) ||(value5!=="" && value5.match(digit)) ||(value6!=="" && value6.match(digit)) ||(value7!=="" && value7.match(digit)) ||(value8!=="" && value8.match(digit)) ||(value9!=="" && value9.match(digit)) ||(value10!=="" && value10.match(digit)) ||(value11!=="" && value11.match(digit)) ||(value12!=="" && value12.match(digit)) )
  {
   //condition to check whether circle is to be drawn or ellipse.For that the values of major and minor axis is compared.If equal then it is circle otherwise it is ellipse
   //for class 1
   if (value5===value10 && value5===1)
   {
    load();
   }
   else if(value5===value10 && value5>"0")
   {
    ctx.beginPath();
    ctx.arc((GridSize/0.125) *value1,-(25/0.125) * value2,(GridSize/0.125) *(value5/2), 0, Math.PI * 2, true);
    ctx.stroke();
   }
   else
   {
   //for ellipse
   if (value9===0 && value6===0)
   {
      if(value5<value10)
      {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),(25/0.125)*(value5/2),0, 0, 2 * Math.PI);
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value5/2),(25/0.125)*(value10/2),0, 0, 2 * Math.PI);
       ctx.stroke();
     
      }
   }
   else if(value9===0)
   {
    if(value5>value10)
     {
      ctx.beginPath();
      ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),(25/0.125)*(value5/2),0, 0, 2 * Math.PI);
      ctx.stroke();
     }
     else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),(25/0.125)*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,0,(25/0.125)*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),0,-value6, 0, 2 * Math.PI);
       ctx.stroke();
     }
   }
   else if (value6===0)
   {
    if(value5<value10)
    {
      ctx.beginPath();
      ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value5/2),(25/0.125)*(value10/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),(25/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,0,(25/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
    }
   }
   else
   {
     if(value6===value9)
     {
      if(value10>value5)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),(25/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,0,(25/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       else
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value5/2),(25/0.125)*(value10/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,0,(25/0.125)*(value10/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value5/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       
     }
     else
     {
       if(value5>value10)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),(25/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,0,(25/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value5/2),(25/0.125)*(value10/2),value6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,0,(25/0.125)*(value10/2),value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(25/0.125)*value2,(GridSize/0.125)*(value5/2),0,value6, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
     }
   }
   }
   //for Class2 
   if (value7===value12 && value7===1)
   {
    load();
   }
   else if(value7===value12 && value7>"0")
   {
    ctx.beginPath();
    ctx.arc((GridSize/0.125) *value3,-(25/0.125) * value4,(GridSize/0.125) *(value7/2), 0, Math.PI * 2, true);
    ctx.strokeStyle= "red";
    ctx.stroke();
   }
   else
   {
    //for ellipse
   if (value8===0 && value11===0)
   {
      if(value7<value12)
      {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value12/2),(25/0.125)*(value7/2),0, 0, 2 * Math.PI);
        ctx.strokeStyle= "red";
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value7/2),(25/0.125)*(value12/2),0, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     
      }
   }
   else if(value11===0)
   {
    if(value7>value12)
     {
      ctx.beginPath();
      ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value12/2),(25/0.125)*(value7/2),0, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
     }
     else
     {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value12/2),(25/0.125)*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,0,(25/0.125)*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value12/2),0,-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     }
   }
   else if (value8===0)
   {
    if(value7<value12)
    {
      ctx.beginPath();
      ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value7/2),(25/0.125)*(value12/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value12/2),(25/0.125)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,0,(25/0.125)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
    }
   }
   else
   {
     if(value7>value12)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value12/2),(25/0.125)*(value7/2),-value11, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,0,(25/0.125)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value7/2),(25/0.125)*(value12/2),value8, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,0,(25/0.125)*(value12/2),value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(25/0.125)*value4,(GridSize/0.125)*(value7/2),0,value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke(); 
       }
   }
   }

  }
}
function generate()
{
  var x=document.getElementById("s1").value;
  flag=1;
  if(x!=="T2")
  {
    ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines,canvas.width,canvas.height);
    ctx.translate(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines);
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
  if((value1!=="" && value1.match(digit)) ||(value2!=="" && value2.match(digit)) ||(value3!=="" && value3.match(digit)) ||(value4!=="" && value4.match(digit)) ||(value5!=="" && value5.match(digit)) ||(value6!=="" && value6.match(digit)) ||(value7!=="" && value7.match(digit)) ||(value8!=="" && value8.match(digit)) ||(value9!=="" && value9.match(digit)) ||(value10!=="" && value10.match(digit)) ||(value11!=="" && value11.match(digit)) ||(value12!=="" && value12.match(digit)) )
  {
   //condition to check whether circle is to be drawn or ellipse.For that the values of major and minor axis is compared.If equal then it is circle otherwise it is ellipse
   //for class 1
   if(value5===value10 && value5>'0' && value5!==1)
   {
    ctx.beginPath();
    ctx.arc((GridSize/0.125) *value1,-(GridSize/0.125) * value2,(GridSize/0.125) *(value5/2), 0, Math.PI * 2, true);
    ctx.stroke();
   }
   else
   {
   //for ellipse
   if (value9===0 && value6===0)
   {
      if(value5<value10)
      {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),(GridSize/0.125)*(value5/2),0, 0, 2 * Math.PI);
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value5/2),(GridSize/0.125)*(value10/2),0, 0, 2 * Math.PI);
       ctx.stroke();
     
      }
   }
   else if(value9===0)
   {
    if(value5>value10)
     {
      ctx.beginPath();
      ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),(GridSize/0.125)*(value5/2),0, 0, 2 * Math.PI);
      ctx.stroke();
     }
     else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),(GridSize/0.125)*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,0,(GridSize/0.125)*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),0,-value6, 0, 2 * Math.PI);
       ctx.stroke();
     }
   }
   else if (value6===0)
   {
    if(value5<value10)
    {
      ctx.beginPath();
      ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value5/2),(GridSize/0.125)*(value10/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),(GridSize/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,0,(GridSize/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
    }
   }
   else
   {
     if(value6===value9)
     {
      if(value10>value5)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),(GridSize/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,0,(GridSize/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       else
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value5/2),(GridSize/0.125)*(value10/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,0,(GridSize/0.125)*(value10/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value5/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       
     }
     else
     {
       if(value5>value10)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),(GridSize/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,0,(GridSize/0.125)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value5/2),(GridSize/0.125)*(value10/2),value6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,0,(GridSize/0.125)*(value10/2),value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value1,-(GridSize/0.125)*value2,(GridSize/0.125)*(value5/2),0,value6, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
     }
   }
   }
   //for Class2 
   if(value7===value12 && value7>'0' && value7!==1)
   {
    ctx.beginPath();
    ctx.arc((GridSize/0.125) *value3,-(GridSize/0.125) * value4,(GridSize/0.125) *(value7/2), 0, Math.PI * 2, true);
    ctx.strokeStyle= "red";
    ctx.stroke();
   }
   else
   {
    //for ellipse
   if (value8===0 && value11===0)
   {
      if(value7<value12)
      {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value12/2),(GridSize/0.125)*(value7/2),0, 0, 2 * Math.PI);
        ctx.strokeStyle= "red";
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value7/2),(GridSize/0.125)*(value12/2),0, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     
      }
   }
   else if(value11===0)
   {
    if(value7>value12)
     {
      ctx.beginPath();
      ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value12/2),(GridSize/0.125)*(value7/2),0, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
     }
     else
     {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value12/2),(GridSize/0.125)*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,0,(GridSize/0.125)*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value12/2),0,-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     }
   }
   else if (value8===0)
   {
    if(value7<value12)
    {
      ctx.beginPath();
      ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value7/2),(GridSize/0.125)*(value12/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value12/2),(GridSize/0.125)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,0,(GridSize/0.125)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
    }
   }
   else
   {
     if(value7>value12)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value12/2),(GridSize/0.125)*(value7/2),-value11, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,0,(GridSize/0.125)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value7/2),(GridSize/0.125)*(value12/2),value8, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,0,(GridSize/0.125)*(value12/2),value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*value3,-(GridSize/0.125)*value4,(GridSize/0.125)*(value7/2),0,value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke(); 
       }
   }
   }

  }
}
else
{
  generateForT2Dataset();
}
}
function markAllPoints()
{
  var SliderValue=document.getElementById("myRange").value;
  var x=document.getElementById("s1").value;
  load();
  var XCoordinate=(Number(-((GridSize)* YAxisDistanceGridLines))+Number(SliderValue));
  if(x==="T2")
  {
    // Add behind elements.
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle= "#A9A9A9";
    ctx.fillRect(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines,SliderValue,canvas.height);
   ctx.fillStyle="#CD5C5C";
    ctx.fillRect(XCoordinate,-25*XAxisDistanceGridLines,canvas.width,canvas.height);
  }
  else
  {
    // Add behind elements.
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle= "#A9A9A9";
    ctx.fillRect(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines,SliderValue,canvas.height);
    ctx.fillStyle="#CD5C5C";
    ctx.fillRect(XCoordinate,-(GridSize)*XAxisDistanceGridLines,canvas.width,canvas.height);
  }
}
function clear()
{
  flag2=-1;
  flag3=-1;
  if(flag===0){
    load();
  }
  else if(flag===1){
    generate();
  }
}
function marker(event)
{
  flag3=0;
  markpoints(event);
}
function markpoints(event)
{
  if(flag!==-1 && flag2===0 && flag3===0)
  {
  var XCoordinate=event.clientX;
  var YCoordinate=event.clientY;
  var x=document.getElementById("s1").value;
  if(x==="T2")
  {
   XCoordinate=Number(XCoordinate)-500;
   YCoordinate=Number(YCoordinate)-373;
   ctx.fillRect(XCoordinate,YCoordinate,10,10);
  }
  else
  {
  XCoordinate=Number(XCoordinate)-510;
  YCoordinate=Number(YCoordinate)-750;
  ctx.fillRect(XCoordinate,YCoordinate,10,10); 
  }
  }
}

function mark(event)
{
 flag2=0;
 flag3=-1;
 ctx.fillStyle="black";
 markpoints(event);
}
function markp(event)
{
  flag2=0;
  flag3=-1;
  ctx.fillStyle="red";
  markpoints(event);
}
function resizeAxis() 
{
  var x=document.getElementById("s1").value;
  if(x==="T2")
  {
    ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines,(GridSize)* (Number(YAxisDistanceGridLines)-1),canvas.height); 
   ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,25,canvas.width,canvas.height);
  }
  else
  {
   ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-(GridSize)*XAxisDistanceGridLines,(GridSize)* (Number(YAxisDistanceGridLines)-1),canvas.height); 
   ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,(GridSize),canvas.width,canvas.height);
  }
          
}
function bayesian()
{
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
  if((value1!=="" && value1.match(digit)) ||(value2!=="" && value2.match(digit)) ||(value3!=="" && value3.match(digit)) ||(value4!=="" && value4.match(digit)) ||(value5!=="" && value5.match(digit)) ||(value6!=="" && value6.match(digit)) ||(value7!=="" && value7.match(digit)) ||(value8!=="" && value8.match(digit)) ||(value9!=="" && value9.match(digit)) ||(value10!=="" && value10.match(digit)) ||(value11!=="" && value11.match(digit)) ||(value12!=="" && value12.match(digit)) )
  {
    var area1=0;
    var area2=0;
    //for class1
    if(value5===value10 && value5>"0")
   {
    area1=Math.PI*value5*value5;
   }
   else
   {
     area1=Math.PI*value5*value10;
   }
   //for class 2
   if(value7===value12 && value12>"0")
   {
     area2=Math.PI*value7*value7;
   }
   else
   {
     area2=Math.PI*value7*value12;
   }
   var totalArea=Number(area1)+Number(area2);
   var answer="<strong>Bayesian Classification Results:-<br></strong>"+"For Class 1:-&nbsp"+(area1/totalArea)+"<br>"+"For Class 2:-&nbsp"+(area2/totalArea);
   document.getElementById("result").innerHTML=answer;
  }
}
document.getElementById("b1").addEventListener("click",load);
document.getElementById("b5").addEventListener("click",generate);
document.getElementById("b3").addEventListener("click",markAllPoints);
document.getElementById("b4").addEventListener("click",clear);
document.getElementById("b2").addEventListener("click",mark);
document.getElementById("b2a").addEventListener("click",markp);
document.getElementById("b6").addEventListener("click",resizeAxis);
document.getElementById("b7").addEventListener("click",bayesian);

