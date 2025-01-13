function setup() {
  createCanvas(600, 600);
  background('tan');
    nose(300, 300)
}

function draw() {
}

function nose(x, y) {
  //main nose
    fill('pink');
    strokeWeight(4)
  ellipse(x, y, 200, 150);

  //left nostril
    fill('black')
  ellipse(x-35, y+5, 50, 50)

  //right nostril
  ellipse(x+35, y+5, 50, 50)

}