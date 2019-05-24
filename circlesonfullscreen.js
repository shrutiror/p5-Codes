function setup() {
	createCanvas(800,300);
}

function draw()
 {
	background(255,0,0);
	//var x=width/2;
	//var y=height/2; 
	var diameter=50;
	for(var i=0;i<width/diameter;i=i+1)
	{
	  for(var j=0;j<width/diameter;j=i+1)
 
		{
			fill(30,78,150);
		    stroke(0,255,0);
		    ellipse((diameter/2)+i*(diameter),(diameter/2)+j*(diameter), diameter, diameter);
        }

	}
}