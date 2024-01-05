import "phaser";

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        this.load.image("Sprite", "res/img/Sprite.png");
    }

    create ()
    {
        this.registry.set("playerVelocity", 200);
        console.log("Booted Boot Scene");
        this.scene.start("PlayScene");
    }
}