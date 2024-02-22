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
  // this.load.image('');
  this.load.tilemapTiledJSON('map', './map/best_office.json');
}

function create() {
  const map = this.make.tilemap({key: 'map', tileWidth: 32, tileHeight: 32})
  // const tileset = map.addTilesetImage();
}

function update() {}
