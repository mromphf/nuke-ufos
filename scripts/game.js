"use strict";

var game = (function() {
    var gameOver = function() {
        location.reload();
    }

    function ufos(moveables) {
        return moveables.filter(m => m instanceof Ufo);
    }

    function lasers(moveables) {
        return moveables.filter(m => m instanceof Laser);
    }

    var moveEverything = function(moveables, maxWidth, maxHeight) {
        moveables.forEach(function(moveable) {
            if (moveable.hasRoomToMove(maxWidth, maxHeight)) {
                moveable.move();
            }
            else {
                moveable.die();
            }
        });

        return moveables;
    }

    var detectCollisions = function(gameObjects) {
        ufos(gameObjects.moveables).forEach(function(ufo) {
            if (collision.hasOccuredBetween(ufo, gameObjects.player)) {
                gameOver();
            }

            lasers(gameObjects.moveables).forEach(function(laser) {
                if (collision.hasOccuredBetween(ufo, laser)) {
                    ufo.die();
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
