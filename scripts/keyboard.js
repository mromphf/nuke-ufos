"use strict";

let keyboard = (function() {
    let keysPressed = {};

    function registerGameOverListeners(onEsc, onSave, name, score) {
        window.onkeydown = function(e) {
            // Enter key
            if (e.keyCode === 13) {
                onSave(name.toUpperCase(), score);
            }

            // ESC key
            if (e.keyCode === 27) {
                onEsc();
            }

            if (e.keyCode === 8) {
                let n = name.slice(0, name.length - 1);
                screen.renderName(n.toUpperCase());
                registerGameOverListeners(onEsc, onSave, n, score);
            }

            if (e.keyCode >= 64 && e.keyCode <= 90 && name.length < 4) {
                let n = name;
                if (name.length < 4) {
                    n = name + e.key;
                }
                screen.renderName(n.toUpperCase());
                registerGameOverListeners(onEsc, onSave, n, score);
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
