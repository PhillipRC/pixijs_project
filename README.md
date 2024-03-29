## About
A boiler plate Pixi project featuring:
* [TypeScript](http://www.typescriptlang.org/) ^2.4
  * Typed superset of JavaScript that compiles to plain JavaScript
* [PixiJS](http://www.pixijs.com/) ^4.5.6
  * 2D WebGL render
* [p2](https://github.com/schteppe/p2.js) ^0.7.1
  * Physics library

Build based on Webpack:
* [Webpack](https://webpack.js.org/) ^3.5
* CopyWebpackPlugin
  * Copy assets

Deployment based on a script:
* [deploy.sh](https://github.com/X1011/git-directory-deploy)

## Installation
Installed NodeJS: https://nodejs.org/en/

Either:
* clone this repository: `git clone git@github.com:PhillipRC/test_pixi.git`
* download a zip: https://github.com/PhillipRC/test_pixi/archive/master.zip

Install dependencies: `npm install`

## Run Locally
Start the development server: `npm start`

## Deployment
Build: `npm run build`

Deploy: `deploy.sh dist gh-pages PhillipRC git@github.com:PhillipRC/pixijs_project.git`

[PIXIJ_PROJECT](https://philliprc.github.io/pixijs_project/)

![Screen Shot](./index.png)

