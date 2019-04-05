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

    function playerShoots(gameObjects) {
        if (lasers(gameObjects.actors).length < config.MAX_LASERS) {
            gameObjects.actors.push(construct.laser(gameObjects.player.x, gameObjects.player.y));
        }
    }

    function isGameOver(player, actors) {
        return enemies(actors).some(enemy => collision.hasOccuredBetween(enemy, player));
    }

    function enemiesThatDiedOnScreen(enemy) {
        return !(enemy.isAlive) && ((enemy.y + enemy.radius) < screen.HEIGHT);
    }

    function tallyScore(actors) {
        return enemies(actors)
            .filter(enemiesThatDiedOnScreen)
            .reduce(function(acc, curr) {
                return acc + curr.value;
            }, 0);
    }

    return {
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        playerShoots: playerShoots,
        isGameOver: isGameOver,
        tallyScore: tallyScore
    };
})();