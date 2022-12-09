function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255,0,0,50)
  background(0);

}

function draw() {
  background(0,35);


  strokeWeight(8)
  stroke(255,0,0)
  line(mouseX,mouseY,pmouseX,pmouseY);
  line(width-mouseX,mouseY,width-pmouseX,pmouseY);


  noStroke()
  ellipse(mouseX,mouseY,80)
  ellipse(width-mouseX,mouseY,80)

}
