"use strict";

var spawn = (function() {
    function randomTop() {
        return Math.floor((Math.random() * screen.WIDTH) + 1);
    }

    function ufos(moveables) {
        return moveables.filter(m => m instanceof Ufo);
    }

    var ufo = function(gameObjects) {
        if (gameObjects.elapsedTime > 4000 && ufos(gameObjects.moveables).length < 1) {
            gameObjects.moveables.push(new Ufo(randomTop(screen.WIDTH), 0));
        }
        return gameObjects.moveables;
    }

    return {
        ufo: ufo
    };
})();
