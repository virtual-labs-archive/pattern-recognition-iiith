var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");
var PreviousX="NIL";
var flag=-1;
//flag is the variable which tells which function among load and generate was atlast called. 
var flag2=-1;
var flag3=-1;
var meanClass1X=0;
var meanClass1Y=0;
var pointsClass1=0;
var covarianceClass1=0;
var meanClass2X=0;
var meanClass2Y=0;
var pointsClass2=0;
var covarianceClass2=0;
function load() 
{
  //x is the value selected by user from the list
var x=document.getElementById("s1").value;
var GridSize=50;
var XAxisDistanceGridLines = 10;
var YAxisDistanceGridLines = 2;
   if(x==="T1")
      { 
        GridSize=55;  
        if(flag===-1)
        {
         ctx.clearRect(-(50)* YAxisDistanceGridLines,-50*XAxisDistanceGridLines,canvas.width,canvas.height);
         ctx.translate(-(50)* YAxisDistanceGridLines,-50*XAxisDistanceGridLines);          
        }
        else if(PreviousX==="T2")
        {
          ctx.clearRect(-(50)* 10,-25*14,canvas.width,canvas.height);
          ctx.translate(-(50)* 10,-25*14);          
        }
        else if(PreviousX==="T1")
        {
          ctx.clearRect(-(GridSize)*5,-(GridSize)*6,canvas.width,canvas.height);     
          ctx.translate(-(GridSize)*5,-(GridSize)*6);
        }
        else if(PreviousX==="T3")
        {
          ctx.clearRect(-(30)* 10,-(30)*10,canvas.width,canvas.height);     
          ctx.translate(-(30)* 10,-(30)*10);
        }
        else
        {
          ctx.clearRect(-(40)* 7,-(40)*10,canvas.width,canvas.height);     
          ctx.translate(-(40)* 7,-(40)*10);
        }
      scriptForT1Dataset(0.125,0.125);
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
      GridSize=50;  
      if(flag===-1)
        {
         ctx.clearRect(-(50)* YAxisDistanceGridLines,-50*XAxisDistanceGridLines,canvas.width,canvas.height);
         ctx.translate(-(50)* YAxisDistanceGridLines,-50*XAxisDistanceGridLines);          
        }
        else if(PreviousX==="T2")
        {
          ctx.clearRect(-(50)* 10,-25*14,canvas.width,canvas.height);
          ctx.translate(-(50)* 10,-25*14);          
        }
        else if(PreviousX==="T1")
        {
          ctx.clearRect(-(55)*5,-(55)*6,canvas.width,canvas.height);     
          ctx.translate(-(55)*5,-(55)*6);
        }
        else if(PreviousX==="T3")
        {
          ctx.clearRect(-(30)* 10,-(30)*10,canvas.width,canvas.height);     
          ctx.translate(-(30)* 10,-(30)*10);
        }
        else
        {
          ctx.clearRect(-(40)* 7,-(40)*10,canvas.width,canvas.height);     
          ctx.translate(-(40)* 7,-(40)*10);
        }
      scriptForT2Dataset(0.125,0.125);
      document.getElementById("t1").value=0;
      document.getElementById("t2").value=0;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=1.5;
      document.getElementById("t6").value=0.5;
      document.getElementById("t7").value=1.5;
      document.getElementById("t8").value=-0.5;
      document.getElementById("t9").value=0.5;
      document.getElementById("t10").value=1.5;
      document.getElementById("t11").value=-0.5;
      document.getElementById("t12").value=1.5;
      ctx.beginPath();
      ctx.ellipse(0,0,(GridSize/0.125)*(1.5/2),(25/0.125)*(1.5/2),0.5, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
      ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*0,-(GridSize/0.125)*0,0,(25/0.125)*(1.5/2),0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*0,-(GridSize/0.125)*0,(GridSize/0.125)*(1.5/2),0,0.5, 0, 2 * Math.PI);
       ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(0,0,(GridSize/0.125)*(1.5/2),(25/0.125)*(1.5/2),-0.5, 0, 2 * Math.PI);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*0,-(GridSize/0.125)*0,0,(25/0.125)*(1.5/2),-0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*0,-(GridSize/0.125)*0,(GridSize/0.125)*(1.5/2),0,-0.5, 0, 2 * Math.PI);
       ctx.stroke();
      PreviousX=x;
    }  
    else if (x==="T3")
    {
      GridSize=30;  
        if(flag===-1)
        {
         ctx.clearRect(-(50)* YAxisDistanceGridLines,-50*XAxisDistanceGridLines,canvas.width,canvas.height);
         ctx.translate(-(50)* YAxisDistanceGridLines,-50*XAxisDistanceGridLines);          
        }
        else if(PreviousX==="T2")
        {
          ctx.clearRect(-(50)* 10,-25*14,canvas.width,canvas.height);
          ctx.translate(-(50)* 10,-25*14);          
        }
        else if(PreviousX==="T1")
        {
          ctx.clearRect(-(55)*5,-(55)*6,canvas.width,canvas.height);     
          ctx.translate(-(55)*5,-(55)*6);
        }
        else if(PreviousX==="T3")
        {
          ctx.clearRect(-(30)* 10,-(30)*10,canvas.width,canvas.height);     
          ctx.translate(-(30)* 10,-(30)*10);
        }
        else
        {
          ctx.clearRect(-(40)* 7,-(40)*10,canvas.width,canvas.height);     
          ctx.translate(-(40)* 7,-(40)*10);
        }
      scriptForT3Dataset(0.125,0.125);
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
     GridSize=40;  
        if(flag===-1)
        {
         ctx.clearRect(-(50)* YAxisDistanceGridLines,-50*XAxisDistanceGridLines,canvas.width,canvas.height);
         ctx.translate(-(50)* YAxisDistanceGridLines,-50*XAxisDistanceGridLines);          
        }
        else if(PreviousX==="T2")
        {
          ctx.clearRect(-(50)* 10,-25*14,canvas.width,canvas.height);
          ctx.translate(-(50)* 10,-25*14);          
        }
        else if(PreviousX==="T1")
        {
          ctx.clearRect(-(55)*5,-(55)*6,canvas.width,canvas.height);     
          ctx.translate(-(55)*5,-(55)*6);
        }
        else if(PreviousX==="T3")
        {
          ctx.clearRect(-(30)* 10,-(30)*10,canvas.width,canvas.height);     
          ctx.translate(-(30)* 10,-(30)*10);
        }
        else
        {
          ctx.clearRect(-(40)* 7,-(40)*10,canvas.width,canvas.height);     
          ctx.translate(-(40)* 7,-(40)*10);
        }
      scriptForT4Dataset(0.125,0.125);
      document.getElementById("t1").value=1.25;
      document.getElementById("t2").value=0.625;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=1.5;
      document.getElementById("t6").value=0.5;
      document.getElementById("t7").value=1;
      document.getElementById("t8").value=0;
      document.getElementById("t9").value=0.5;
      document.getElementById("t10").value=1;
      document.getElementById("t11").value=0;
      document.getElementById("t12").value=1;
      ctx.beginPath();
      ctx.ellipse((GridSize/0.125)*1.25,-(GridSize/0.125)*0.625,(GridSize/0.125)*(1.5/2),(GridSize/0.125)*(1/2),-0.5, 0, 2 * Math.PI);
      ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*1.25,-(GridSize/0.125)*0.625,0,(GridSize/0.125)*(1/2),-0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/0.125)*1.25,-(GridSize/0.125)*0.625,(GridSize/0.125)*(1.5/2),0,-0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
      ctx.arc((GridSize/0.125) *0,-(GridSize/0.125) * 0, (GridSize/0.125) *(1/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      PreviousX=x;
    }  
    flag=0;
}
function generateForT2Dataset()
{
  var XAxisDistanceGridLines =14;
  var YAxisDistanceGridLines = 10;
  var XAxisStartingPoint =0.125;
  var YAxisStartingPoint =0.125;
  var GridSize=50;  
  if(flag===-1)
  {
   ctx.clearRect(-(GridSize)*2,-(GridSize)*10,canvas.width,canvas.height);     
   ctx.translate(-(GridSize)*2,-(GridSize)*10);
  }
  else
  {
  ctx.clearRect(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines,canvas.width,canvas.height);
  ctx.translate(-(GridSize)* YAxisDistanceGridLines,-25*XAxisDistanceGridLines);
  }
  if(value1>0.625 || value2>1 || value3>0.625 || value4>1 ||value5>0.625 || value7>0.625 || value10>0.625 || value12>0.625)
   {
    XAxisStartingPoint=0.5;
    YAxisStartingPoint=0.5;
   }
  scriptForT2Dataset(XAxisStartingPoint,YAxisStartingPoint);
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
    ctx.arc((GridSize/XAxisStartingPoint) *value1,-(25/XAxisStartingPoint) * value2,(GridSize/XAxisStartingPoint) *(value5/2), 0, Math.PI * 2, true);
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
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(25/XAxisStartingPoint)*(value5/2),0, 0, 2 * Math.PI);
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),(25/XAxisStartingPoint)*(value10/2),0, 0, 2 * Math.PI);
       ctx.stroke();
     
      }
   }
   else if(value9===0)
   {
    if(value5>value10)
     {
      ctx.beginPath();
      ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(25/XAxisStartingPoint)*(value5/2),0, 0, 2 * Math.PI);
      ctx.stroke();
     }
     else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(25/XAxisStartingPoint)*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,0,(25/XAxisStartingPoint)*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),0,-value6, 0, 2 * Math.PI);
       ctx.stroke();
     }
   }
   else if (value6===0)
   {
    if(value5<value10)
    {
      ctx.beginPath();
      ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),(25/XAxisStartingPoint)*(value10/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(25/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,0,(25/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),0,-value9, 0, 2 * Math.PI);
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
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(25/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,0,(25/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       else
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),(25/XAxisStartingPoint)*(value10/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,0,(25/XAxisStartingPoint)*(value10/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       
     }
     else
     {
       if(value5>value10)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(25/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,0,(25/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),(25/XAxisStartingPoint)*(value10/2),value6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,0,(25/XAxisStartingPoint)*(value10/2),value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(25/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),0,value6, 0, 2 * Math.PI);
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
    ctx.arc((GridSize/XAxisStartingPoint) *value3,-(25/XAxisStartingPoint) * value4,(GridSize/XAxisStartingPoint) *(value7/2), 0, Math.PI * 2, true);
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
        ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(25/XAxisStartingPoint)*(value7/2),0, 0, 2 * Math.PI);
        ctx.strokeStyle= "red";
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value7/2),(25/XAxisStartingPoint)*(value12/2),0, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     
      }
   }
   else if(value11===0)
   {
    if(value7>value12)
     {
      ctx.beginPath();
      ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(25/XAxisStartingPoint)*(value7/2),0, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
     }
     else
     {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(25/XAxisStartingPoint)*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,0,(25/XAxisStartingPoint)*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),0,-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     }
   }
   else if (value8===0)
   {
    if(value7<value12)
    {
      ctx.beginPath();
      ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value7/2),(25/XAxisStartingPoint)*(value12/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(25/XAxisStartingPoint)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,0,(25/XAxisStartingPoint)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
    }
   }
   else
   {
     if(value7>value12)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(25/XAxisStartingPoint)*(value7/2),-value11, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,0,(25/XAxisStartingPoint)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value7/2),(25/XAxisStartingPoint)*(value12/2),value8, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,0,(25/XAxisStartingPoint)*(value12/2),value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(25/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value7/2),0,value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke(); 
       }
   }
   }

  }
}
function generate()
{
  var GridSize=50;
  var x=document.getElementById("s1").value;
  var XAxisStartingPoint =0.125;
  var YAxisStartingPoint =0.125;
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
  if(x==="T1")
  {
    GridSize=55;
    if(flag===-1)
   {
    ctx.clearRect(-(50)*2,-(50)*10,canvas.width,canvas.height);     
    ctx.translate(-(50)*2,-(50)*10);
   }
   else
   {
    ctx.clearRect(-(GridSize)*5,-(GridSize)*6,canvas.width,canvas.height);     
    ctx.translate(-(GridSize)*5,-(GridSize)*6);
   }
   if(value1>1 || value2>1 || value3>1 || value4>1 ||value5>1 || value7>1 || value10>1 || value12>1)
   {
    XAxisStartingPoint=1;
    YAxisStartingPoint=2;
   }
    scriptForT1Dataset(XAxisStartingPoint,YAxisStartingPoint);
  }
  else if(x==="T3")
  {
    GridSize=30;
    if(flag===-1)
    {
    ctx.clearRect(-(50)*2,-(50)*10,canvas.width,canvas.height);     
    ctx.translate(-(50)*2,-(50)*10);
    }
  else
    {
    ctx.clearRect(-(30)* 10,-(30)*10,canvas.width,canvas.height);     
    ctx.translate(-(30)* 10,-(30)*10);
    }
    if(value1>2 || value2>1.35 || value3>2 || value4>1.35 ||value5>2 || value7>2 || value10>2 || value12>2)
   {
    XAxisStartingPoint=0.5;
    YAxisStartingPoint=0.5;
   }
    scriptForT3Dataset(XAxisStartingPoint,YAxisStartingPoint);
  }
  else if(x==="T4")
  {
    GridSize=40;
    if(flag===-1)
    {
    ctx.clearRect(-(50)*2,-(50)*10,canvas.width,canvas.height);     
    ctx.translate(-(50)*2,-(50)*10);
    }
    else
    {
    ctx.clearRect(-(40)* 7,-(40)*10,canvas.width,canvas.height);     
    ctx.translate(-(40)* 7,-(40)*10);
    }
    if(value1>1.75 || value2>0.75 || value3>1.5 || value4>0.75 ||value5>2 || value7>2 || value10>2 || value12>2)
   {
    XAxisStartingPoint=0.5;
    YAxisStartingPoint=0.5;
   }
    scriptForT4Dataset(XAxisStartingPoint,YAxisStartingPoint);
  }
  flag=1;
  if(x!=="T2")
  {
  
  var digit= /^\d+$/;

  if((value1!=="" && value1.match(digit)) ||(value2!=="" && value2.match(digit)) ||(value3!=="" && value3.match(digit)) ||(value4!=="" && value4.match(digit)) ||(value5!=="" && value5.match(digit)) ||(value6!=="" && value6.match(digit)) ||(value7!=="" && value7.match(digit)) ||(value8!=="" && value8.match(digit)) ||(value9!=="" && value9.match(digit)) ||(value10!=="" && value10.match(digit)) ||(value11!=="" && value11.match(digit)) ||(value12!=="" && value12.match(digit)) )
  {
   //condition to check whether circle is to be drawn or ellipse.For that the values of major and minor axis is compared.If equal then it is circle otherwise it is ellipse
   //for class 1
   if(value5===value10 && value5>'0' && value5!==1)
   {
    ctx.beginPath();
    ctx.arc((GridSize/XAxisStartingPoint) *value1,-(GridSize/XAxisStartingPoint) * value2,(GridSize/XAxisStartingPoint) *(value5/2), 0, Math.PI * 2, true);
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
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(GridSize/XAxisStartingPoint)*(value5/2),0, 0, 2 * Math.PI);
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),(GridSize/XAxisStartingPoint)*(value10/2),0, 0, 2 * Math.PI);
       ctx.stroke();
     
      }
   }
   else if(value9===0)
   {
    if(value5>value10)
     {
      ctx.beginPath();
      ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(GridSize/XAxisStartingPoint)*(value5/2),0, 0, 2 * Math.PI);
      ctx.stroke();
     }
     else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(GridSize/XAxisStartingPoint)*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,0,(GridSize/XAxisStartingPoint)*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),0,-value6, 0, 2 * Math.PI);
       ctx.stroke();
     }
   }
   else if (value6===0)
   {
    if(value5<value10)
    {
      ctx.beginPath();
      ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),(GridSize/XAxisStartingPoint)*(value10/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(GridSize/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,0,(GridSize/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),0,-value9, 0, 2 * Math.PI);
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
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(GridSize/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,0,(GridSize/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       else
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),(GridSize/XAxisStartingPoint)*(value10/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,0,(GridSize/XAxisStartingPoint)*(value10/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       
     }
     else
     {
       if(value5>value10)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),(GridSize/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,0,(GridSize/XAxisStartingPoint)*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),(GridSize/XAxisStartingPoint)*(value10/2),value6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,0,(GridSize/XAxisStartingPoint)*(value10/2),value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value1,-(GridSize/XAxisStartingPoint)*value2,(GridSize/XAxisStartingPoint)*(value5/2),0,value6, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
     }
   }
   }
   //for Class2 
   if(value7===value12 && value7>'0' && value7!==1)
   {
    ctx.beginPath();
    ctx.arc((GridSize/XAxisStartingPoint) *value3,-(GridSize/XAxisStartingPoint) * value4,(GridSize/XAxisStartingPoint) *(value7/2), 0, Math.PI * 2, true);
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
        ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(GridSize/XAxisStartingPoint)*(value7/2),0, 0, 2 * Math.PI);
        ctx.strokeStyle= "red";
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value7/2),(GridSize/XAxisStartingPoint)*(value12/2),0, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     
      }
   }
   else if(value11===0)
   {
    if(value7>value12)
     {
      ctx.beginPath();
      ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(GridSize/XAxisStartingPoint)*(value7/2),0, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
     }
     else
     {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(GridSize/XAxisStartingPoint)*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,0,(GridSize/XAxisStartingPoint)*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),0,-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     }
   }
   else if (value8===0)
   {
    if(value7<value12)
    {
      ctx.beginPath();
      ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value7/2),(GridSize/XAxisStartingPoint)*(value12/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(GridSize/XAxisStartingPoint)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,0,(GridSize/XAxisStartingPoint)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
    }
   }
   else
   {
     if(value7>value12)
       {
        ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),(GridSize/XAxisStartingPoint)*(value7/2),-value11, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,0,(GridSize/XAxisStartingPoint)*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value7/2),(GridSize/XAxisStartingPoint)*(value12/2),value8, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,0,(GridSize/XAxisStartingPoint)*(value12/2),value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke();
       ctx.beginPath();
       ctx.ellipse((GridSize/XAxisStartingPoint)*value3,-(GridSize/XAxisStartingPoint)*value4,(GridSize/XAxisStartingPoint)*(value7/2),0,value8, 0, 2 * Math.PI);
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
  var GridSize=50;
  var XAxisDistanceGridLines =14;
  var YAxisDistanceGridLines = 10;
  load();
  if(x==="T1")
  {
    GridSize=55;
    XAxisDistanceGridLines=6;
    YAxisDistanceGridLines=5;
  }
  else if(x==="T3")
  {
    GridSize=30;
    XAxisDistanceGridLines=10;
    YAxisDistanceGridLines=10;
  }
  else if(x==="T4")
  {
    GridSize=40;
    XAxisDistanceGridLines=10;
    YAxisDistanceGridLines=7;
  }
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
  meanClass1X=0;
  meanClass1Y=0;
  pointsClass1=0;
  covarianceClass1=0;
  meanClass2X=0;
  meanClass2Y=0;
  pointsClass2=0;
  covarianceClass2=0; 
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
  if(x==="T1")
  {
   XCoordinate=Number(XCoordinate)-300;
   YCoordinate=Number(YCoordinate)-400;
   ctx.fillRect(XCoordinate,YCoordinate,10,10);
   XCoordinate=(XCoordinate*0.125)/55;
   YCoordinate=(YCoordinate*0.125)/55;
  }
  else if(x==="T2")
  {
   XCoordinate=Number(XCoordinate)-530;
   YCoordinate=Number(YCoordinate)-415;
   ctx.fillRect(XCoordinate,YCoordinate,10,10); 
   XCoordinate=(XCoordinate*0.125)/50;
   YCoordinate=(YCoordinate*0.125)/50;
  }
  else if(x==="T3")
  {
   XCoordinate=Number(XCoordinate)-330;
   YCoordinate=Number(YCoordinate)-370;
   ctx.fillRect(XCoordinate,YCoordinate,10,10); 
   XCoordinate=(XCoordinate*0.125)/30;
   YCoordinate=(YCoordinate*0.125)/30;
  }
  else
  {
  XCoordinate=Number(XCoordinate)-300;
  YCoordinate=Number(YCoordinate)-470;
  ctx.fillRect(XCoordinate,YCoordinate,10,10); 
  XCoordinate=(XCoordinate*0.125)/40;
  YCoordinate=(YCoordinate*0.125)/40;
  }
  YCoordinate=YCoordinate*(-1);
  if(ctx.fillStyle==="#000000")
  {
   pointsClass1++;
   meanClass1X=(meanClass1X+Number(XCoordinate))/pointsClass1;
   meanClass1Y=(meanClass1Y+Number(YCoordinate))/pointsClass1;
   covarianceClass1=(covarianceClass1+Number((XCoordinate-Number(meanClass1X))*(YCoordinate-Number(meanClass1Y))))/pointsClass1;
  }
  else
  {
   pointsClass2++;
   meanClass2X=(meanClass2X+Number(XCoordinate))/pointsClass2;
   meanClass2Y=(meanClass2Y+Number(YCoordinate))/pointsClass2;
   covarianceClass2=(covarianceClass2+Number((XCoordinate-Number(meanClass2X))*(YCoordinate-Number(meanClass2Y))))/pointsClass2;
  }
  // meanClass1X=meanClass1X.toFixed(2);
  // meanClass1Y=meanClass1Y.toFixed(2);
  // meanClass2X=meanClass2X.toFixed(2);
  // meanClass2Y=meanClass2Y.toFixed(2);
  // covarianceClass1=covarianceClass1.toFixed(2);
  // covarianceClass2=covarianceClass2.toFixed(2);
   // var answer="<table><tr><td colspan=3>Class1</td><td colspan=2>Class2</td></tr><tr><td>Mean</td><td>"+meanClass1X+"</td><td>"+meanClass1Y+"</td><td>"+meanClass2X+"</td><td>"+meanClass2Y+"</td></tr><tr><td>Covariance</td><td colspan=2>"+covarianceClass1+"</td><td colspan=2>"+covarianceClass2+"</td></table>";
   var answer="<strong>Mean and Covariance Results:-<br></strong>"+"<strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspClass 1&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspClass2<br>Mean&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</strong>("+meanClass1X.toFixed(3)+","+meanClass1Y.toFixed(3)+")"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp("+meanClass2X.toFixed(3)+","+meanClass2Y.toFixed(3)+")"+"<br>"+"<strong>Covariance&nbsp&nbsp&nbsp</strong>"+covarianceClass1.toFixed(3)+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+covarianceClass2.toFixed(3);
   document.getElementById("meanresult").innerHTML=answer;
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
  var GridSize=50;
  var XAxisDistanceGridLines =14;
  var YAxisDistanceGridLines = 10;
  if (flag===0)
  {
  if(x==="T1")
  {
    GridSize=55;
    XAxisDistanceGridLines=6;
    YAxisDistanceGridLines=5;
  }
  else if(x==="T3")
  {
    GridSize=30;
    XAxisDistanceGridLines=10;
    YAxisDistanceGridLines=10;
  }
  else if(x==="T4")
  {
    GridSize=40;
    XAxisDistanceGridLines=10;
    YAxisDistanceGridLines=7;
  }
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
   var answer="<strong>Bayesian Classification Results:-<br></strong>"+"For Class 1=&nbsp"+(area1/totalArea)+"<br>"+"For Class 2=&nbsp"+(area2/totalArea);
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

