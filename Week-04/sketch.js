var x = 90;
var y = 90;
var xspeed = 6;
var yspeed = 6;


function setup() {
  createCanvas(600, 600);
  background (30);
}

function draw() {

	//distance from center of the screen
	var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

  	fill (random(100, 150), random(100, 150), random(100, 150));
  	ellipse (x, y, d, d);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > 600 || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > 600 || y < 0) {
	 	  yspeed = -yspeed;
  	}

}