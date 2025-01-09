function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(150, 180, 220);

  fill(150, 20, 20, 130);
  strokeWeight(4);
  rect(100, 100, 100, 200, 70);

  fill(245, 194, 10, 180);
  triangle(200, 200, 130, 250, 250, 290);

  fill(68, 17, 237, 130)
  ellipse(180, 300, 270, 75)

  //text showing mouse coordinates
  fill(225, 0, 0);
  Text("("+mouseX + ", " + mouseY+")", 5, 15);

}