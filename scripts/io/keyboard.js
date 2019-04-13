"use strict";

const key_code = {
    A: 65,
    ARROW_DOWN: 40,
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39,
    ARROW_UP: 38,
    BACKSPACE: 8,
    ENTER: 13,
    ESC: 27,
    L: 76,
    SPACEBAR: 32,
    Z: 90
};

let keyboard = (function() {
    let keysPressed = {};

    function registerGameOverListeners(onEsc, onSave, name, score) {
        window.onkeydown = function(e) {
            e.preventDefault();

            if (e.keyCode === key_code.ENTER) {
                onSave(name.toUpperCase(), score);
            }

            if (e.keyCode === key_code.ESC) {
                onEsc();
            }

            if (e.keyCode === key_code.BACKSPACE) {
                let n = name.slice(0, name.length - 1);
                screen.renderName(n.toUpperCase());
                registerGameOverListeners(onEsc, onSave, n, score);
            }

            if (e.keyCode >= key_code.A && e.keyCode <= key_code.Z && name.length < 4) {
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
            e.preventDefault();

            if (e.keyCode === key_code.ENTER) {
                startGame();
            }

            if (e.keyCode === key_code.L) {
                showLeaderboard();
            }
        }
    }

    function registerLeaderboardListeners(showStartScreen) {
        window.onkeydown = function(e) {
            e.preventDefault();

            if (e.keyCode === key_code.ESC) {
                showStartScreen();
            }
        }
    }

    function registerGameListeners(gameObjects) {
        window.onkeydown = function(e) {
            e.preventDefault();
            keysPressed[e.keyCode || e.which] = true;

            if (e.keyCode == key_code.SPACEBAR) {
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
