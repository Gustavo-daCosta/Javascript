var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x394938,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        debug: false,
    }
  },
  scene: {
    preload,
    create,
    update,
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet('player', './assets/AmeliaFull.png', {
    frameWidth: 16,
    frameHeight: 24,
  });

  this.load.spritesheet('arrowDown', './assets/keys/ARROWDOWN.png', {frameWidth: 19, frameHeight: 21});
  this.load.spritesheet('arrowLeft', './assets/keys/ARROWLEFT.png', {frameWidth: 19, frameHeight: 21});
  this.load.spritesheet('arrowRight', './assets/keys/ARROWRIGHT.png', {frameWidth: 19, frameHeight: 21});
  this.load.spritesheet('arrowUp', './assets/keys/ARROWUP.png', {frameWidth: 19, frameHeight: 21});
  this.load.spritesheet('space', './assets/keys/SPACEALTERNATIVE.png', {frameWidth: 98, frameHeight: 21});
}

function create() {
  player = this.physics.add.sprite(400, 150, 'player').setScale(4);

  this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNumbers('player', {
      start: 18,
      end: 23,
    }),
    frameRate: 10,
    repeat: -1,
  });

  arrowKeys = this.physics.add.staticGroup();
  arrowKeys.create(250, 300, 'arrowDown').setScale(2);
  arrowKeys.create(210, 300, 'arrowLeft').setScale(2);
  arrowKeys.create(290, 300, 'arrowRight').setScale(2);
  arrowKeys.create(250, 260, 'arrowUp').setScale(2);
  space = this.physics.add.sprite(600, 300, 'space').setScale(2);

  this.anims.create({
    key: 'click',
    frames: this.anims.generateFrameNumbers('space', {start: 0, end: 2}),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'clickDown',
    frames: this.anims.generateFrameNumbers('arrowDown', {start: 0, end: 2}),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: 'clickLeft',
    frames: this.anims.generateFrameNumbers('arrowLeft', {start: 0, end: 2}),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: 'clickRight',
    frames: this.anims.generateFrameNumbers('arrowRight', {start: 0, end: 2}),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: 'clickUp',
    frames: this.anims.generateFrameNumbers('arrowUp', {start: 0, end: 2}),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: 'clickSpace',
    frames: this.anims.generateFrameNumbers('space', {start: 0, end: 2}),
    frameRate: 10,
    repeat: -1,
  });

  this.add.text(
    250, 20,
    "TUTORIAL",
    {
      fontFamily: 'Arial',
      fontSize: 64,
      fontWeight: '900',
    },
  );

  criarSeta(250, 350, this);

  this.add.text(
    180, 450,
    " Teclas de\nmovimento",
    {
      fontFamily: 'Arial',
      fontSize: 32,
    }
  );

  criarSeta(600, 350, this);

  this.add.text(
    540, 450,
    "Tecla de\ninteração",
    {
      fontFamily: 'Arial',
      fontSize: 32,
    }
  );
}

function criarSeta(posicaoX, posicaoY, isso) {
  arrowLength = 80;
  arrowWidth = 25;

  graphics = isso.add.graphics();

  graphics.beginPath();
  graphics.moveTo(posicaoX, posicaoY);
  graphics.lineTo(posicaoX, posicaoY + 15 + arrowLength / 2);
  graphics.moveTo(posicaoX - arrowWidth / 2, posicaoY + arrowLength - arrowWidth);
  graphics.lineTo(posicaoX, posicaoY + arrowLength);
  graphics.lineTo(posicaoX + arrowWidth / 2, posicaoY + arrowLength - arrowWidth);
  graphics.moveTo(posicaoX + arrowWidth / 2, posicaoY + arrowLength - arrowWidth);
  graphics.lineTo(posicaoX - arrowWidth / 2, posicaoY + arrowLength - arrowWidth);
  graphics.strokePath();
  graphics.lineStyle(2, 0xffffff);
}

function update() {
  player.anims.play("down", true);
  arrowKeys.children.entries[0].anims.play('clickDown', true);
  arrowKeys.children.entries[1].anims.play('clickLeft', true);
  arrowKeys.children.entries[2].anims.play('clickRight', true);
  arrowKeys.children.entries[3].anims.play('clickUp', true);
  space.anims.play('click', true);
}
