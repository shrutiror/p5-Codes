function setup() {
createCanvas(800, 400);

}
function draw() {
	var radius=400;
	var a=70;
background(220);
// circle 01
fill(51, 51, 51);
strokeWeight(2);
stroke(75);
ellipse(400, 200, radius, radius);
// circle 02
stroke(0);
fill(255, 53, 139);
ellipse(400, 200, radius-a, radius-a);
// circle 03
fill(1, 176, 240);
ellipse(400, 200, radius-2*a, radius-2*a);
// circle 04
fill(174, 238, 0);
ellipse(400, 200, radius-3*a, radius-3*a);
}