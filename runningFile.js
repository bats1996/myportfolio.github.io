let x, y; 
let go=false;
let img;

function preload() {
  img = loadImage('folder.png');
}
 
 function setup() { 
  createCanvas(windowWidth, windowHeight); 
  imageMode(CENTER);
  newPosition();
} 
 
function draw() { 
  background(74, 217, 140);
  cursor('grab');
  let p = createVector( mouseX-x, mouseY-y, 0);
  p.limit(2);
  if (go && dist(mouseX, mouseY, x, y)<100) {
    x-=p.x;
    y-=p.y;
  }
  x = constrain(x,25,width-25);
  y = constrain(y,25,height-25);
  image(img, x, y, 50, 50); 
  if (mouseX>x-25 && mouseX<x+25 && mouseY>y-25 && mouseY<y+25) {
    newPosition();
  }
}
 
function mouseMoved() {
  go=true;
}
 
function newPosition() {
  x=random(width); 
  y=random(height);
}
