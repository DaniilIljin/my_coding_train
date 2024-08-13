 // p5.js setup function
 function setup() {
    // Create a canvas of size 400x400
    createCanvas(600, 600);
  }

  // p5.js draw function
  function draw() {
    // Set background color to light gray
    background(220);

    // Draw a circle at the mouse position
    ellipse(mouseX, mouseY, 50, 50);
  }