let index=0;
let attempt = 0;
let score=0;
let wrong=0;

let questions = quiz.sort(function(){
     return 0.5 - Math.random();
}); // generating random question.

let totalQuestion=questions.length;

$(function(){
   let totalTime = 600;
   let min = 0;
   let sec = 0;
   let counter = 0; 

   let timer = setInterval(function (){
        counter++;
        min = Math.floor((totalTime - counter) / 60); // calculating the minutes time.
        sec = totalTime - (min * 60) - counter; //calculating the seconds time.

        $(".timer-box span").text(min + " Min : " + sec +" Sec"); // changing the timer in the page
        
        if(counter == totalTime) // condition when time is 0 seconds.
        {
            alert("Time is Up !!! Please click ok to generate result !!!")
            result(); // calling result function when time is up
            clearInterval(timer);
        }
   }, 1000); // timer set for 1 second.

// printing random questions.

printQuestions(index);

}); 


//function to generate random questions.

function printQuestions(i){
    $(".question-box").text(questions[i].question);
    $(".option-box span").eq(0).text(questions[i].option[0]);
    $(".option-box span").eq(1).text(questions[i].option[1]);
    $(".option-box span").eq(2).text(questions[i].option[2]);
    $(".option-box span").eq(3).text(questions[i].option[3]);
} 


// function to check answer.

function checkAnswer(option){
    attempt++;

    let optionClicked = $(option).data("opt");

    if(optionClicked === questions[index].answer){
        $(option).addClass("right");
        score++;
    }
    else{
        $(option).addClass("wrong");
        wrong++;
    }

    $(".score-box span").text(score); // updating score to the scorebox

    $(".option-box span").attr("onclick", " "); // to unhighlight all the options once we answer the question.
}


// next button functionality in generating next question

function nextQuestion(){

    if(index >= questions.length - 1){
        showResult(0);
        return;
    }

    index++;
    $(".option-box span").removeClass(); // to remove red / green color from options which was clicked in previous question.
    $(".option-box span").attr("onclick", "checkAnswer(this)"); // to check answers again in next question.
    printQuestions(index); // generating next question and printing it.
}


// function to show the result

function showResult(j){

    if(j==1 // variable j is used to check submit button clicked or not
         &&
     index < questions.length - 1 // to check all questions are attempted or not
      && 
    !confirm("Quiz not yet completed, Do you still want to submit quiz ??? ")) // to generate the alert
    {
        return;
    }
    result();

    
}


// automatic submission of time out

function result(){
    $("#question-screen").hide();
    $("#result-screen").show();

    $("#total-questions").text(totalQuestion);
    $("#attempt-questions").text(attempt);
    $("#correct-answers").text(score);
    $("#wrong-answers").text(wrong);
}