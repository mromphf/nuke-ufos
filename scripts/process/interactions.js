"use strict";

let interactions = (function() {
    function enemies(actors) {
        return actors.filter(a => a.isEnemy);
    }

    function lasers(actors) {
        return actors.filter(a => a instanceof Laser);
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
            else if (actor instanceof Laser &&
                     enemies(actors).some(e => collision.hasOccuredBetween(actor, e))) {
                return actor.die();
            }
            else {
                return actor;
            }
        });
    }

    function playerShoots(gameObjects) {
        if (lasers(gameObjects.actors).length < config.MAX_LASERS) {
            gameObjects.actors.push(new Laser(gameObjects.player.x, gameObjects.player.y));
        }
    }

    function isGameOver(player, actors) {
        return enemies(actors)
            .map(e => collision.hasOccuredBetween(e, player))
            .some(c => c === true);
    }

    function tallyScore(actors) {
        return enemies(actors)
            .filter(a => !(a.isAlive) && (a.y + a.radius) < screen.HEIGHT)
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
