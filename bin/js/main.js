define(["require", "exports", "jquery", './scenes-manager.class'], function (require, exports, $, ScenesManager) {
    $(document).ready(function () {
        //get reference of ScenesManager;
        var scenesManager = new ScenesManager();
        //create 
        scenesManager.create(300, 400);
        // //create a the game scene
        var game = scenesManager.createScene('game');
        // //add a bunny :) 
        var bunny = PIXI.Sprite.fromImage("50x50.gif");
        // // center the sprites anchor point
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;
        // // move the sprite t the center of the screen
        bunny.position.x = 50;
        bunny.position.y = 50;
        game.addChild(bunny);
        // //switch to 'game' Scene 
        scenesManager.goToScene('game');
        // //register update event         
        game.onUpdate(function () {
            bunny.rotation += 0.1;
        });
    });
});
