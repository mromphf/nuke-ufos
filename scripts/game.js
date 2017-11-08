"use strict";

var game = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    var totalStars = 30;
    var moveables = randomStarsAnywhere();
    var ply = new Player(maxWidth, maxHeight);
    var elapsedTime = 0;

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

    var gameOver = function() {
        location.reload();
    }

    var objectsOfType = function(type) {
        return moveables.filter(function(x) {
            return x.isTypeOf(type) && x.isAlive();
        });
    }

    var filterDeadObjects = function() {
        moveables = moveables.filter(function(moveable) {
            return moveable.isAlive();
        });
    }

    var moveEverything = function() {
        var existingMoveables = [];

        if ( elapsedTime > 4000 && objectsOfType("ufo").length < 1 ) {
            moveables.push(new Ufo(randomTop(), 0));
        }

        if (objectsOfType("star").length < totalStars) {
            moveables.push(randomStar.somewhereAtTheTop());
        }

        moveables.forEach(function(moveable) {
            if (moveable.hasRoomToMove(maxWidth, maxHeight)) {
                moveable.move();
                existingMoveables.push(moveable);
            }
        });
        moveables = existingMoveables;
    }

    var detectCollisions = function() {
        objectsOfType("ufo").forEach(function(ufo) {
            if (collision.hasOccuredBetween(ufo, ply)) {
                gameOver();
            }

            objectsOfType("laser").forEach(function(laser) {
                if (collision.hasOccuredBetween(ufo, laser)) {
                    ufo.die();
                    laser.die();
                }
            });
        });
    }

    var playerShoots = function() {
        if (objectsOfType("laser").length < 3) {
            moveables.push(new Laser(ply.x, ply.y));
        }
    }

    var drawables = function() {
        return moveables.concat([ply]).filter(function(x) {
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
        addMillisecondsToTimer: addMillisecondsToTimer
    };
})();
