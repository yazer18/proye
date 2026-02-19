import Player from "../entities/Player.js";
import Enemy from "../entities/Enemy.js";
import { generatePlatforms } from "../utils/levelGenerator.js";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.platforms = generatePlatforms(this);

    this.player = new Player(this, 400, 100);
    this.enemies = this.physics.add.group();

    for (let i = 0; i < 5; i++) {
      this.enemies.add(new Enemy(this,
        Phaser.Math.Between(100, 700),
        Phaser.Math.Between(100, 300)
      ));
    }

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.enemies, this.platforms);

    this.physics.add.overlap(this.player, this.enemies, () => {
      this.scene.restart();
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.move(this.cursors);
  }
}
