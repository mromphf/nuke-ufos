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

    function ammo(x, y, spawnTime) {
        return {
            applyTo: behave.increaseLasers,
            die: behave.die,
            draw: draw.ammo,
            hasRoomToMove: move.ifHasRoomToGoDown,
            isAlive: true,
            isPowerUp: true,
            move: move.down,
            radius: 6,
            spawnTime: spawnTime,
            velocity: 4,
            x: x,
            y: y
        }
    }

    function speedBoost(x, y, spawnTime) {
        return {
            applyTo: behave.boostSpeed,
            die: behave.die,
            draw: draw.speedBoost,
            hasRoomToMove: move.ifHasRoomToGoDown,
            isAlive: true,
            isPowerUp: true,
            move: move.down,
            radius: 6,
            spawnTime: spawnTime,
            velocity: 4,
            x: x,
            y: y
        };
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

    function ufo(x, y, spawnTime) {
        return {
            die: behave.die,
            draw: draw.ufo,
            hasRoomToMove: move.ifHasRoomToGoDown,
            health: 1,
            hit: behave.hit,
            isAlive: true,
            isEnemy: true,
            move: move.down,
            radius: 30,
            spawnTime: spawnTime,
            value: 10,
            velocity: 3,
            x: x,
            y: y
        }
    }

    function kamikaze(x, y, spawnTime) {
        return {
            die: behave.die,
            draw: draw.kamikaze,
            hasRoomToMove: move.ifHasRoomToGoDown,
            health: 1,
            hit: behave.hit,
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

    function player(x, y) {
        return {
            die: behave.die,
            draw: draw.player,
            health: 1,
            hit: behave.hit,
            maxLasers: config.STARTING_LASERS,
            move: move.player,
            isAlive: true,
            radius: 40,
            velocity: 8,
            x: x,
            y: y
        };
    }

    return {
        ammo: ammo,
        kamikaze: kamikaze,
        laser: laser,
        player: player,
        speedBoost: speedBoost,
        star: star,
        ufo: ufo
    }
})();
