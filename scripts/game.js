"use strict";

var game = (function() {
    const MAX_WIDTH = window.innerWidth;
    const MAX_HEIGHT = window.innerHeight;
    const MAX_STARS = 30;
    var ply = new Player(MAX_WIDTH, MAX_HEIGHT);
    var gameObjects = {
        ufos: [],
        lasers: [],
        stars: randomStarsAnywhere()
    };
    var elapsedTime = 0;
    var keysPressed = {};
    var score = 0;

    function randomStarsAnywhere() {
        var result = [];
        for (var i = 0; i < MAX_STARS; i++) {
            result.push(randomStar.anywhere());
        }
        return result;
    }

    var randomTop = function() {
        return Math.floor((Math.random() * MAX_WIDTH) + 1);
    }

    var allMoveables = function() {
        return gameObjects.stars.concat(gameObjects.lasers).concat(gameObjects.ufos);
    }

    var gameOver = function() {
        location.reload();
    }

    var objectsStillAlive = function(o) {
        return o.isAlive;
    }

    var removeDeadObjects = function() {
        gameObjects.stars = gameObjects.stars.filter(objectsStillAlive);
        gameObjects.lasers = gameObjects.lasers.filter(objectsStillAlive);
        gameObjects.ufos = gameObjects.ufos.filter(objectsStillAlive);
    }

    var spawnNewThings = function() {
        if (elapsedTime > 4000 && gameObjects.ufos.length < 1) {
            gameObjects.ufos.push(new Ufo(randomTop(), 0));
        }

        if (gameObjects.stars.length < MAX_STARS) {
            gameObjects.stars.push(randomStar.somewhereAtTheTop());
        }
    }

    var moveEverything = function() {
        movePlayer();

        allMoveables().forEach(function(moveable) {
            if (moveable.hasRoomToMove(MAX_WIDTH, MAX_HEIGHT)) {
                moveable.move();
            }
            else {
                moveable.die();
            }
        });
    }

    var movePlayer = function() {
        // Left arrow
        if (keysPressed[37]) {
            ply.moveLeft();
        }
        // Up arrow
        else if (keysPressed[38]) {
            ply.moveUp();
        }
        // Right arrow
        else if (keysPressed[39]) {
            ply.moveRight();
        }
        // Down arrow
        else if (keysPressed[40]) {
            ply.moveDown();
        }
    }

    var detectCollisions = function() {
        gameObjects.ufos.forEach(function(ufo) {
            if (collision.hasOccuredBetween(ufo, ply)) {
                gameOver();
            }

            gameObjects.lasers.forEach(function(laser) {
                if (collision.hasOccuredBetween(ufo, laser)) {
                    ufo.die();
                    laser.die();
                    score = score + 100;
                    screen.updateScore(score);
                }
            });
        });
    }

    var playerShoots = function() {
        if (gameObjects.lasers.length < 3) {
            gameObjects.lasers.push(new Laser(ply.x, ply.y));
        }
    }

    var drawables = function() {
        return allMoveables().concat(ply).filter(function(x) {
            return x.isAlive;
        });
    }

    var addMillisecondsToTimer = function(milliseconds) {
        elapsedTime = elapsedTime + milliseconds;
    }

    return {
        spawnNewThings: spawnNewThings,
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        removeDeadObjects: removeDeadObjects,
        player: ply,
        drawables: drawables,
        playerShoots: playerShoots,
        addMillisecondsToTimer: addMillisecondsToTimer,
        keysPressed: keysPressed,
        score: score
    };
})();
