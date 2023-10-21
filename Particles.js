
//let p; // for single Particle

const particles = []; // initialize an array

function setup() {
  //console.log('setup');
  createCanvas(window.innerWidth, window.innerHeight);
  //console.log(width);
  //console.log(random(100));

  // p = new Particle(); // for single particle

  const particlesLength = Math.floor(window.innerWidth / 10);
  // console.log(particlesLength);
  for(let i=0; i<particlesLength; i++) {
    particles.push(new Particle()); // creating memory for each new particle
  }

}

function draw() {
  //console.log('draw');

  /*if(mouseIsPressed) {
    console.log(mouseX, mouseY);
  }*/

  /*if(mouseIsPressed) {
    fill(0);
  } else {
    fill(100);
  }

  //circle(150, 150, 180);
  circle(mouseX, mouseY, 80);*/

  background(55,100,144);
  /*p.update();
  p.draw();*/ // for a single particlesLength

  particles.forEach((p,index) => {
    p.update();
    p.draw();
    //p.checkParticles(particles.slice(index));
    //console.log(p);
    p.checkParticles(particles);

  });




}

  class Particle {

    constructor() {
      // position
      this.pos = createVector(random(width), random(height));
      // velocity
      this.vel = createVector(random(-2,2), random(-2,2));
      // size
      this.size = 10;
    }

    // method 1: update movement by adding velocity
    update() {
      this.pos.add(this.vel);
      this.edges();
    }

    // method 2: draw single particle
    draw() {
      noStroke(); // no border
      fill('rgba(255,255,255,0.5)'); // white with alpha-value (transparency) 0.5, to fade away
      circle(this.pos.x, this.pos.y, this.size);
    }

    // method 3: detect edges
    edges() {
      if(this.pos.x<0 || this.pos.x>width) {
        this.vel.x *= -1;
      }
      if(this.pos.y<0 || this.pos.y>height) {
        this.vel.y *= -1;
      }
    }

    // method 4: connect particles
    checkParticles(particles) {
      particles.forEach(particle => {
        const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

        if(d<120) {
          stroke('rgba(255,255,255,0.1)');
          line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
        }
      });
    }






  }
