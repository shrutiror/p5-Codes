function setup() {
	createCanvas(800, 300);
	background(220);
	rectMode(CENTER);
}

function draw() {
	fill(255,0,0);
	stroke(75);
	ellipse(400, 150, 150, 150);
	fill(255);
	noStroke();
	rect(400,150,100,50);
}