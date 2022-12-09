function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0)
  background(0);

}

function draw() {
  // background(0,35);


  strokeWeight(2)
  stroke(255)
  // line(mouseX,mouseY,pmouseX,pmouseY);
  // line(width-mouseX,mouseY,width-pmouseX,pmouseY);

  // line(mouseX,mouseY,width-mouseX,mouseY);


  // noStroke()
  let s = Math.sin(frameCount/10)*100+120
  ellipse(mouseX,mouseY,s)
  ellipse(width-mouseX,mouseY,s)

}
