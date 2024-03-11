var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.tilemapTiledJSON('map', './map/best_office.json');
  this.load.image('mapaTopTiles', './assets/free_overview.png');
  this.load.image('mapaTop2Tiles', './assets/Modern_Office_32x32.png');
  this.load.image('mapaTop3Tiles', './assets/Room_Builder_Office_32x32.png');
  this.load.image('tiles', './assets/recepcao (1).png');
  this.load.image('player', './assets/alienigena.png');
}

function create() {
  this.map = this.make.tilemap({ key: 'map' });
  var topTiles = this.map.addTilesetImage('mapTopTiles', 'mapaTopTiles');
  var topTiles2 = this.map.addTilesetImage('mapTopTiles2', 'mapaTopTiles2');
  var topTiles3 = this.map.addTilesetImage('mapTopTiles3', 'mapaTopTiles3');
  var tiles = this.map.addTilesetImage('tiles', 'tiles');

  this.tiles = this.map.createLayer('tiles', tiles);
  this.topTiles = this.map.createLayer('mapTopTiles', topTiles);
  this.topTiles2 = this.map.createLayer('mapTopTiles2', topTiles2);
  this.topTiles3 = this.map.createLayer('mapTopTiles3', topTiles3);

  this.map.setCollisionBetween(0, 1000, true, 'Ground');

  alien = this.physics.add.sprite(100, 0, 'player');
  // alien.setCollideWorldBounds(true);
}

function update() {}
