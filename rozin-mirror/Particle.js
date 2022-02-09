class Particle {
  constructor(x,y,brightness,size,rotation,j)
  {
    this.x = x;
    this.y = y;
    this.j = j;
    this.brightness = brightness;
    this.size = size;
    //this.rotation = rotation;
    this.word = words[j];
  }
  
  
  update() {
    
  }
  
  drawParticle() {
 push();
  fill(this.brightness);
  textSize(this.size);
  text(this.word,this.x, this.y); 
 pop();
}

}