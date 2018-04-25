var sound1 = new Audio('wronganswer.mp3');
var sound2 = new Audio('cheering.wav');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');

opt1.addEventListener('click', test);
opt2.addEventListener('click', test);
opt3.addEventListener('click', test);

function test() {
  if (this.className == 'wrong') {
    console.log('wrong').unbind("click");
    sound1.play();
  } 
  else {
    console.log('right').bind("click");
  }
}