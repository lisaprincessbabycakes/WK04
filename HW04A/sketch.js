function shape(x0, y0, w, h) {
  // top triangle
  triangle(x0 - w / 2, y0, x0 + w / 2, y0, x0, y0 - h / 2);

  // bottom triangle
  triangle(x0 - w / 2, y0, x0 + w / 2, y0, x0, y0 + h / 2);
}

let max = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0, 102, 102);
 noStroke();
  
  for (let y = max / 2; y < height + max; y += max) {
    for (let x = max / 2; x < width + max; x += max) {
      let w = random(70, 100);
      let h = random(60, 300);

      let aRandomNumber = random();
      let sizeRandom = random();

      if (aRandomNumber < 0.35) {
        fill(147, 206, 168); // Light green
      } else if (aRandomNumber < 0.6) {
        fill(255, 153, 153); // Light red
      } else if (aRandomNumber < 0.7) {
        fill(255, 102, 102); // Red
      } else if (aRandomNumber < 0.8) {
        fill(255, 229, 204); // Light peach
      } else {
        fill(0, 51, 51); // Dark teal
      }

      //shape (x,y,w,h)
     
      //let e = max/2;
      //let dValue =(max - e)/2;
      //let dx = random(-dValue, dValue);
      //let dy = random(-dValue, dValue);
      
     //shape(x +dx, y+dy, e, e);
      
      let e = random(max/15, max/0.90);
      let dValue = (max-e)/2;
      let dx = random(-dValue, dValue);
      let dy = random(-dValue, dValue);
      
      shape(x +dx, y+dy, e, e)
    }
  }
}

