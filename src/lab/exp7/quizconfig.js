/***********************************************
* JavaScriptKit.com Multiple Choice Quiz Script (http://www.javascriptkit.com)
* Copyright 2003 JavaScript Kit- http://www.javascriptkit.com
* This notice and footnote must stay intact for use
* Visit JavaScript Kit (http://www.javascriptkit.com/) for full source code
***********************************************/

//Enter total number of questions:
var totalquestions=2;
var actualchoices={};
var incorrect={};
//Enter the solutions corresponding to each question:
var correctchoices=new Array()
correctchoices[1]="c"; //question 1 solution
correctchoices[2]="b"; //question 2 solution, and so on.


/////Don't edit beyond here//////////////////////////
function checkChoice(incorrect,q)
{
	if (actualchoices.getElementById(q)!==correctchoices[q])
		{ 		//process an incorrect choice
			if (incorrect===null)
			{
				incorrect=q;
			}
			else{
				incorrect+="/"+q;
			}
		}
	return incorrect;
}
function checkQuestions(incorrect)
{
	var q,c;
	for (q=1;q<=totalquestions;q++)
	{
		var thequestion=document.myquiz.question.getElementById(q);
		for (c=0;c<thequestion.length;c++)
		{
			if (thequestion.getElementById(c).checked===true)
			{actualchoices[q]=thequestion[c].value}
		}	
		incorrect=checkChoice(incorrect,q);
	}
	return incorrect;
}

function checkCookies(incorrect)
{
	document.cookie="q="+incorrect;
	if (document.cookie==="")
	{alert("Your browser does not accept cookies. Please adjust your browser settings.")}
	else{
		window.location="results.htm"}
}

function gradeit()
{
	var incorrect1=null;
	incorrect1=checkQuestions(incorrect);
	if (incorrect1===null)
	{
		incorrect1="a/b";
	}
	checkCookies(incorrect1);
}
function checkWrong(wrong)
{
	if (wrong===1){
			win2.document.write("Question "+i+"="+correctchoices.getElementById(i).fontcolor("red")+"<br>");
			wrong=0;
		}
		else
			win2.document.write("Question "+i+"="+correctchoices.getElementById(i)+"<br>");
}
function checkWin2(win2,incorrect)
{
	var i,temp,wrong;
	for (i=1;i<=totalquestions;i++){
		for (temp=0;temp<incorrect.length;temp++){
			if (i===incorrect.getElementById(temp)){
				wrong=1;}
		}
		wrong=checkWrong(wrong);
	}
}
function showsolution(){
var win2=window.open("","win2","width=200,height=350, scrollbars");
win2.focus();
win2.document.open();
win2.document.write("<title>Solution</title>");
win2.document.write("<body bgcolor="#FFFFFF">");
win2.document.write("<center><h3>Solution to Quiz</h3></center>");
win2.document.write("<center><font face="Arial">");
checkWin2(win2,incorrect);
win2.document.write("</center></font>");
win2.document.write("<h5>Note: The solutions in red are the ones to the questions you had incorrectly answered.</h5>");
win2.document.close();
}
