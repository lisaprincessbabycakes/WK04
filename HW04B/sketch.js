function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); 
}
//Sol Lewitt, Wall Drawing #393
function draw() {
  background(256);
  strokeWeight(1);

  let eDiam = 50; 

  
  for (let x = eDiam / 2; x < width; x += eDiam) {
    for (let y = eDiam / 2; y < height; y += eDiam) {
      
      let strokeColor = random(); 

      if (strokeColor < 0.25) {
        // Red arc
        stroke(255, 0, 0);
        noFill();
        arc(x, y, eDiam, eDiam, radians(120), radians(240), OPEN);
      } else if (strokeColor < 0.5) {
        // Black arc
        stroke(0);
        noFill();
        arc(x, y, eDiam, eDiam, radians(300), radians(60), OPEN);
      } else if (strokeColor < 0.75) {
        // Yellow arc
        stroke(255, 220, 0);
        noFill();
        arc(x, y, eDiam, eDiam, radians(30), radians(150), OPEN);
      } else {
        // Blue arc
        stroke(0, 0, 255);
        noFill();
        arc(x, y, eDiam, eDiam, radians(200), radians(-20), OPEN);
      }
    }
  }
}

