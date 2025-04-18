let points = [[-3, 5], [3, 7], [1, 5], [2, 4], [4, 3], [5, 2], [6, 2], [8, 4], [8, -1], [6, 0], [0, -3], [2, -6], [-2, -3], [-4, -2], [-5, -1], [-6, 1], [-6, 2]];
let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      dx: random(-2, 2),
      dy: random(-2, 2)
    });
  }
}

function draw() {
  background("#d88c9a");
  stroke(255, 255, 0);
  strokeWeight(5);
  noFill();
  for (let shape of shapes) {
    push();
    translate(shape.x, shape.y);
    beginShape();
    for (let point of points) {
      vertex(point[0] * 20, -point[1] * 20); // 繪製圖形，並放大座標
    }
    endShape(CLOSE);
    pop();
    shape.x += shape.dx;
    shape.y += shape.dy;
    if (shape.x < 0 || shape.x > width) shape.dx *= -1;
    if (shape.y < 0 || shape.y > height) shape.dy *= -1;
  }
}