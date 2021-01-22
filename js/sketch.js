function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  textAlign(CENTER, CENTER);
  textSize(100);
  text("Olá Mundo!", width/2, height/2);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}