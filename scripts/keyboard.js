"use strict";

var keyboard = (function() {
    function registerListeners() {
        window.onkeydown = function(e) {
            var key = e.keyCode;

            // Left arrow (or 'h')
            if (key == 37 || key == 72) {
                game.player.moveLeft();
            }
            // Up arrow (or 'k')
            else if (key == 38 || key == 75) {
                game.player.moveUp();
            }
            // Right arrow (or 'l')
            else if (key == 39 || key == 76) {
                game.player.moveRight();
            }
            // Down arrow (or 'j')
            else if (key == 40 || key == 74) {
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
