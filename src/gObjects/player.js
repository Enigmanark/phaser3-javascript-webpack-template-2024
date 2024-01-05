import "phaser"

export default class Player {
    constructor(scene, key, x, y) {
        console.trace("Created player");
        this.sprite = scene.physics.add.sprite(x, y, key);
        this.sprite.setCollideWorldBounds(true);
    }

    getSprite() {
        return this.sprite
    }
}