let x
let y
let radius

function setup() {
  createCanvas(400, 400);
  x = random(width) // [0,width)
  y = random(height)
  radius = random(10,20)
}

function draw() {
  background(220);
  circle(x,y,radius)
}