function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  var posX = mouseX;
  var posY = mouseY;
  pointLight(125, 30, 40, -posX, -posY, 0);
  pointLight(230, 120, 140, -posX, posY, 0);
  pointLight(200, 80, 60, -posX, posY, 0);
  camera(posX, posY, 50, -50, 0, 0, 0, 1, 0);

  ambientMaterial(125);
  noStroke();
  rotateY(frameCount);
  torus(150, 10);
  rotateY(- 2 * frameCount);
  sphere(100);
}
