import * as PIXI from 'pixi.js';
import Game from './Game';

document.addEventListener('DOMContentLoaded', () => {

    var pixiView = <HTMLCanvasElement> document.getElementById('pixiCanvas');
    var pixelViewEle = <HTMLElement> document.getElementById('pixiCanvas');

    let renderer = PIXI.autoDetectRenderer(
        {
            width: 256,
            height: 256,
            view: pixiView,
            antialias: true,
            transparent: false,
            resolution: 1,
            backgroundColor: 0x0000ff
        }
    );

    // set size
    renderer.autoResize = true;
    renderer.resize(
        window.innerWidth,
        pixelViewEle.offsetHeight
    );

    // handle window resize
    window.addEventListener('resize', () => {
        renderer.resize(window.innerWidth, pixelViewEle.offsetHeight);
    });

    PIXI.loader
        .add("/pixijs_project/assets/circle.png")
        .load(setup);

    // game object
    let game: Game;

    function setup() {

        // create game
        game = new Game(renderer);
        gameLoop();
    }

    function gameLoop() {

        window.requestAnimationFrame(gameLoop);

        // call game loop
        game.loop();

    }

}, false);
