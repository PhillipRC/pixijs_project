import * as PIXI from 'pixi.js';
import Player from "./Player";

export default class Game {

    renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    player: Player;
    stage: PIXI.Container;


    constructor(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {

        // save reference to renderer
        this.renderer = renderer;

        // create a stage
        this.stage = new PIXI.Container();

        // create a player
        this.player = new Player(0,0);
        this.stage.addChild(this.player.sprite);

    }

    loop() {

        // update the player
        this.player.animate(this.renderer);

        // render the stage
        this.renderer.render(this.stage);

    }

}