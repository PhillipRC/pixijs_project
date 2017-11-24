import * as PIXI from 'pixi.js';

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

    //Create a container object called the `stage`
    var stage = new PIXI.Container();

    //Tell the `renderer` to `render` the `stage`
    renderer.render(stage);

    // set size
    renderer.autoResize = true;
    renderer.resize(window.innerWidth, pixelViewEle.offsetHeight);

    PIXI.loader
        .add("/pixijs_project/assets/circle.png")
        .load(setup);

    var sprite: PIXI.Sprite;
    var speedX = 1;
    var speedY = 1;

    function setup() {

        sprite = new PIXI.Sprite(
            PIXI.loader.resources["/pixijs_project/assets/circle.png"].texture
        );

        sprite.x = (renderer.width - sprite.width) / 2;
        sprite.y = (renderer.height - sprite.height) / 2;
        stage.addChild(sprite);
        update();

    }

    /**
     * update stage
     */
    function update() {
        sprite.x += speedX;
        sprite.y += speedY;

        if (
            (sprite.x > (renderer.width - sprite.width)) ||
            (sprite.x < 0)
        ) {
            speedX = -speedX;
        }

        if (
            (sprite.y > (renderer.height - sprite.height)) ||
            (sprite.y < 0)
        ) {
            speedY = -speedY;
        }

        renderer.render(stage);

        setTimeout(update, 10);
    }

    window.addEventListener('resize', () => {
        sprite.x = sprite.y = 0;
        renderer.resize(window.innerWidth, pixelViewEle.offsetHeight);
    })

}, false);
