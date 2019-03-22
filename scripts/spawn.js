"use strict";

var spawn = (function() {
    let MAX_WIDTH = window.innerWidth;
    let MAX_HEIGHT = window.innerHeight;

    function randomTop() {
        return Math.floor((Math.random() * MAX_WIDTH) + 1);
    }

    function ufos(moveables) {
        return moveables.filter(m => m instanceof Ufo);
    }

    var ufo = function(gameObjects) {
        if (gameObjects.elapsedTime > 4000 && ufos(gameObjects.moveables).length < 1) {
            gameObjects.moveables.push(new Ufo(randomTop(MAX_WIDTH), 0));
        }
        return gameObjects.moveables;
    }

    return {
        ufo: ufo
    };
})();
