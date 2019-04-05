"use strict";

let spawn = (function() {
    function randomTop() {
        return Math.floor((Math.random() * screen.WIDTH) + 1);
    }

    function delayBetweenSpawns(elapsedTime) {
        if (elapsedTime < 15000) {
            return 2000;
        }
        else if (elapsedTime < 30000) {
            return 1500;
        }
        else if (elapsedTime < 30000) {
            return 1000;
        }
        else if (elapsedTime < 60000) {
            return 500;
        }
        return 100;
    }

    function maximumEnemies(elapsedTime) {
        if (elapsedTime < 10000) {
            return 1;
        }
        else if (elapsedTime < 20000) {
            return 3;
        }
        else if (elapsedTime < 30000) {
            return 4;
        }
        else if (elapsedTime < 60000) {
            return 5;
        }
        else if (elapsedTime < 120000) {
            return 7;
        }
        return 10;
    }

    function enemyPool(elapsedTime) {
        if (elapsedTime < 10000) {
            return [
                construct.ufo
            ]
        }
        return [
            construct.ufo,
            construct.kamikaze
        ];
    }

    function generateRandomEnemy(elapsedTime) {
        let types = enemyPool(elapsedTime);
        let selectedType = enemyPool(elapsedTime)[(Math.floor((Math.random() * types.length)) + 1) - 1];
        return selectedType(randomTop(screen.WIDTH), 0, elapsedTime);
    }

    function lastSpawnTime(enemies) {
        if (enemies.length === 0) {
            return 0;
        }

        let times = enemies.map(e => e.spawnTime);

        times.sort(function(a, b) {
            return a - b;
        })[times.length - 1];
    }

    function randomEnemy(actors, elapsedTime) {
        if (elapsedTime > 3000
            && (elapsedTime - lastSpawnTime(actors.filter(a => a.isEnemy)) > delayBetweenSpawns(elapsedTime))
            && actors.filter(a => a.isEnemy).length < maximumEnemies(elapsedTime)) {
                actors.push(generateRandomEnemy(elapsedTime));
        }
        return actors;
    }

    function randomPowerUp(actors, elapsedTime) {
        console.log(lastSpawnTime(actors.filter(a => a.isPowerUp)));
        if (elapsedTime > 2000
            && (elapsedTime - lastSpawnTime(actors.filter(a => a.isPowerUp)) > 5000)
            && actors.filter(a => a.isPowerUp).length < 1) {
                actors.push(construct.ammo(randomTop(screen.WIDTH), 0, elapsedTime));
        }
        return actors;
    }

    return {
        randomEnemy: randomEnemy,
        randomPowerUp: randomPowerUp
    };
})();
