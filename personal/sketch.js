var date = new Date();
var hours = date.getHours();

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function setup() {
  createCanvas( windowWidth, windowHeight );
}

var xs = [];
var ys = [];
function draw() {
  background( 153, 204, 255);

  for( var i = 0; i < xs.length; i++ ) {
    var w = getRandomInt( 20, 30 );
    var h = getRandomInt( 20, 30 );
    if (hours == 12){
      var r = getRandomInt(200,250)
    } 
    else if (hours == 13){
      var r = getRandomInt(150,200);
    }
    else {

    }
    var g = 150;
    var b = 255;
    fill( r, g, b );


    ellipse( xs[i], ys[i], 10, 20);
    line( xs[i], ys[i], xs[i]+getRandomInt(-50,40), ys[i]+getRandomInt(-50,40) );
    line( xs[i], ys[i], xs[i]+getRandomInt(-50,40), ys[i]+getRandomInt(-50,40) );
    line( xs[i], ys[i], xs[i]+getRandomInt(-50,40), ys[i]+getRandomInt(-50,40) );
    line( xs[i], ys[i], xs[i]+getRandomInt(-50,40), ys[i]+getRandomInt(-50,40) );
    line( xs[i], ys[i], xs[i]+getRandomInt(-50,40), ys[i]+getRandomInt(-50,40) );
    line( xs[i], ys[i], xs[i]+getRandomInt(-50,40), ys[i]+getRandomInt(-50,40) );
  }

  if( mouseIsPressed ) {
    var x = mouseX;
    var y = mouseY;
    xs.push( x );
    ys.push( y );
  }
}

function mouseMoved() {
  
}
