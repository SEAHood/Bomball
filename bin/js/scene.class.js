var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    ///<reference path="../typings/pixi/pixi.d.ts"/>
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene(background) {
            _super.call(this, background);
            this.paused = false;
            this.updateCB = function () { };
        }
        Scene.prototype.onUpdate = function (updateCB) {
            this.updateCB = updateCB;
        };
        Scene.prototype.update = function () {
            this.updateCB();
        };
        Scene.prototype.pause = function () {
            this.paused = true;
        };
        Scene.prototype.resume = function () {
            this.paused = false;
        };
        Scene.prototype.isPaused = function () {
            return this.paused;
        };
        return Scene;
    })(PIXI.Stage);
    return Scene;
});
