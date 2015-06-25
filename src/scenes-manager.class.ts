///<reference path="../typings/pixi/pixi.d.ts"/>
import Scene = require("./scene.class");
class ScenesManager {
	scenes: any = {}; // should be hashmap but a JS object is fine too :)
	currentScene: Scene;
	renderer: any;
	
	constructor() {}

	create(width: number, height: number) {
	console.log("IN CREATE");
		if (this.renderer) return this;

		this.renderer = PIXI.autoDetectRenderer(width, height);
		document.body.appendChild(this.renderer.view);
		//PIXI.requestAnimFrame(this.loop);
		return this;
	}
	loop() {
		//PIXI.requestAnimFrame(function () { this.loop() });

		if (!this.currentScene || this.currentScene.isPaused()) return;
		this.currentScene.update();
		this.renderer.render(this.currentScene);
	}
	 
	createScene(id: string) {
		if (this.scenes[id]) return undefined;

		var scene = new Scene(0x000000);
		this.scenes[id] = scene;

		return scene;
	}

	goToScene(id: string) {

		if (this.scenes[id]) {
			if (this.currentScene) this.currentScene.pause();
			this.currentScene = this.scenes[id];
			this.currentScene.resume();
			return true;
		}
		return false;
	}
	
 }

 export = ScenesManager;