import * as PIXI from 'pixi.js';
import * as p2 from "p2";
import GameObject from "./GameObject";


export default class Player extends GameObject {

    constructor(body: p2.Body, shape: p2.Shape) {

        super(body, shape);

        // image
        this.sprite = new PIXI.Sprite(
            PIXI.loader.resources["/pixijs_project/assets/circle.png"].texture
        );
        this.sprite.anchor.set(0.5);

    }

    animate(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {

        this.sprite.scale.set(.9 + Math.random()*.2);

    }
}