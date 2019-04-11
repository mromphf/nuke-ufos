"use strict";

let spawn = (function() {
    function randomTop() {
        return Math.floor((Math.random() * screen.WIDTH) + 1);
    }

    function delayBetweenSpawns(elapsedTime) {
        if (elapsedTime < 15000) {
            return 4000;
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
        if (elapsedTime < 20000) {
            return [
                construct.ufo
            ]
        }
        else if (elapsedTime < 40000) {
            return [
                construct.kamikaze,
                construct.ufo
            ];
        }
        return [
            construct.stalker,
            construct.dreadnought,
            construct.kamikaze,
            construct.ufo
        ];
    }

    function powerUpPool() {
        return [
            construct.ammo,
            construct.shield,
            construct.speedBoost
        ];
    }

    function generateRandomActor(elapsedTime, actorPool) {
        let selectedType = arr.randomElement(actorPool);
        return selectedType(randomTop(screen.WIDTH), 0, elapsedTime);
    }

    function randomEnemy(actors, elapsedTime, timeOfLastEnemy) {
        if (elapsedTime > 3000 &&
            elapsedTime - timeOfLastEnemy > delayBetweenSpawns(elapsedTime) &&
            actors.filter(a => a.isEnemy).length < maximumEnemies(elapsedTime)) {
                return arr.push(actors,
                         generateRandomActor(elapsedTime, enemyPool(elapsedTime))
                );
        }
        else {
            return actors;
        }
    }

    function randomPowerUp(actors, elapsedTime, timeOfLastPowerUp) {
        if (elapsedTime > config.TIME_TO_FIRST_POWER_UP &&
            elapsedTime - timeOfLastPowerUp > config.TIME_BETWEEN_POWER_UPS &&
            actors.filter(a => a.isPowerUp).length < 1) {
                return arr.push(
                    actors,
                    generateRandomActor(elapsedTime, powerUpPool(elapsedTime))
                );
        }
        else {
            return actors;
        }
    }

    return {
        randomEnemy: randomEnemy,
        randomPowerUp: randomPowerUp
    };
})();
