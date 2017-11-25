import * as PIXI from 'pixi.js';

export default class Player {

    sprite: PIXI.Sprite;
    x: number;
    y: number;
    vx: number;
    vy: number;

    constructor(x: number, y: number) {

        this.x = x;
        this.y = y;
        this.vx = 1;
        this.vy = 1;

        this.sprite = new PIXI.Sprite(
            PIXI.loader.resources["/pixijs_project/assets/circle.png"].texture
        );

    }

    animate(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {

        this.x += this.vx;
        this.y += this.vy;

        if (
            (this.x > (renderer.width - this.sprite.width)) ||
            (this.x < 0)
        ) {
            this.vx = -this.vx;
        }

        if (
            (this.y > (renderer.height - this.sprite.height)) ||
            (this.y < 0)
        ) {
            this.vy = -this.vy;
        }

        this.sprite.x = this.x;
        this.sprite.y = this.y;
    }

}