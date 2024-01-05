import "phaser";
import Player from "../gObjects/player";
import PlayerManager from "../managers/playerManager";

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super("PlayScene");
    }

    create ()
    {
        console.trace("Switched to PlayScene!");

        this.playerManager = new PlayerManager(this)
        this.playerManager.init()
        var theText = "Press w or d to move!";
        this.text = this.add.text(0, this.game.config.height - 100, theText, { fontSize: '32px', fill: '#000' });
    }

    update(time, delta) {
        this.playerManager.update(time, delta);
    }
}