import * as PIXI from 'pixi.js';
import * as p2 from "p2";
import GameObject from "./GameObject";
import GameBounds from "./GameBounds";

export default class Game {

    renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    stage: PIXI.Container;
    gameObjects: GameObject[];

    // physics
    pWorld: p2.World;
    pWorldStep: number;
    pWorldSubStep: number;
    pWorldLastTime: number;
    pGameBounds: GameBounds;

    constructor(renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer) {

        // save reference to renderer
        this.renderer = renderer;

        // create a stage
        this.stage = new PIXI.Container();

        // physics

        // Create a physics world
        this.pWorld = new p2.World(
            {
                gravity: [0, -9.82]
            }
        );

        // timing
        this.pWorldStep = (1 / 60);
        this.pWorldSubStep = 10;

        // init array of GameObjects
        this.gameObjects = [];

        // add rnd circles
        for ( let idx = 0; idx < 4; idx ++ ) {

            let rnd = Math.random();

            let pProperties = {
                position: [100 + (96 * idx), -48],
                mass: 5 - rnd*2
            };

            let go = new GameObject(
                new p2.Body(pProperties),
                new p2.Circle({radius: 32 - rnd*16})
            );

            this.gameObjects.push(go);
            this.stage.addChild(go.pCollider);
            this.pWorld.addBody(go.pBody);
        }

        // add rnd rectangles
        for ( let idx = 0; idx < 4  ; idx ++ ) {

            let rnd = Math.random();

            let pProperties = {
                position: [100 + (96 * idx), -120],
                mass: 5 - rnd*2,
                angularVelocity: .5 - rnd
            };
            let go = new GameObject(
                new p2.Body(pProperties),
                new p2.Box({width:96 - rnd*32, height:64 - rnd*32 })
            );

            this.gameObjects.push(go);
            this.stage.addChild(go.pCollider);
            this.pWorld.addBody(go.pBody);
        }

        // create bounds
        this.pGameBounds = new GameBounds();
        this.pWorld.addBody(this.pGameBounds.pBottom);
        this.pWorld.addBody(this.pGameBounds.pTop);
        this.pWorld.addBody(this.pGameBounds.pLeft);
        this.pWorld.addBody(this.pGameBounds.pRight);

    }

    loop() {

        let time = new Date().getTime();

        // physics - compute elapsed time since last render frame
        let deltaTime = this.pWorldLastTime ? (time - this.pWorldLastTime) / 1000 : 0;

        // physics - update GameBounds
        this.pGameBounds.animate(this.renderer);

        // physics - Move bodies forward in time
        this.pWorld.step(this.pWorldStep, deltaTime, this.pWorldSubStep);

        this.gameObjects.forEach( (element) => {
            element.animate(this.renderer);
        });

        // render the stage
        this.renderer.render(this.stage);

        this.pWorldLastTime = time;

    }

}