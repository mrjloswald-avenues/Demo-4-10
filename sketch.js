let x
let y
let radius
let r 
let g 
let b 
let dx 
let dy 

function setup() {
  createCanvas(400, 400);
  createNewCircle()
}

function draw() {
  background(220);
  fill(r,g,b)
  circle(x,y,radius)
  x = x + dx
  y = y + dy
}

function keyPressed() {
  if( key === "n" ) { // some T/F question
    createNewCircle()
  }
  
  if( key === "c" ) {
    changeColor()
  }
}

function changeColor() {
  r = random(255)
  g = random(255)
  b = random(255)  
}

function createNewCircle() {
  changeColor()
  dx = random(-1,1)
  dy = random(-1,1)
  x = random(width) // [0,width)
  y = random(height)
  radius = random(10,20)        
}
