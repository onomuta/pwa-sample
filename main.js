function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  // background(220,5);
  // rect(mouseX,mouseY,10,10)

  background(0);
	push();
	{
		rotateY(frameCount / 60.0);
		push();
		translate(-width/6.0, 0, 0)
		rotateY(frameCount / 30.0);
		sphere(height/4);
		pop();
		push();
		translate(width/6.0, 0, 0);
		rotateY(frameCount / 30.0);
		box(height/3);
		pop();
	}
	pop();
}
