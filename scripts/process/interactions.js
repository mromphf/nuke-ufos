"use strict";

let interactions = (function() {
    function enemies(actors) {
        return actors.filter(a => a instanceof Ufo || a instanceof Kamikaze);
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

    function detectCollisions(gameObjects) {
        return gameObjects.actors.map(function(actor) {
            if ((actor instanceof Ufo || actor instanceof Kamikaze) &&
                    lasers(gameObjects.actors).some(l => collision.hasOccuredBetween(actor, l))) {
                return actor.die();
            }
            else if (actor instanceof Laser &&
                        enemies(gameObjects.actors).some(e => collision.hasOccuredBetween(actor, e))) {
                return actor.die();
            }
            else {
                return actor;
            }
        });
    }

    function playerShoots(gameObjects) {
        if (lasers(gameObjects.actors).length < 3) {
            gameObjects.actors.push(new Laser(gameObjects.player.x, gameObjects.player.y));
        }
    }

    function isGameOver(gameObjects) {
        return enemies(gameObjects.actors)
            .map(e => collision.hasOccuredBetween(e, gameObjects.player))
            .some(c => c === true);
    }

    function tallyScore(actors) {
        return enemies(actors).filter(a => !(a.isAlive) && (a.y + a.radius) < screen.HEIGHT).length * 10;
    }

    return {
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        playerShoots: playerShoots,
        isGameOver: isGameOver,
        tallyScore: tallyScore
    };
})();
