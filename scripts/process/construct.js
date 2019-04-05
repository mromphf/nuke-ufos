"use strict"

let construct = (function() {
    function star(x, y) {
        return {
            die: behave.die,
            draw: draw.star,
            hasRoomToMove: move.ifHasRoomToGoDown,
            isAlive: true,
            isEnemy: false,
            isStar: true,
            move: move.down,
            radius: 2,
            velocity: 2,
            x: x,
            y: y,
        }
    }

    function laser(x, y) {
        return {
            die: behave.die,
            draw: draw.laser,
            hasRoomToMove: move.ifHasRoomToGoUp,
            isAlive: true,
            isEnemy: false,
            isLaser: true,
            move: move.up,
            radius: 5,
            velocity: 10,
            x: x,
            y: y
        }
    }

    function kamikaze(x, y, spawnTime) {
        return {
            die: behave.die,
            draw: draw.kamikaze,
            hasRoomToMove: move.ifHasRoomToGoDown,
            isAlive: true,
            isEnemy: true,
            move: move.down,
            radius: 20,
            spawnTime: spawnTime,
            value: 30,
            velocity: 10,
            x: x,
            y: y
        }
    }

    function ufo(x, y, spawnTime) {
        return new Ufo(x, y, spawnTime);
    }

    return {
        star: star,
        laser: laser,
        kamikaze: kamikaze,
        ufo
    }
})();
