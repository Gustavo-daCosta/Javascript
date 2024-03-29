class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  preload() {
    this.load.image("background", "./assets/background.png");
    this.load.image("ship", "./assets/ship.png");
    this.load.image("ship2", "./assets/ship2.png");
    this.load.image("ship3", "./assets/ship3.png");
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    this.ship1 = this.add.image(
      config.width / 2 - 50,
      config.heigth / 2,
      "ship"
    );
    this.ship1.setScale(2).flipY = true;
    this.ship2 = this.add.image(config.width / 2, config.heigth / 2, "ship2");
    this.ship3 = this.add.image(
      config.width / 2 + 50,
      config.heigth / 2,
      "ship3"
    );
    this.ship3.setScale(2);

    this.add.text(20, 20, "Playing game", {
      font: "25px Arial",
      fill: "yellow",
    });
  }

  moveShip(ship, speed) {
    // console.log(ship);
    ship.y += speed;
    console.log(ship.y);
    console.log(config.height);
    if (ship.y > config.height) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship) {
    ship.y = 0;
    var randomX = Phaser.Math.Between(0, config.width);
    ship.x = randomX;
  }

  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);
  }
}
