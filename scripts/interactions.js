"use strict";

let interactions = (function() {
    function moveEverything(actors, maxWidth, maxHeight, keysPressed) {
        return actors.map(function(actor) {
            if (actor.isPlayer) {
                return actor.move(maxWidth, maxHeight, keysPressed);
            }
            return actor.move(actors.find(a => a.isPlayer));
        });
    }

    function detectCollisions(actors) {
        return actors.map(function(actor) {
            let result = actor;
            actors.forEach(function(target) {
                if (actor !== target && collision.hasOccuredBetween(actor, target)) {
                    result = actor.collide(target);
                }
            });
            return result;
        });
    }

    function playerShoots(gameObjects) {
        const player = gameObjects.actors.find(
            a => a.isPlayer);
        const numLasers = gameObjects.actors.filter(
            a => a.isLaser && !a.isEnemy).length;
        if (numLasers < player.maxLasers) {
            gameObjects.actors.push(construct.laser(player.x, player.y - 50));
        }
    }

    function timeOfLastSpawn(actors, timeOfLastSpawn) {
        if (actors.length === 0) {
            return timeOfLastSpawn;
        }

        return actors
            .map(e => e.spawnTime)
            .sort((a, b) => a - b)
            .pop();
    }

    function tallyScore(currentScore, actors) {
        return actors
            .filter(a => a.isEnemy && !a.isAlive)
            .reduce(function(acc, curr) {
                return acc + curr.value;
            }, 0) + currentScore;
    }

    function triggerAttacks(actors, elapsedTime, timeOfLastSpawn) {
        actors.filter(a => a.canAttack).forEach(function(actor) {
            actor.attack(actors, elapsedTime, timeOfLastSpawn);
        });
        return actors;
    }

    return {
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        playerShoots: playerShoots,
        tallyScore: tallyScore,
        timeOfLastSpawn: timeOfLastSpawn,
        triggerAttacks: triggerAttacks
    };
})();
