var UserAnswers = [];
var RandomNumbers = [];
var ArrayEmpty = 1;
var CorrectCount = 0;

/***************************************Variables that can be changed from here****************************************************** */
var TotalContainer = -1;
var title = "";
/***************************************Variables that can be changed upto here****************************************************** */

var jsonData = [];

function Constructer(question, an, des) {
    this.q = question;
    this.option = [];
    this.answer = an;
    this.description = des;
}
function load() {
    initialize_array();
}
function initialize_array() {
    $.ajax(
        {
            url: "quiz-data.json",
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function (data) {
                $(data.artciles).each(function (a, b) {
                    if (a != 0) {
                        var obj = new Constructer(b.q, b.answer, b.description);
                        for (var i = 0; i < b.option.length; i++) {
                            obj.option.push(b.option[i]);
                        }
                        console.log(b);
                        jsonData.push(obj);
                    }
                    else {
                        title = b.quiztitle;
                        TotalContainer = parseInt(b.containers);
                    }
                });
            },
            error: function (jqXHR, status, err) {
                console.log("Local error callback.");
            },
            complete: function (jqXHR, status) {
                console.log("Local completion callback.");
            }

        }
    );

}


function generateQuestionContainer(QID, AID, OID, status, k) {
    var containerDiv = document.getElementById("quizBody");
    var parentDiv = document.createElement("div");
    var QuestionDiv = document.createElement("div");

    var hr = document.createElement("HR");
    QuestionDiv.id = QID;       //Q1
    parentDiv.style = "padding:2em 2em 2em 2em";
    parentDiv.className = "question";
    parentDiv.appendChild(QuestionDiv);
    parentDiv.appendChild(hr);
    console.log("QID" + " " + QID + " Options->>" + k);
    for (var i = 0; i < jsonData[k].option.length; i++) {
        var OptionDiv = document.createElement("LABEL");
        OptionDiv.classList.add("answer");
        OptionDiv.classList.add("labelContainer");

        var input = document.createElement("INPUT");
        input.setAttribute("type", "radio");
        input.id = AID.concat((i + 1).toString());    //A11
        input.name = QID;     //Q1

        var spanI = document.createElement("SPAN");
        spanI.className = "labelcheckmark";

        var span = document.createElement("SPAN");
        span.id = OID.concat((i + 1).toString());     //O11

        OptionDiv.appendChild(input);
        OptionDiv.appendChild(spanI);
        OptionDiv.appendChild(span);
        parentDiv.appendChild(OptionDiv);
        if (i !== 0) {
            var br = document.createElement("BR");
            parentDiv.insertBefore(br, OptionDiv);
        }
    }

    containerDiv.appendChild(parentDiv);
    if (status != 0 && status != TotalContainer) {
        var br = document.createElement("BR");
        containerDiv.insertBefore(br, parentDiv);
    }

}
function generateResultContainer(RID, SId, CId, ROID, DesID, SyId, status, k) {
    var containerDiv = document.getElementById("displayResult");
    var tempDiv = document.createElement("div");
    var parentDiv = document.createElement("div");
    var divS = document.createElement("div");
    divS.id = SId;     //S1

    var QuestionDiv = document.createElement("div");
    var hr = document.createElement("HR");
    QuestionDiv.id = RID;       //R1
    parentDiv.style = "padding:2em 2em 2em 2em";
    parentDiv.className = "question";
    tempDiv.appendChild(divS);
    tempDiv.appendChild(QuestionDiv);
    tempDiv.appendChild(hr);
    parentDiv.appendChild(tempDiv);

    for (var i = 0; i < jsonData[k].option.length + 1; i++) {
        var AnswerDiv = document.createElement("LABEL");
        AnswerDiv.classList.add("answer");
        AnswerDiv.classList.add("labelContainer");
        if (i !== jsonData[k].option.length) {
            var input = document.createElement("INPUT");
            input.setAttribute("type", "radio");
            input.disabled = true;
            input.id = CId.concat((i + 1).toString());  //C11

            var spanI = document.createElement("SPAN");
            spanI.className = "labelcheckmark";
            AnswerDiv.appendChild(input);
            AnswerDiv.appendChild(spanI);

            var spanS = document.createElement("I");
            spanS.id = SyId.concat((i + 1).toString());     //SY11

            var spanR = document.createElement("SPAN");
            spanR.id = ROID.concat((i + 1).toString());     //RO11
            spanR.className = "paddingClass";

            AnswerDiv.appendChild(spanR);
            AnswerDiv.appendChild(spanS);
        }

        if (i == jsonData[k].option.length) {
            AnswerDiv = document.createElement("div");
            AnswerDiv.className = "descript";

            var x = document.createElement("H4");
            var t = document.createTextNode("Explanation :- ");
            x.appendChild(t);
            var hr = document.createElement("HR");
            AnswerDiv.appendChild(x);
            AnswerDiv.appendChild(hr);

            var spanR = document.createElement("div");
            spanR.id = DesID;     //D1
            AnswerDiv.appendChild(spanR);

        }

        parentDiv.appendChild(AnswerDiv);
    }

    containerDiv.appendChild(parentDiv);
    if (status != 0 && status != TotalContainer) {
        var br = document.createElement("BR");
        containerDiv.insertBefore(br, parentDiv);
    }
}
function putContainers(k, i) {
    console.log("In put containers");
    var QId = "Q".concat((i + 1).toString());
    var AId = "A".concat((i + 1).toString());
    var RId = "R".concat((i + 1).toString());
    var SId = "S".concat((i + 1).toString());
    var CId = "C".concat((i + 1).toString());
    var OId = "O".concat((i + 1).toString());
    var ROID = "RO".concat((i + 1).toString());
    var DesID = "D".concat((i + 1).toString());
    var SyId = "SY".concat((i + 1).toString());
    generateQuestionContainer(QId, AId, OId, i, k);
    generateResultContainer(RId, SId, CId, ROID, DesID, SyId, i, k);

}
/*******************************************************************************************************/
function putResult() {
    var ROID = "RO";
    var RID = "R";
    var QID = "O";
    var SID = "S";
    var CID = "C";
    var DesId = "D";
    var SyId = "SY";

    for (var i = 0; i < TotalContainer; i++) {
        var SymbID = SyId.concat((i + 1).toString());    //SY1
        var SymbolID = SID.concat((i + 1).toString());    //S1
        var TempQID = QID.concat((i + 1).toString());    //O1
        var TempRID = RID.concat((i + 1).toString());   //R1
        var TempROID = ROID.concat((i + 1).toString());   //RO1
        var descriptionID = DesId.concat((i + 1).toString());    //D1
        var TempCID = CID.concat((i + 1).toString());   //C1


        //here putting questions,options and thier description in place
        for (var t = 0; t < jsonData[RandomNumbers[i]].option.length; t++) {
            var AnsID1 = TempROID.concat((t + 1).toString());   //RO11
            document.getElementById(AnsID1).innerHTML = document.getElementById(TempQID.concat((t + 1).toString())).innerHTML;
        }
        document.getElementById(TempRID).innerHTML = "Q".concat((i + 1).toString()) + ") " + jsonData[RandomNumbers[i]].q;
        document.getElementById(descriptionID).innerHTML = jsonData[RandomNumbers[i]].description;
        document.getElementById(descriptionID).style.textDecoration = "none";
        document.getElementById(descriptionID).style.color = "grey";

        var t2 = jsonData[RandomNumbers[i]].answer;
        var t1;


        //here finding the useranswer
        for (var t = 0; t < jsonData[RandomNumbers[i]].option.length; t++) {
            if (UserAnswers[i] === t + 1) {
                t1 = document.getElementById(TempQID.concat((t + 1).toString())).innerHTML;
                console.log("User ans is ->>" + t1);
                console.log("Actual ans is->" + t2);
            }
        }

        //here the status to question is assigned
        if (t1 !== t2) {

            document.getElementById(SymbolID).innerHTML = "Incorrect";
            document.getElementById(SymbolID).className = "resultStatus";
            document.getElementById(SymbolID).style.color = "red";
        }
        else {
            document.getElementById(SymbolID).innerHTML = "Correct";
            document.getElementById(SymbolID).className = "resultStatus";
            document.getElementById(SymbolID).style.color = "green";
        }


        //here the status to options is assigned
        for (var t = 0; t < jsonData[RandomNumbers[i]].option.length; t++) {

            if (t1 == document.getElementById(TempQID.concat((t + 1).toString())).innerHTML) {
                var checkedInputID = TempCID.concat((t + 1).toString()); //C11
                document.getElementById(checkedInputID).checked = true;
                document.getElementById(SymbID.concat((t + 1).toString())).classList.add("fa");
                if (t1 == jsonData[RandomNumbers[i]].answer) {
                    document.getElementById(SymbID.concat((t + 1).toString())).classList.add("fa-check");
                    document.getElementById(SymbID.concat((t + 1).toString())).style.color = "green";
                }
                else {
                    document.getElementById(SymbID.concat((t + 1).toString())).classList.add("fa-close");
                    document.getElementById(SymbID.concat((t + 1).toString())).style.color = "red";
                }
            }
            else if (t2 == document.getElementById(TempQID.concat((t + 1).toString())).innerHTML) {
                document.getElementById(SymbID.concat((t + 1).toString())).classList.add("fa");
                document.getElementById(SymbID.concat((t + 1).toString())).classList.add("fa-check");
                document.getElementById(SymbID.concat((t + 1).toString())).style.color = "green";
            }

        }
    }

}

function removeChilds() {
    console.log("Remove child");
    var qDiv = document.getElementById("quizBody");
    while (qDiv.hasChildNodes()) {
        qDiv.removeChild(qDiv.firstChild);
    }

    var rDiv = document.getElementById("displayResult");
    while (rDiv.hasChildNodes()) {
        rDiv.removeChild(rDiv.firstChild);
    }
    var resultdiv = document.getElementById("result");
    resultdiv.removeChild(resultdiv.childNodes[2]);
}
function startQuizinit() {
    if (TotalContainer > 0 && jsonData.length > 0 && TotalContainer <= jsonData.length) {
        document.getElementById("startBtnInit").style.display = "none";

        document.getElementById("instructions").style.display = "none";
        document.getElementById("TaskTitle").innerHTML = title;
        document.getElementById("result").style.visibility = "hidden";
        document.getElementById("displayResult").style.display = "none";
        removeChilds();
        document.getElementById("submitBtn").style.display = "block";
        putQuestion();
        document.getElementById("quizBody").style.display = "block";
        console.log("Total questions->" + jsonData.length);
    }
    else {
        console.log(TotalContainer + "    " + jsonData.length);
        alert("Either minimum questions set to zero or no questions in json file or minimum questions exceeded limit");
    }
}
function startQuiz() {

    document.getElementById("instructions").style.display = "none";
    document.getElementById("TaskTitle").innerHTML = title;
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("displayResult").style.display = "none";
    removeChilds();
    document.getElementById("startBtn").style.visibility = "hidden";
    document.getElementById("submitBtn").style.display = "block";
    putQuestion();
    document.getElementById("quizBody").style.display = "block";

}
function isSubmittable() {
    var AID = "A";
    var status = 0;
    for (var i = 0; i < TotalContainer; i++) {
        status = 0;
        var TempAID = AID.concat((i + 1).toString());
        for (var t = 0; t < jsonData[RandomNumbers[i]].option.length; t++) {
            var TempAID1 = TempAID.concat((t + 1).toString());

            if (document.getElementById(TempAID1).checked) {
                status = 1;
            }
        }
    }
    return status;
}
function submitQuiz() {
    var status = isSubmittable();
    if (status == 0) {
        alert("Please attempt all questions");
    }
    else {
        document.getElementById("submitBtn").style.display = "none";
        document.getElementById("startBtn").style.visibility = "visible";
        submitAnswers();
        document.getElementById("quizBody").style.display = "none";
        var t = document.createTextNode("Your Score is : " + (CorrectCount).toString() + " out of " + TotalContainer);
        document.getElementById("result").appendChild(t);
        putResult();
        document.getElementById("TaskTitle").innerHTML = "Quiz Results";
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("displayResult").style.display = "block";
        CorrectCount = 0;
        ArrayEmpty = 1;
        UserAnswers = [];
        RandomNumbers = [];
    }
}

function generateRandomIndex() {
    var x = Math.floor((Math.random() * jsonData.length) + 0);
    var temp = RandomNumbers.indexOf(x);
    while (temp != -1 && ArrayEmpty === 0) {
        x = Math.floor((Math.random() * jsonData.length) + 0);
        temp = RandomNumbers.indexOf(x);
    }
    RandomNumbers.push(x);
    console.log("Question index->>"+x);
    ArrayEmpty = 0;
    return x;
}

function getContent(TempQID, OptionOID, k) {
    var RandomIndex = generateRandomIndex();

    putContainers(RandomIndex, k);
    console.log("Get content->>>>Qid->" + TempQID + "  " + RandomIndex);
    var tempStack = [];
    for (var i = 0; i < jsonData[RandomIndex].option.length; i++) {

        var x = Math.floor((Math.random() * jsonData[RandomIndex].option.length) + 1);
        var temp = tempStack.indexOf(x);
        while (temp != -1) {
            x = Math.floor((Math.random() * jsonData[RandomIndex].option.length) + 1);
            temp = tempStack.indexOf(x);
        }
        tempStack.push(x);
    }
    var temp = "Q".concat((k + 1).toString());
    document.getElementById(TempQID).innerHTML = temp + ") " + jsonData[RandomIndex].q;
    for (var i = 0; i < tempStack.length; i++) {
        document.getElementById(OptionOID.concat((tempStack[i]).toString())).innerHTML = jsonData[RandomIndex].option[i];
    }
    console.log("Question putted is->" + jsonData[RandomIndex].q);
    console.log("Question putted in->" + document.getElementById(TempQID).innerHTML);
}

function putQuestion() {
    var QID = "Q";
    var OID = "O";
    for (var i = 0; i < TotalContainer; i++) {
        var OptionOID = OID.concat((i + 1).toString());
        var TempQID = QID.concat((i + 1).toString());
        getContent(TempQID, OptionOID, i);
    }
}

function checkAnswer(AnsId, JsonId, OId, k) {
    var userAns = -1;

    for (var i = 0; i < jsonData[RandomNumbers[k]].option.length; i++) {
        if (document.getElementById(AnsId.concat((i + 1).toString())).checked) {
            userAns = i + 1;
            if (document.getElementById(OId.concat((i + 1).toString())).innerHTML == jsonData[JsonId].answer) {
                CorrectCount = CorrectCount + 1;
            }
            console.log(CorrectCount + " " + document.getElementById(OId.concat((i + 1).toString())).innerHTML + "  ->>" + jsonData[JsonId].answer);
        }
    }
    return userAns;
}

function submitAnswers() {
    var AID = "A";
    var OID = "O";
    for (var i = 0; i < TotalContainer; i++) {
        var TempAID = AID.concat((i + 1).toString());   //A1
        var JsonId = RandomNumbers[i];    //contains the questions index
        var TempOID = OID.concat((i + 1).toString());       //O1
        var userAns = checkAnswer(TempAID, JsonId, TempOID, i);
        UserAnswers.push(userAns);
    }
}