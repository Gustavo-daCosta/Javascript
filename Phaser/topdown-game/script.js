var config = {
  type: Phaser.AUTO,
  width: 766,
  height: 619,
  backgroundColor: "#3242a8",
  physics: {
    gravity: { y: 0 },
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var player;
var cursors;

var platforms;
var verticalWall;
var horizontalWall;

var game = new Phaser.Game(config);

function preload() {
  // Background
  this.load.image("background", "./assets/recepcao.png");
  // Tamanho da plataforma = 200x50
  this.load.image("platform", "./assets/platform.png");
  // SpriteSheet do personagem
  this.load.spritesheet("player", "./assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
}

function create() {
  this.add.image(383, 310.5, "background");

  platforms = this.physics.add.staticGroup();

  cursors = this.input.keyboard.createCursorKeys();

  player = this.physics.add.sprite(100, 350, "player");
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "player", frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("player", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });
}

function update() {
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play("right", true);
  } else if (cursors.up.isDown) {
    player.setVelocityY(-160);
  } else if (cursors.down.isDown) {
    player.setVelocityY(160);
  } else {
    player.setVelocityX(0);
    player.setVelocityY(0);
    player.anims.play("turn");
  }
}

function isOnlyKeyPressed(key) {
  switch (key) {
    case "left":
      if (cursors.down.isDown || cursors.up.isDown || cursors.right.isDown) {
        return false;
      } return true;
    case "right":
      if (cursors.down.isDown || cursors.up.isDown || cursors.left.isDown) {
        return false;
      } return true;
    case "up":
      if (cursors.down.isDown || cursors.left.isDown || cursors.right.isDown) {
        return false;
      } return true;
    case "down":
      if (cursors.left.isDown || cursors.up.isDown || cursors.right.isDown) {
        return false;
      } return true;
    default:
      break;
  }
}


function isOnlyKeyPressed(key) {
  var possibilities = [left, right, up, down];
  var contagemTrues = 0;

  possibilities.forEach(element => {
    console.log(cursors.element.isDown);
    if (cursors.element.isDown) contagemTrues += 1;
  });

  return contagemTrues === 1;
}

