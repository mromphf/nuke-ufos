"use strict";

var spawn = (function() {
    function randomTop() {
        return Math.floor((Math.random() * screen.WIDTH) + 1);
    }

    function ufos(moveables) {
        return moveables.filter(m => m instanceof Ufo);
    }

    var randomEnemy = function(gameObjects) {
        if (gameObjects.elapsedTime > 3000
            && (gameObjects.elapsedTime - gameObjects.lastSpawnTime > 2000)
            && ufos(gameObjects.moveables).length < 3) {
                gameObjects.moveables.push(new Ufo(randomTop(screen.WIDTH), 0));
                gameObjects.lastSpawnTime = gameObjects.elapsedTime;
        }
        return gameObjects.moveables;
    }

    return {
        randomEnemy: randomEnemy
    };
})();
