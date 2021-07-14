function setup() {
  createCanvas(300, 300);
 
  background(220);
}

function draw() {
  
  rect(mouseX, mouseY,40,40);
  
  let xLabel = document.getElementById('x-label');
  xLabel.innerText = 'X: ' + mouseX;

  let yLabel = document.getElementById('y-label');
  yLabel.innerText = 'Y: ' + mouseY;
}
