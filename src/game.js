import "phaser";
import BootScene from "./scenes/bootScene";
import PlayScene from "./scenes/playScene";

const config = {
    type: Phaser.AUTO,
    backgroundCOlor: "#f5cc69",
    width: 1024,
    height: 768,
    scene: [BootScene, PlayScene],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y:0},
            debug: false
        }
    },
    vsync: true,
};

const game = new Phaser.Game(config);