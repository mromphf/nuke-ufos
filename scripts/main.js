"use strict";

var nukeUfos = (function() {
    function runGame() {
        setTimeout(function() {
            screen.render(game.drawables());
            game.spawnNewThings();
            game.moveEverything();
            game.detectCollisions();
            game.addMillisecondsToTimer(17);
            game.removeDeadObjects();
            runGame();
        }, 17);
    }

    keyboard.registerListeners();
    runGame();
})();
