var bubbles = [];

function setup() {
  createCanvas(600,400);
  for (var i = 0; i < 4; i++){
    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        stroke(225);
        noFill();
        ellipse(this.x, this.y, 24,24);
       },

       move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1,1);
       }

       function draw() {
      background(0);
      for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
      }
    }

    function Bubble() {
      this.x = random (0, width);
      this.y = random (0, height);
      
    this.display = function() {
      stroke (255);
      strokeWeight (4);
      noFill();
      ellipse(this.x,this.y,24,24);
      }

      this.move = function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
      }
  
 



  }





}







/*var bubbles = [];

function setup() {
  createCanvas(600,400);
  for (var i = 0; i < 400; i++) {
    bubbles[i] = new Bubble();
      }
    }

    function draw() {
      background(0);
      for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
      }
    }

    function Bubble() {
      this.x = random (0, width);
      this.y = random (0, height);
      
    this.display = function() {
      stroke (255);
      strokeWeight (4);
      noFill();
      ellipse(this.x,this.y,24,24);
      }

      this.move = function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
      }
    }





    /*
var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
  display: function() {
      stroke (255)
      strokeWeight (4);
      noFill();
      ellipse(this.x,this.y,24,24);
  }
      function move() {
     this.x = this.x + this.xspeed;
     this.y = this.y + this.yspeed;
  }
   function bounce() {
    if (this.x > width || this.x < 0)  {
      this.xspeed = this.xspeed * -1;
    } 
    if (this.y > width || this.y < 0)  {
      this.yspeed = this.yspeed * -1;
    }
}

var bubble = {
  x: 300,
  y: 200,
  display: function() {
      stroke (255)
      strokeWeight (4);
      noFill();
      ellipse(this.x,this.y,24,24);
  move: function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

function setup() {
  createCanvas(1300,700);
}

function draw() {
  background (0);
  ball.move();
  ball.bounce();
  ball.display();
  bubble.display();
  bubble.move();
}  
var bubbles = [];

function setup() {
  createCanvas(600,400);
  for (var i = 0; i < 4; i++) {
    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
  display: function() {stroke (255)
      strokeWeight (4);
      noFill();
      ellipse(this.x,this.y,24,24);
  move: function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);}
    }
  }
  }
} 
}