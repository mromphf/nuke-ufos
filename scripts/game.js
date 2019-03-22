"use strict";

var game = (function() {
    var gameOver = function() {
        location.reload();
    }

    function stars(moveables) {
        return moveables.filter(m => m instanceof Star);
    }

    function ufos(moveables) {
        return moveables.filter(m => m instanceof Ufo);
    }

    function lasers(moveables) {
        return moveables.filter(m => m instanceof Laser);
    }

    var replenishStars = function(moveables) {
        if (randomStar.isNeeded(stars(moveables))) {
            moveables.push(randomStar.somewhereAtTheTop());
        }
        return moveables;
    }

    var moveEverything = function(moveables, MAX_WIDTH, MAX_HEIGHT) {
        moveables.forEach(function(moveable) {
            if (moveable.hasRoomToMove(MAX_WIDTH, MAX_HEIGHT)) {
                moveable.move();
            }
            else {
                moveable.die();
            }
        });

        return moveables;
    }

    var movePlayer = function(player) {
        // Left arrow
        if (keyboard.keysPressed[37]) {
            player.moveLeft();
        }
        // Up arrow
        else if (keyboard.keysPressed[38]) {
            player.moveUp();
        }
        // Right arrow
        else if (keyboard.keysPressed[39]) {
            player.moveRight();
        }
        // Down arrow
        else if (keyboard.keysPressed[40]) {
            player.moveDown();
        }

        return player;
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
                    gameObjects.score = gameObjects.score + 100;
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
        movePlayer: movePlayer,
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        playerShoots: playerShoots,
        replenishStars: replenishStars
    };
})();
