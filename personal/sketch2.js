var col = {
	h: 0,
	s: 0,
	b:0
};


var position = {
	x:100,
	y:50
}

var size = {
	a: 10,
	b:10,
}

function setup () {
	createCanvas (windowWidth,windowHeight);
	background(200,130,83);
}


function draw() {
	col.h = random (180,355);
	col.s = random (0,190);
	col.b = random (120,250);
	position.y = random (0, height);
	position.x = random (0, width);
	size.a = random (0,255),
	size.b = random (0,255),
	colorMode(HSB, 255);
	noStroke();
	c = color(col.h, col.s, col.b);
	fill (c);
	rect(position.x,position.y,size.a,size.b );

}