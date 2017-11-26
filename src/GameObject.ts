import * as PIXI from 'pixi.js';
import * as p2 from "p2";

export default class GameObject {

    pBody: p2.Body;
    pShape: p2.Shape;
    pCollider: PIXI.Container;
    pShowCollider: boolean;
    sprite: PIXI.Sprite;

    constructor(body: p2.Body, shape: p2.Shape) {

        this.pShowCollider = true;

        // physics
        this.pBody = body;
        this.pShape = shape;
        this.pBody.addShape(shape);

        // create a visual for the colliders
        if (this.pShowCollider) {

            let graphic = new PIXI.Graphics();

            if (this.pShape instanceof p2.Circle) {
                let circle = shape as p2.Circle;
                graphic.lineStyle(0);
                graphic.beginFill(0xFF0000, .3);
                graphic.drawCircle(0, 0, circle.radius);
                graphic.endFill();
            }

            if (this.pShape instanceof p2.Plane) {
                let plane = shape as p2.Plane;
                graphic.lineStyle(0);
                graphic.beginFill(0xFF0000, .3);
                graphic.drawRect(0, 0, 1000, 1);
            }

            if (this.pShape instanceof p2.Box) {
                let box = shape as p2.Box;
                graphic.lineStyle(0);
                graphic.beginFill(0xFF0000, .3);
                graphic.drawRect(-(box.width/2), -(box.height/2), box.width, box.height);
            }

            this.pCollider = new PIXI.Container();
            this.pCollider.addChild(graphic);

        }

    }

    animate(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {

        // update collider
        if (this.pCollider) {
            this.pCollider.x = this.pBody.interpolatedPosition[0];
            this.pCollider.y = -this.pBody.interpolatedPosition[1];
            this.pCollider.rotation = this.pBody.interpolatedAngle;
        }

        // update sprite
        if (this.sprite) {
            this.sprite.x = this.pBody.position[0];
            this.sprite.y = -this.pBody.position[1];
        }

    }

}