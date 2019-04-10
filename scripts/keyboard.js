"use strict";

let keyboard = (function() {
    let keysPressed = {};
    let name = "";

    function registerGameOverListeners(onEsc, onSave, score) {
        window.onkeydown = function(e) {
            // Enter key
            if (e.keyCode === 13) {
                onSave(name.toUpperCase(), score);
                name = "";
            }

            // ESC key
            if (e.keyCode === 27) {
                onEsc();
            }

            if (e.keyCode === 8) {
                name = name.slice(0, name.length - 1);
                screen.renderName(name.toUpperCase());
            }

            if (e.keyCode >= 64 && e.keyCode <= 90 && name.length < 5) {
                name = name + e.key;
                screen.renderName(name.toUpperCase());
            }
        }
    }

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
            // ESC key
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
        registerGameOverListeners: registerGameOverListeners,
        registerLeaderboardListeners: registerLeaderboardListeners,
        registerStartListeners: registerStartListeners
    }
})();
