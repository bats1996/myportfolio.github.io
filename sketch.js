
let myFont;
function preload() {
  myFont = loadFont('assets/product.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    textFont(myFont);
    textSize(50);
    text("Please wait a while", windowWidth/2, windowHeight/2);
  }
  
  function draw() {
    cursor('progress');
    
    
  }