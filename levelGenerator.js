export function generatePlatforms(scene) {
  const platforms = scene.physics.add.staticGroup();

  // Ground
  platforms.create(400, 590, null)
    .setDisplaySize(800, 20)
    .setTint(0x333333)
    .refreshBody();

  // Random platforms
  for (let i = 0; i < 10; i++) {
    let x = Phaser.Math.Between(100, 700);
    let y = Phaser.Math.Between(100, 500);

    platforms.create(x, y, null)
      .setDisplaySize(120, 20)
      .setTint(0x444444)
      .refreshBody();
  }

  return platforms;
}
