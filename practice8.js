var x;
var y;
function setup() {
	createCanvas(900,500);
	rectMode(CENTER);
}

function draw() {
		background(0);
 x=width/2;
	y=height/2;
	rect(x,y,100,50);
	if(x>900)
	{
		x=0;
	}
	if(y>500)
	{
		y=0;
	}
}
function keyPressed()
{
	if(keyCode===LEFT_ARROW)
	{	x=x-10;}
	else if(	keyCode===DOWN_ARROW)
	{y=y-10;}
	else if(	keyCode===UP_ARROW)
	{y=y+10;}
	else(	keyCode===RIGHT_ARROW)
	{x=x+10;}
}