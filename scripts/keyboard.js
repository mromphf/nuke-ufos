"use strict";

var keyboard = (function() {
    function registerListeners() {
        window.onkeydown = function(e) {
            game.keysPressed[e.keyCode || e.which] = true;
            // Space bar
            if (e.keyCode == 32) {
                game.playerShoots();
            }
        }

        window.onkeyup = function(e) {
            game.keysPressed[e.keyCode || e.which] = false;
        }
    }

    return {
        registerListeners: registerListeners
    }
})();
