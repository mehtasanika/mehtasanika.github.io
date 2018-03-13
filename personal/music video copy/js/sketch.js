var sound;
var img;
function setup() {
	createCanvas( windowWidth, windowHeight );

}

function preload() {
  sound = loadSound('./audio/sound.mp3');

}

function draw() {
	background("#47b6e0");	
}


// when mouse is pressed
function mousePressed() {
	// are you playing?
  	if ( sound.isPlaying() ) {
    	sound.stop(); // than stop playing
    	background(255,0,0);
  	} else {
    	sound.play(); // otherwise play
    	background(0,255,0);
  	}
}

var xspacing = 1;   // Distance between each horizontal location
var w;              // Width of entire wave
var maxwaves = 4;   // total # of waves to add together

var theta = 0.0;
var amplitude = new Array(maxwaves);   // Height of wave
// Value for incrementing X, to be calculated 
// as a function of period and xspacing
var dx = new Array(maxwaves);         
// Using an array to store height values
// for the wave (not entirely necessary)
var yvalues;                          

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(70);
  colorMode(RGB, 255, 255, 255, 100);
  w = width + 16;

  for (var i = 0; i < maxwaves; i++) {
    amplitude[i] = random(10,500);
    var period = random(100,500); // Num pixels before wave repeats
    dx[i] = (TWO_PI / period) * xspacing;
  }

  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values 
  // for 'angular velocity' here
  theta += 0.02;

  // Set all height values to zero
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = 0;
  }
 
  // Accumulate wave height values
  for (var j = 0; j < maxwaves; j++) {
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 == 0)  yvalues[i] += sin(x)*amplitude[j];
      else yvalues[i] += cos(x)*amplitude[j];
      x+=dx[j];
    }
  }
}

function renderWave() {
  // A simple way to draw the wave with an ellipse at each location
  noStroke();
  fill(60,0,80);
  ellipseMode(CENTER);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing,width/2+yvalues[x],16,16);
  }
}


