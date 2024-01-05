import "phaser";
import Player from "../gObjects/player";

export default class PlayerManager {
    constructor(scene) {
        this.player = new Player(scene, "Sprite", 0, 0);
        this.scene = scene;
    }

    init(){
        console.trace("Initialized Player Manager");
        //Setup keyboard
        this.keyA = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keySpace = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);    
    }
    
    update(time, delta) {
        this.processInput(time, delta);
    }

    processInput(time, delta) {
        var velocity = this.scene.registry.get("playerVelocity");

        //Horizontal movement
        if(this.keyA.isDown) {
            this.player.getSprite().body.velocity.x = -velocity;
        }
        else if(this.keyD.isDown) {
            this.player.getSprite().body.velocity.x = velocity;
        }
        else {
            this.player.getSprite().body.velocity.x = 0;
        }
    }
}