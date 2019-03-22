"use strict";

var spawn = (function() {
    function randomTop() {
        return Math.floor((Math.random() * screen.WIDTH) + 1);
    }

    function generateRandomEnemy() {
        let die = Math.random();
        if (die > 0.5) {
            return new Kamikaze(randomTop(screen.WIDTH), 0);
        }
        else {
            return new Ufo(randomTop(screen.WIDTH), 0);
        }
    }

    function ufos(moveables) {
        return moveables.filter(m => m instanceof Ufo);
    }

    var randomEnemy = function(gameObjects) {
        if (gameObjects.elapsedTime > 3000
            && (gameObjects.elapsedTime - gameObjects.lastSpawnTime > 2000)
            && ufos(gameObjects.moveables).length < 3) {
                gameObjects.moveables.push(generateRandomEnemy());
                gameObjects.lastSpawnTime = gameObjects.elapsedTime;
        }
        return gameObjects.moveables;
    }

    return {
        randomEnemy: randomEnemy
    };
})();
