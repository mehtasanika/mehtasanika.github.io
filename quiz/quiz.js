function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
var correct = 0;

	if (question1 == "William Merritt Chase") {
		correct++;
	}

	if (question2 == "1896") {
		correct++;
	}

	if (question3 == "All of the above") {
		correct++;
	}

	if (question4 == "Paris") {
		correct++;
	}

	if (question5 == "1970") {
		correct++;
	}

	if (question6 == "2016") {
		correct++;
	}

	if (question7 == "Joel Towers") {
		correct++;
	}

	if (question8 == "5") {
		correct++;
	}

	if (question9 == "All of the above") {
		correct ++;
	}

	if (question10 == "New York") {
		correct ++;
	}

var messages = ["You really know your school!", "Come on! You can do better than that!", "Do you even go to this school?"];

var range;
	if(correct < 5) {
		range = 2;
	}

	if (correct < 8) {
		range = 1;
	}

	if (correct > 7) {
		range = 0;
	}

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " +  correct +  " correct!";

}