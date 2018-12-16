"use strict";

var keyboard = (function() {
    function registerStartListeners(startGame) {
        window.onkeydown = function() {
            startGame();
        }
    }

    function registerGameListeners(gameObjects) {
        window.onkeydown = function(e) {
            game.keysPressed[e.keyCode || e.which] = true;
            // Space bar
            if (e.keyCode == 32) {
                game.playerShoots(gameObjects);
            }
        }

        window.onkeyup = function(e) {
            game.keysPressed[e.keyCode || e.which] = false;
        }
    }

    return {
        registerStartListeners: registerStartListeners,
        registerGameListeners: registerGameListeners
    }
})();
