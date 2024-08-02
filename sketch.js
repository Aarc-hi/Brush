function setup() {
  createCanvas(500, 500);

  background('lightblue');

  strokeWeight(20);
  stroke("white");
  frameRate(50);
}

function draw() {
  let posY = mouseY;
  let posX = mouseX;
  
  point(posX, posY);
}

function jump() {
  console.log('Jumpy');
}