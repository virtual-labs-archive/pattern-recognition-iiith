/***********************************************
* JavaScriptKit.com Multiple Choice Quiz Script (http://www.javascriptkit.com)
* Copyright 2003 JavaScript Kit- http://www.javascriptkit.com
* This notice and footnote must stay intact for use
* Visit JavaScript Kit (http://www.javascriptkit.com/) for full source code
***********************************************/

//Enter total number of questions:
var totalquestions=5
var incorrect={};
var actualchoices={};
//Enter the solutions corresponding to each question:
var correctchoices=new Array()
correctchoices[1]='a' //question 1 solution
correctchoices[2]='a' //question 2 solution, and so on.
correctchoices[3]='a'
correctchoices[4]='c'
correctchoices[5]='e'


/////Don't edit beyond here//////////////////////////
function checkChoice(incorrect,q,actualchoices)
{
	if (actualchoices[q]!==correctchoices[q])
	{ //process an incorrect choice
		if (incorrect==null)
		{
	 		incorrect=q;
		}
		else
		{
			incorrect+="/"+q;
		}
	}
	return incorrect;
}
function questionCheck(incorrect)
{
	var q,c;
	for (q=1;q<=totalquestions;q++){
	var thequestion=document.myquiz.question[q];
	for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked===true){
			actualchoices[q]=thequestion[c].value
		}
	}
	incorrect=checkChoice(incorrect,q,actualchoices);
	return incorrect;
};
function checkCookie(incorrect)
{
	document.cookie="q="+incorrect;
	if (document.cookie==="")
	{
		alert("Your browser does not accept cookies. Please adjust your browser settings.")
	}
	else{
		window.location="results.htm"
	}
}
function gradeit(){
	incorrect=null
	incorrect=questionCheck(incorrect);
	if (incorrect==null)
		incorrect="a/b"
	checkCookie();
};
function checkWrong(wrong)
{
	if (wrong===1){
			win2.document.write("Question "+i+"="+correctchoices[i].fontcolor("red")+"<br>");
			wrong=0;
		}
		else
			win2.document.write("Question "+i+"="+correctchoices[i]+"<br>");	
}
function checkSolution(win2,temp)
{
	
	var wrong,i;
	for (i=1;i<=totalquestions;i++){
		for (temp=0;temp<incorrect.length;temp++){
			if (i===incorrect[temp]){
				wrong=1;
			}
		}
		wrong=checkWrong(wrong);
	}
};
function showsolution(){
var win2=window.open("","win2","width=200,height=350, scrollbars")
var temp=0;
win2.focus()
win2.document.open()
win2.document.write("<title>Solution</title>")
win2.document.write("<body bgcolor="#FFFFFF">")
win2.document.write("<center><h3>Solution to Quiz</h3></center>")
win2.document.write('<center><font face="Arial">')
checkSolution(win2,temp);
win2.document.write("</center></font>")
win2.document.write("<h5>Note: The solutions in red are the ones to the questions you had incorrectly answered.</h5>")
win2.document.close()
}
