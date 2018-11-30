"use strict";

var game = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    var totalStars = 30;
    var ply = new Player(maxWidth, maxHeight);
    var moveables = {
        ufos: [],
        lasers: [],
        stars: randomStarsAnywhere()
    };
    var elapsedTime = 0;
    var keysPressed = {}

    function randomStarsAnywhere() {
        var result = [];
        for (var i = 0; i < totalStars; i++) {
            result.push(randomStar.anywhere());
        }
        return result;
    }

    var randomTop = function() {
        return Math.floor((Math.random() * maxWidth) + 1);
    }

    var allMoveables = function() {
        return moveables.stars.concat(moveables.lasers).concat(moveables.ufos);
    }

    var gameOver = function() {
        location.reload();
    }

    var objectsStillAlive = function(moveable) {
        return moveable.isAlive();
    }

    var filterDeadObjects = function() {
        moveables.stars = moveables.stars.filter(objectsStillAlive);
        moveables.lasers = moveables.lasers.filter(objectsStillAlive);
        moveables.ufos = moveables.ufos.filter(objectsStillAlive);
    }

    var moveEverything = function() {
        movePlayer();

        if (elapsedTime > 4000 && moveables.ufos.length < 1) {
            moveables.ufos.push(new Ufo(randomTop(), 0));
        }

        if (moveables.stars.length < totalStars) {
            moveables.stars.push(randomStar.somewhereAtTheTop());
        }

        allMoveables().forEach(function(moveable) {
            if (moveable.hasRoomToMove(maxWidth, maxHeight)) {
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
        moveables.ufos.forEach(function(ufo) {
            if (collision.hasOccuredBetween(ufo, ply)) {
                gameOver();
            }

            moveables.lasers.forEach(function(laser) {
                if (collision.hasOccuredBetween(ufo, laser)) {
                    ufo.die();
                    laser.die();
                    score.increase(100);
                }
            });
        });
    }

    var playerShoots = function() {
        if (moveables.lasers.length < 3) {
            moveables.lasers.push(new Laser(ply.x, ply.y));
        }
    }

    var drawables = function() {
        return allMoveables().concat(ply).filter(function(x) {
            return x.isAlive();
        });
    }

    var addMillisecondsToTimer = function(milliseconds) {
        elapsedTime = elapsedTime + milliseconds;
    }

    return {
        moveEverything: moveEverything,
        detectCollisions: detectCollisions,
        filterDeadObjects: filterDeadObjects,
        player: ply,
        drawables: drawables,
        playerShoots: playerShoots,
        addMillisecondsToTimer: addMillisecondsToTimer,
        keysPressed: keysPressed
    };
})();
