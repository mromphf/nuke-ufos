"use strict";

var game = (function() {
    var allMoveables = function(gameObjects) {
        return gameObjects.stars.concat(gameObjects.lasers).concat(gameObjects.ufos);
    }

    var gameOver = function() {
        location.reload();
    }

    var objectsStillAlive = function(o) {
        return o.isAlive;
    }

    var removeDeadObjects = function(gameObjects) {
        gameObjects.stars = gameObjects.stars.filter(objectsStillAlive);
        gameObjects.lasers = gameObjects.lasers.filter(objectsStillAlive);
        gameObjects.ufos = gameObjects.ufos.filter(objectsStillAlive);
        return gameObjects;
    }

    var spawnEnemies = function(gameObjects) {
        return spawn.ufo(gameObjects);
    }

    var replenishStars = function(stars) {
        if (randomStar.isNeeded(stars)) {
            stars.push(randomStar.somewhereAtTheTop());
        }
        return stars;
    }

    var moveEverything = function(gameObjects, MAX_WIDTH, MAX_HEIGHT) {
        movePlayer(gameObjects.player);

        allMoveables(gameObjects).forEach(function(moveable) {
            if (moveable.hasRoomToMove(MAX_WIDTH, MAX_HEIGHT)) {
                moveable.move();
            }
            else {
                moveable.die();
            }
        });

        return gameObjects;
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
    }

    var detectCollisions = function(gameObjects) {
        gameObjects.ufos.forEach(function(ufo) {
            if (collision.hasOccuredBetween(ufo, gameObjects.player)) {
                gameOver();
            }

            gameObjects.lasers.forEach(function(laser) {
                if (collision.hasOccuredBetween(ufo, laser)) {
                    ufo.die();
                    laser.die();
                    gameObjects.score = gameObjects.score + 100;
                    screen.updateScore(gameObjects.score);
                }
            });
        });

        return gameObjects;
    }

    var playerShoots = function(gameObjects) {
        if (gameObjects.lasers.length < 3) {
            gameObjects.lasers.push(new Laser(gameObjects.player.x, gameObjects.player.y));
        }
    }

    var drawables = function(gameObjects) {
        return allMoveables(gameObjects).concat(gameObjects.player).filter(function(x) {
            return x.isAlive;
        });
    }

    return {
        spawnEnemies: spawnEnemies,
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        removeDeadObjects: removeDeadObjects,
        drawables: drawables,
        playerShoots: playerShoots,
        replenishStars: replenishStars
    };
})();
