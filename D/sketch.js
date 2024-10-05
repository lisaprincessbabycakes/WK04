function star(x, y, w, c, l) {
  let r = w / 2;
  push();
  translate(x, y);

  for(let cnt=0; cnt < l; cnt++){
  line(c, -c, r, 0);
  line(c, c, r, 0);
  rotate(360/l);
  }

  // line(-c, c, 0, r);
  // line(c, c, 0, r);

  // line(-c, -c, -r, 0);
  // line(-c, c, -r, 0);

  // line(-c, -c, 0, -r);
  // line(c, -c, 0, -r);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  
  strokeWeight(4);
  let pitch = 100;
  let sqDim = 0.9 * pitch;
  translate(pitch / 2, pitch / 2);

  // randomSeed(1010);
  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      let rn= random (0, 6);
      let rr = random(256);
      let rg = random(256);
      let rb = random(256);

      let rcc = random(["#ff00ff","#ff0000","#00ffff"]);

      let rd = random(25, 50, 80, 120);


      push();
      translate(x, y);

      noFill();
      fill(rcc);

      // stroke(rr, rg, rb);
      

      if (rn < 5){
      rect (0, 0, rd);
      } else if (rn <4) {
      ellipse(0, 0, rd);
      } else{
        star( 0, 0, rd, 10, 4);
      }

      

      // rect(0, 0, sqDim);
      // ellipse(0, 0, sqDim);
      pop();
    }
  }
}

function draw() {}

function mouseClicked(){


}