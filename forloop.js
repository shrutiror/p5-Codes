function setup() {
	createCanvas(800, 300);
	background(100);
}

function draw() {
	var x=width/2;
	var y=height/2; 
	for(var i=1;i<10;i=i+1)
	{ 
		fill(30,78,150);
   	ellipse(x,y , 50, 50);
	}
}