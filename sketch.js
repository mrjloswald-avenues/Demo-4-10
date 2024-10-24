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
  if( x < 0 || x > width ) {
    dx = dx * -1
  }
  if( y < 0 || y > height ) { // || means "or"
    dy = dy * -1
  }
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
  dx = random(-3,3)
  dy = random(-3,3)
  x = random(width) // [0,width)
  y = random(height)
  radius = random(10,20)        
}
