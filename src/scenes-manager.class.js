define(["require", "exports"], function (require, exports) {
    var ScenesManager = (function () {
        function ScenesManager() {
            this.scenes = {}; // should be hashmap but a JS object is fine too :)
        }
        ScenesManager.prototype.create = function (width, height) {
            if (this.renderer)
                return this;
            this.renderer = PIXI.autoDetectRenderer(width, height);
            document.body.appendChild(this.renderer.view);
            requestAnimFrame(this.loop);
            return this;
        };
        ScenesManager.prototype.loop = function () {
            requestAnimFrame(function () { this.loop(); });
            if (!this.currentScene || this.currentScene.isPaused())
                return;
            this.currentScene.update();
            this.renderer.render(this.currentScene);
        };
        ScenesManager.prototype.createScene = function (id) {
            if (this.scenes[id])
                return undefined;
            var scene = new Scene(0);
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
