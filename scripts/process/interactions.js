"use strict";

var interactions = (function() {
    var gameOver = function() {
        location.reload();
    }

    function enemies(moveables) {
        return moveables.filter(m => m instanceof Ufo || m instanceof Kamikaze);
    }

    function lasers(moveables) {
        return moveables.filter(m => m instanceof Laser);
    }

    var moveEverything = function(moveables, maxWidth, maxHeight) {
        return moveables.map(function(moveable) {
            if (moveable.hasRoomToMove(maxWidth, maxHeight)) {
                return moveable.move();
            }
            else {
                return moveable.die();
            }
        });
    }

    var detectCollisions = function(gameObjects) {
        enemies(gameObjects.moveables).forEach(function(enemy) {
            if (collision.hasOccuredBetween(enemy, gameObjects.player)) {
                gameOver();
            }

            lasers(gameObjects.moveables).forEach(function(laser) {
                if (collision.hasOccuredBetween(enemy, laser)) {
                    enemy.die();
                    laser.die();
                    gameObjects.score = gameObjects.score + 10;
                    screen.updateScore(gameObjects.score);
                }
            });
        });

        return gameObjects.moveables;
    }

    var playerShoots = function(gameObjects) {
        if (lasers(gameObjects.moveables).length < 3) {
            gameObjects.moveables.push(new Laser(gameObjects.player.x, gameObjects.player.y));
        }
    }

    return {
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        playerShoots: playerShoots
    };
})();
