"use strict";

let spawn = (function() {
    function randomTop() {
        return Math.floor((Math.random() * screen.WIDTH) + 1);
    }

    function generateRandomEnemy(elapsedTime) {
        if (Math.random() > 0.5) {
            return new Kamikaze(randomTop(screen.WIDTH), 0, elapsedTime);
        }
        else {
            return new Ufo(randomTop(screen.WIDTH), 0, elapsedTime);
        }
    }

    function lastSpawnTime(enemies) {
        if (enemies.length === 0) {
            return 0;
        }

        return enemies.sort(function(a, b) {
            return b.spawnTime - a.spawnTime;
        })[0].spawnTime;
    }

    function randomEnemy(actors, elapsedTime) {
        if (elapsedTime > 3000
            && (elapsedTime - lastSpawnTime(actors.filter(a => a.isEnemy)) > 2000)
            && actors.filter(a => a.isEnemy).length < 3) {
                actors.push(generateRandomEnemy(elapsedTime));
        }
        return actors;
    }

    return {
        randomEnemy: randomEnemy
    };
})();
