export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, null);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setDisplaySize(30, 30);
    this.setTint(0xff4444);
    this.setVelocityX(Phaser.Math.Between(-150, 150));
    this.setBounce(1);
    this.setCollideWorldBounds(true);
  }
}
