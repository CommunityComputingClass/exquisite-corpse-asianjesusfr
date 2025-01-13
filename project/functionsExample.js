function setup() {
    createCanvas(600, 600);
   background("pink")
    eye(400,400);
   
 }
 
 function draw() {
 }
 
 function eye(x,y) {
   //left eye
     fill("white")
    ellipse(x, y, 80, 50);
     fill("black")
     ellipse(x-5,y,30,30)
    fill("white")
     rect(x-10, y-10, 10, 10);
   
   //right eye
     fill("white")
    ellipse(x+200, y, 80, 50);
     fill("black")
     ellipse(x+195,y,30,30)
    fill("white")
     rect(x+190, y-10, 10, 10);
 }