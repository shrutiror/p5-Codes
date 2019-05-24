var toggle=true;
function setup() {
	createCanvas(800, 300);
	background(220);
	rectMode(CENTER);
}

function draw() {
	var x=width/2;
	var y=height/2;
	var size=200;
	if(mouseIsPressed===true)
	{ 
		toggle=!toggle 
	}
	if(toggle===true)
	{ 
		background(6,200,180);
	}
	else
	{
			background(200,6,65);
	}
	fill(255,0,0);
	noStroke();
	ellipse(x, y, size, size);
	fill(255);
	noStroke();
	rect(x,y,size*0.75,size*0.15);
	
}