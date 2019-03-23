"use strict";

let spawn = (function() {
    function randomTop() {
        return Math.floor((Math.random() * screen.WIDTH) + 1);
    }

    function generateRandomEnemy() {
        if (Math.random() > 0.5) {
            return new Kamikaze(randomTop(screen.WIDTH), 0);
        }
        else {
            return new Ufo(randomTop(screen.WIDTH), 0);
        }
    }

    function ufos(actors) {
        return actors.filter(a => a instanceof Ufo);
    }

    let randomEnemy = function(gameObjects) {
        if (gameObjects.elapsedTime > 3000
            && (gameObjects.elapsedTime - gameObjects.lastSpawnTime > 2000)
            && ufos(gameObjects.actors).length < 3) {
                gameObjects.actors.push(generateRandomEnemy());
                gameObjects.lastSpawnTime = gameObjects.elapsedTime;
        }
        return gameObjects.actors;
    }

    return {
        randomEnemy: randomEnemy
    };
})();
