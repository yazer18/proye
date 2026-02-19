export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, null);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setDisplaySize(30, 30);
    this.setTint(0xffffff);
    this.setCollideWorldBounds(true);
    this.setBounce(0.1);
  }

  move(cursors) {
    if (cursors.left.isDown) {
      this.setVelocityX(-300);
    } else if (cursors.right.isDown) {
      this.setVelocityX(300);
    } else {
      this.setVelocityX(0);
    }

    if (cursors.up.isDown && this.body.touching.down) {
      this.setVelocityY(-500);
    }
  }
}
