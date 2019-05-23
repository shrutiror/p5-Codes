var count=1;
function setup() {
	createCanvas(800,300);
	background(0,255,255);
	rectMode(CENTER);
}

function draw() {
fill(255,0,255);
rect(-400+count,150 ,200, 100);
rect(-400+count*3,150 ,200, 100);
rect(-400+count*5,150 ,200, 100);
rect(-400+count*5.5,150 ,200, 100);
rect(-400+count*6,150 ,200, 100);
count=count+1;
}