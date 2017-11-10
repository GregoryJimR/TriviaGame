//need code to start game
//--need code to transition from question to question on click of answer or on countdown
//need code for transition from final question to game results display
//need code for reset button
var number = 10
var intervalId;
var startTimer = function() {
    intervalId = setInterval(decrement, 1000);
}

var decrement = function() {
    number--;
    $(".timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
        i++;
        stop();
        newQuestion();
    }
}
var stop = function() {
    clearInterval(intervalId);
    number = 10;
    console.log("index: " + i)
}

// var timeUp = function() {
//     i++;
//     newQuestion();
//     console.log("timeup")
//}
var questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var correctAnswer = 0;
//var seconds = 10;
var i;
var gameOver = function() {
    $(".restartButton").css("display", "block");
    $("img").css("display", "block")
    $(".timer").html("");
    $(".questiondiv").text("You answered " + correctAnswer + " out of " + questionList.length + " correctly! ")
    if (correctAnswer == 10) {
        $(".questiondiv").append(messages.perfect);
    }
    else if (correctAnswer <= 9 && correctAnswer > 6) {
        $(".questiondiv").append(messages.nearWin);

    }
    else {
        $(".questiondiv").append(messages.loss);
    }
};
//fills in questions and answers from library
var newQuestion = function() {
    //fill question
    //clearInterval(answerInterval())
    startTimer();
    //console.log(timmy);
    $(".questiondiv").text(questionList[i].question);
    //fill question.answer
    $("#answer1").text(questionList[i].answer1);
    $("#answer2").text(questionList[i].answer2);
    $("#answer3").text(questionList[i].answer3);
    $("#answer4").text(questionList[i].answer4);
};

//beginningState();
//hides image, pulls first question set with newQuestion(), sets i to 0, ****starts timer****, ****appends timer to questionBox****
$(".beginButton").on("click", function() {
    $(".beginButton").css("display", "none")
    $(".openimage").css("display", "none");
    i = 0;
    newQuestion();
    console.log("question index: " + i)
});
$(".restartButton").on("click", function() {
    $(".restartButton").css("display", "none");
    $(".openimage").css("display", "none");
    i = 0;
    newQuestion();
    console.log("question index: " + i)
});
$(".answerButton").on("click", function() {
    stop();
    number = 10;
    console.log("question index: " + i);
    var buttonVal = $(this).val();
    if (buttonVal == questionList[i].correct) {
        correctAnswer++;
    }
    //console.log("buttonVal: " + buttonVal)
    //console.log(" " + i + " ")
    //console.log("correctAnswer: " + correctAnswer)
    //console.log("question: " + questionList[i])
    i++;
    if (i === 10) {
        gameOver();
    }
    else {
        newQuestion();
        //****restart timer****
    }
});
