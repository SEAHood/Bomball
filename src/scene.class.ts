///<reference path="../typings/pixi/pixi.d.ts"/>
class Scene extends PIXI.Stage {
	private paused: boolean = false;
	private updateCB = function () { };

	constructor(background: number) {
		super(background);
	}
	public onUpdate(updateCB: () => void ) {
		this.updateCB = updateCB;
	}

	public update() {
		this.updateCB();
	}
	public pause() {
		this.paused = true;
	}
	public resume() {
		this.paused = false;
	}
	public isPaused() {
		return this.paused;
	}
}

export = Scene;