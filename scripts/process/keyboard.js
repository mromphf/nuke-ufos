"use strict";

let keyboard = (function() {
    let keysPressed = {};

    function registerStartListeners(startGame) {
        window.onkeydown = function(e) {
            // Enter key
            if (e.keyCode === 13) {
                startGame();
            }
        }
    }

    function registerGameListeners(gameObjects) {
        window.onkeydown = function(e) {
            keysPressed[e.keyCode || e.which] = true;
            // Space bar
            if (e.keyCode == 32) {
                interactions.playerShoots(gameObjects);
            }
        }

        window.onkeyup = function(e) {
            keysPressed[e.keyCode || e.which] = false;
        }
    }

    return {
        keysPressed: keysPressed,
        registerStartListeners: registerStartListeners,
        registerGameListeners: registerGameListeners
    }
})();
