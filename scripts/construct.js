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
            primaryColor: randomStar.color(),
            radius: randomStar.size(),
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

    function greaterUfo(x, y, spawnTime) {
        return Object.assign(ufo(x, y, spawnTime), {
            health: 3,
            primaryColor: "#444",
            secondaryColor: "#c00",
            value: 40
        });
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
            primaryColor: "#666",
            radius: 30,
            secondaryColor: "#333",
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
            isPlayer: true,
            radius: 40,
            velocity: 8,
            x: x,
            y: y
        };
    }

    return {
        ammo: ammo,
        kamikaze: kamikaze,
        greaterUfo: greaterUfo,
        laser: laser,
        player: player,
        speedBoost: speedBoost,
        star: star,
        ufo: ufo
    }
})();
