var bubbles = [];
var widthX = window.innerWidth*0.8;
var heightY = window.innerHeight*0.8;
function setup() {
  createCanvas(heightY, heightY);
  frameRate(10);
  for (var i = 0; i < 30; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(70, 110),
      w: random(1, 10)
    };
    bubbles.push(bubble);
  }
  console.log(bubbles);

}

function draw() {
  background(255);

  for (var i = 0; i < bubbles.length; i++) {

    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(253, 142, 168, 900);
    } else {
      fill(255, 167, 188, 200);
    }
    strokeWeight(bubble.w);
    bubble.w += random(-2, 2);
    stroke('rgba(252, 204, 215,0.25)');

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-4, 4);
    bubble.y += random(-3, 3);
    bubble.radius += random(-2, 2);
  }
}
