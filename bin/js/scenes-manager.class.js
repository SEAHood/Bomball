define(["require", "exports", "./scene.class"], function (require, exports, Scene) {
    var ScenesManager = (function () {
        function ScenesManager() {
            this.scenes = {}; // should be hashmap but a JS object is fine too :)
        }
        ScenesManager.prototype.create = function (width, height) {
            console.log("IN CREATE");
            if (this.renderer)
                return this;
            this.renderer = PIXI.autoDetectRenderer(width, height);
            document.body.appendChild(this.renderer.view);
            //PIXI.requestAnimFrame(this.loop);
            return this;
        };
        ScenesManager.prototype.loop = function () {
            //PIXI.requestAnimFrame(function () { this.loop() });
            if (!this.currentScene || this.currentScene.isPaused())
                return;
            this.currentScene.update();
            this.renderer.render(this.currentScene);
        };
        ScenesManager.prototype.createScene = function (id) {
            if (this.scenes[id])
                return undefined;
            var scene = new Scene(0x000000);
            this.scenes[id] = scene;
            return scene;
        };
        ScenesManager.prototype.goToScene = function (id) {
            if (this.scenes[id]) {
                if (this.currentScene)
                    this.currentScene.pause();
                this.currentScene = this.scenes[id];
                this.currentScene.resume();
                return true;
            }
            return false;
        };
        return ScenesManager;
    })();
    return ScenesManager;
});
