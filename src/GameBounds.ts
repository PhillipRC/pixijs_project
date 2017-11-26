import * as PIXI from 'pixi.js';
import * as p2 from "p2";

export default class GameBounds {

    pBottom: p2.Body;
    pTop: p2.Body;
    pRight: p2.Body;
    pLeft: p2.Body;

    constructor() {

        this.pBottom = new p2.Body();

        this.pBottom.addShape(
            new p2.Plane()
        );

        this.pTop = new p2.Body({
            angle: Math.PI
        });

        this.pTop.addShape(
            new p2.Plane()
        );

        this.pRight = new p2.Body({
            angle: Math.PI / 2
        });

        this.pRight.addShape(new p2.Plane());

        this.pLeft = new p2.Body({
            angle: (3 * Math.PI) / 2
        });

        this.pLeft.addShape(new p2.Plane());

    }

    animate(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {

        // set bottom edge
        this.pBottom.position = [0, -renderer.height];

        // set right edge
        this.pRight.position = [renderer.width, 0];

    }

}