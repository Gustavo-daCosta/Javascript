// Initialize Phaser game
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create
  }
};

const game = new Phaser.Game(config);

let cable;
let isDragging = false;

// Preload assets if needed
function preload() {
  // No preload assets needed for this example
}

// Create cable and set up mouse events
function create() {
  // Create a line for the cable
  cable = new Phaser.Geom.Line(100, 100, 400, 300);
  
  // Draw the cable
  let graphics = this.add.graphics();
  graphics.lineStyle(2, 0xff0000);
  graphics.strokeLineShape(cable);

  // Event listeners for mouse input
  this.input.on('pointerdown', function (pointer) {
      // Check if pointer is within certain distance of the cable end point
      if (Phaser.Geom.Line.DistancePoint(cable, pointer.x, pointer.y) < 10) {
          isDragging = true;
      }
  });

  this.input.on('pointermove', function (pointer) {
      if (isDragging) {
          // Update the cable end point
          cable.x2 = pointer.x;
          cable.y2 = pointer.y;
          
          // Clear previous cable and redraw
          graphics.clear();
          graphics.lineStyle(2, 0xff0000);
          graphics.strokeLineShape(cable);
      }
  });

  this.input.on('pointerup', function (pointer) {
      isDragging = false;
  });
}
