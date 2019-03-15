"use strict";

var spawn = (function() {
    let MAX_WIDTH = window.innerWidth;
    let MAX_HEIGHT = window.innerHeight;

    function randomTop() {
        return Math.floor((Math.random() * MAX_WIDTH) + 1);
    }

    var ufo = function(gameObjects) {
        if (gameObjects.elapsedTime > 4000 && gameObjects.ufos.length < 3) {
            gameObjects.ufos.push(new Ufo(randomTop(MAX_WIDTH), 0));
        }
        return gameObjects;
    }

    return {
        ufo: ufo
    };
})();
