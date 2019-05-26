function setup() {
	createCanvas(900,500);
}

function draw() {
	background(0);
  grid(10,20,15);
}
function grid(numX,numY,size)
{
	for(i=0;i<=width/size;i=i+1)
	{
		for(j=0;j<=height/size;j=i+1)
		{
	   noFill();
	   stroke(255);
	   strokeWeight(2);
		 line(size*i,size*j,width,size*j);
		 line(size*i,size*j,size*i,height);	

		}	
	}
}
