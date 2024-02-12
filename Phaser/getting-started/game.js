// Cria um objeto com configurações do jogo
var config = {
  type: Phaser.AUTO,
  width: 256,
  heigth: 272,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
};

// Cria uma instância do Phaser
var game = new Phaser.Game(config);
