"use strict";

var keyboard = (function() {
    function registerListeners() {
        window.onkeydown = function(e) {
            var key = e.keyCode;

            // Left arrow
            if (key == 37) {
                game.player.moveLeft();
            }
            // Up arrow
            else if (key == 38) {
                game.player.moveUp();
            }
            // Right arrow
            else if (key == 39) {
                game.player.moveRight();
            }
            // Down arrow
            else if (key == 40) {
                game.player.moveDown();
            }
            // Space bar
            else if (key == 32) {
                game.playerShoots();
            }
        }
    }

    return {
        registerListeners: registerListeners
    }
})();
