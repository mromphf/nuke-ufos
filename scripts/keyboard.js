"use strict";

let keyboard = (function() {
    let keysPressed = {};

    function registerStartListeners(startGame, showLeaderboard) {
        window.onkeydown = function(e) {
            // Enter key
            if (e.keyCode === 13) {
                startGame();
            }

            // L key
            if (e.keyCode === 76) {
                showLeaderboard();
            }
        }
    }

    function registerLeaderboardListeners(showStartScreen) {
        window.onkeydown = function(e) {
            // L key
            if (e.keyCode === 27) {
                showStartScreen();
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
        registerGameListeners: registerGameListeners,
        registerLeaderboardListeners: registerLeaderboardListeners,
        registerStartListeners: registerStartListeners
    }
})();
