"use strict";

let interactions = (function() {
    function enemies(actors) {
        return actors.filter(a => a.isEnemy);
    }

    function lasers(actors) {
        return actors.filter(a => a.isLaser);
    }

    function powerUps(actors) {
        return actors.filter(a => a.isPowerUp);
    }

    function player(actors) {
        return actors.find(a => a.isPlayer);
    }

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
            if (actor.isEnemy && lasers(actors).some(l => collision.hasOccuredBetween(actor, l))) {
                return actor.hit();
            }
            else if (actor.isPlayer && actor.isAlive && enemies(actors).some(e => collision.hasOccuredBetween(actor, e))) {
                return actor.hit();
            }
            else if (actor.isEnemy && collision.hasOccuredBetween(actor, player(actors))) {
                return actor.die();
            }
            else if (actor.isLaser && enemies(actors).some(e => collision.hasOccuredBetween(actor, e))) {
                return actor.die();
            }
            else if (actor.isPowerUp && actor.isAlive && collision.hasOccuredBetween(actor, player(actors))) {
                return actor.die();
            }
            else {
                return actor;
            }
        });
    }

    function applyPowerUps(actors) {
        return actors.map(function(actor) {
            if (actor.isPlayer && powerUps(actors).filter(actorsThatDiedOnScreen).length > 0) {
                return actors
                    .find(a => a.isPowerUp)
                    .applyTo(actor);
            }
            else {
                return actor;
            }
        });
    }

    function playerShoots(gameObjects) {
        if (lasers(gameObjects.actors).length < player(gameObjects.actors).maxLasers) {
            gameObjects.actors.push(construct.laser(player(gameObjects.actors).x, player(gameObjects.actors).y - 50));
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
        return enemies(actors)
            .filter(actorsThatDiedOnScreen)
            .reduce(function(acc, curr) {
                return acc + curr.value;
            }, 0) + currentScore;
    }

    return {
        applyPowerUps: applyPowerUps,
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        playerShoots: playerShoots,
        tallyScore: tallyScore,
        timeOfLastSpawn: timeOfLastSpawn,
    };
})();
