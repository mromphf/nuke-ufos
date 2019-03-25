"use strict";

let interactions = (function() {
    function enemies(actors) {
        return actors.filter(a => a instanceof Ufo || a instanceof Kamikaze);
    }

    function lasers(actors) {
        return actors.filter(a => a instanceof Laser);
    }

    let moveEverything = function(actors, maxWidth, maxHeight) {
        return actors.map(function(actor) {
            if (actor.hasRoomToMove(maxWidth, maxHeight)) {
                return actor.move();
            }
            else {
                return actor.die();
            }
        });
    }

    let detectCollisions = function(gameObjects) {
        enemies(gameObjects.actors).forEach(function(enemy) {
            lasers(gameObjects.actors).forEach(function(laser) {
                if (collision.hasOccuredBetween(enemy, laser)) {
                    enemy.die();
                    laser.die();
                    gameObjects.score = gameObjects.score + 10;
                }
            });
        });

        return gameObjects.actors;
    }

    let playerShoots = function(gameObjects) {
        if (lasers(gameObjects.actors).length < 3) {
            gameObjects.actors.push(new Laser(gameObjects.player.x, gameObjects.player.y));
        }
    }

    function isGameOver(gameObjects) {
        let collisions = enemies(gameObjects.actors).map(function(enemy) {
            return collision.hasOccuredBetween(enemy, gameObjects.player);
        });

        return collisions.some(c => c === true);
    }

    return {
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        playerShoots: playerShoots,
        isGameOver: isGameOver
    };
})();
