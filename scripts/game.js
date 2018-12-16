"use strict";

var game = (function() {
    var keysPressed = {};

    function randomStarsAnywhere(MAX_STARS) {
        var result = [];
        for (var i = 0; i < MAX_STARS; i++) {
            result.push(randomStar.anywhere());
        }
        return result;
    }

    var randomTop = function(MAX_WIDTH) {
        return Math.floor((Math.random() * MAX_WIDTH) + 1);
    }

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
    }

    var spawnNewThings = function(gameObjects, MAX_STARS, MAX_WIDTH) {
        if (gameObjects.elapsedTime > 4000 && gameObjects.ufos.length < 1) {
            gameObjects.ufos.push(new Ufo(randomTop(MAX_WIDTH), 0));
        }

        if (gameObjects.stars.length < MAX_STARS) {
            gameObjects.stars.push(randomStar.somewhereAtTheTop());
        }
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
    }

    var movePlayer = function(player) {
        // Left arrow
        if (keysPressed[37]) {
            player.moveLeft();
        }
        // Up arrow
        else if (keysPressed[38]) {
            player.moveUp();
        }
        // Right arrow
        else if (keysPressed[39]) {
            player.moveRight();
        }
        // Down arrow
        else if (keysPressed[40]) {
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
        randomStarsAnywhere: randomStarsAnywhere,
        spawnNewThings: spawnNewThings,
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        removeDeadObjects: removeDeadObjects,
        drawables: drawables,
        playerShoots: playerShoots,
        keysPressed: keysPressed,
    };
})();
