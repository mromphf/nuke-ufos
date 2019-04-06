"use strict";

let interactions = (function() {
    function enemies(actors) {
        return actors.filter(a => a.isEnemy);
    }

    function lasers(actors) {
        return actors.filter(a => a.isLaser);
    }

    function moveEverything(actors, maxWidth, maxHeight) {
        return actors.map(function(actor) {
            if (actor.hasRoomToMove(maxWidth, maxHeight)) {
                return actor.move();
            }
            else {
                return actor.die();
            }
        });
    }

    function detectCollisions(actors) {
        return actors.map(function(actor) {
            if (actor.isEnemy && lasers(actors).some(l => collision.hasOccuredBetween(actor, l))) {
                return actor.die();
            }
            else if (actor.isLaser && enemies(actors).some(e => collision.hasOccuredBetween(actor, e))) {
                return actor.die();
            }
            else {
                return actor;
            }
        });
    }

    function collectPowerups(player, actors) {
        return actors.map(function(actor) {
            if (actor.isPowerUp && actor.isAlive && collision.hasOccuredBetween(actor, player)) {
                return actor.die();
            }
            else {
                return actor;
            }
        });
    }

    function playerShoots(gameObjects) {
        if (lasers(gameObjects.actors).length < gameObjects.player.maxLasers) {
            gameObjects.actors.push(construct.laser(gameObjects.player.x, gameObjects.player.y));
        }
    }

    function playerCollidedWithSomething(player, actors) {
        return actors.some(actor => collision.hasOccuredBetween(actor, player));
    }

    function actorsThatDiedOnScreen(actor) {
        return !(actor.isAlive) && ((actor.y + actor.radius) < screen.HEIGHT);
    }

    function applyPowerUps(player, powerUps) {
        if (powerUps.filter(actorsThatDiedOnScreen).length > 0) {
            return powerUps.shift().applyTo(player);
        }
        else {
            return player;
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

    function tallyScore(actors) {
        return enemies(actors)
            .filter(actorsThatDiedOnScreen)
            .reduce(function(acc, curr) {
                return acc + curr.value;
            }, 0);
    }

    return {
        moveEverything: moveEverything,
        collectPowerups: collectPowerups,
        detectCollisions: detectCollisions,
        playerShoots: playerShoots,
        playerCollidedWithSomething: playerCollidedWithSomething,
        tallyScore: tallyScore,
        timeOfLastSpawn: timeOfLastSpawn,
        applyPowerUps: applyPowerUps
    };
})();
