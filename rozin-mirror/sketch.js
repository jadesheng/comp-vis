let particles = [];
let words =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let capture;
const w = 720;
const h = 400;

function setup() {
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  shuffle(words,true);
  
  // colorMode(HSB, 255);
  
  rectMode(CENTER)
}

function draw() {
  background(0);
  
  const stepSize = 20;
  noStroke();
  capture.loadPixels();//automatically calls an array of pixels

  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      
      const i = (x + y * width) * 4;
      
      const r = capture.pixels[i]; // red channel
      const g = capture.pixels[i+1]; // green channel
      const b = capture.pixels[i+2]; // blue channel
      // capture.pixels[i+3] = 1; // alpha channel
      
      const brightness = (r + g + b) / 3 
      
      
      const size = map(brightness, 0, 255, 8, 22)
      const rotation = map(brightness, 0, 255, 0, 2*PI)
      const j = int(map(brightness,0,255,0,25));
      
      push();
      translate(x,y);
      rotate(rotation);
      fill(brightness+30);
      textSize(size);
      textAlign(CENTER);
      text(words[j],0,0);
      //particles.push(new Particle(x,y,brightness,size,rotation,j));
      pop();

    }
  }

  
  capture.updatePixels();
 
  particles.forEach((particle) => {
    
    particle.update();
    particle.drawParticle(
   )} )
  
  
}



