function setup() {
	createCanvas(800, 300);
	background(220);
	rectMode(CENTER);
}

function draw() {
	var x=400;
	var y=150;
	fill(255,0,0);
	stroke(75);
	ellipse(x, y, 150, 150);
	fill(255);
	noStroke();
	rect(x,y,100,50);
}