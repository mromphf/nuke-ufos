"use strict";

let interactions = (function() {
    function moveEverything(actors, maxWidth, maxHeight, keysPressed) {
        return actors.map(function(actor) {
            if (actor.isPlayer) {
                return actor.move(maxWidth, maxHeight, keysPressed);
            }
            else if (actor.hasRoomToMove(maxWidth, maxHeight)) {
                return actor.move();
            }
            else {
                return actor.die();
            }
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
        const player = gameObjects.actors.find(a => a.isPlayer);
        const numLasers = gameObjects.actors.filter(a => a.isLaser).length;
        if (numLasers < player.maxLasers) {
            gameObjects.actors.push(construct.laser(player.x, player.y - 50));
        }
    }

    function actorsThatDiedOnScreen(actor) {
        return !(actor.isAlive) && ((actor.y + actor.radius) < screen.HEIGHT);
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
            .filter(a => a.isEnemy)
            .filter(actorsThatDiedOnScreen)
            .reduce(function(acc, curr) {
                return acc + curr.value;
            }, 0) + currentScore;
    }

    return {
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        playerShoots: playerShoots,
        tallyScore: tallyScore,
        timeOfLastSpawn: timeOfLastSpawn,
    };
})();
