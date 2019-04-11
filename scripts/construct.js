"use strict";

let construct = (function() {
    function star(x, y) {
        return {
            draw: draw.circle,
            isStar: true,
            isWithinBounds: behave.withinBounds,
            move: move.down,
            primaryColor: randomStar.color(),
            radius: randomStar.size(),
            velocity: 2,
            x: x,
            y: y,
        }
    }

    function shield(x, y, spawnTime) {
        return Object.assign(speedBoost(x, y, spawnTime), {
            applyTo: behave.activateShield,
            primaryColor: "#ff0"
        });
    }

    function ammo(x, y, spawnTime) {
        return Object.assign(speedBoost(x, y, spawnTime), {
            applyTo: behave.increaseLasers,
            primaryColor: "#0f0"
        });
    }

    function speedBoost(x, y, spawnTime) {
        return {
            applyTo: behave.boostSpeed,
            collide: collision.powerUpCollides,
            die: behave.die,
            draw: draw.powerUp,
            isAlive: true,
            isPowerUp: true,
            isWithinBounds: behave.withinBounds,
            move: move.down,
            primaryColor: "#00f",
            radius: 6,
            spawnTime: spawnTime,
            velocity: 4,
            x: x,
            y: y
        };
    }

    function enemyLaser(x, y, spawnTime) {
        return Object.assign(laser(x, y), {
            collide: collision.laserCollides,
            hit: behave.die,
            isEnemy: true,
            move: move.down,
            primaryColor: "#f00",
            spawnTime: spawnTime,
            value: 0
        });
    }

    function laser(x, y) {
        return {
            collide: collision.laserCollides,
            die: behave.die,
            draw: draw.circle,
            isAlive: true,
            isEnemy: false,
            isLaser: true,
            isWithinBounds: behave.withinBounds,
            move: move.up,
            primaryColor: "#0f0",
            radius: 5,
            velocity: 10,
            x: x,
            y: y
        }
    }

    function exploder(x, y, spawnTime) {
        return Object.assign(ufo(x, y, spawnTime), {
            decay: behave.exploderDecay,
            draw: draw.exploder,
            hit: behave.exploderHit,
            radius: 20,
            halfLife: 300,
            primaryColor: "#f00"
        });
    }

    function dreadnought(x, y, spawnTime) {
        return Object.assign(ufo(x, y, spawnTime), {
            attack: behave.shoot,
            canAttack: true,
            health: 3,
            primaryColor: "#444",
            secondaryColor: "#c00",
            value: 40
        });
    }

    function stalker(x, y, spawnTime) {
        return Object.assign(ufo(x, y, spawnTime), {
            draw: draw.stalker,
            health: 2,
            move: move.towards,
            primaryColor: "#f00",
            radius: 20,
            secondaryColor: "#555",
            value: 40
        });
    }

    function ufo(x, y, spawnTime) {
        return {
            collide: collision.enemyCollides,
            die: behave.die,
            draw: draw.ufo,
            health: 1,
            hit: behave.hit,
            isAlive: true,
            isEnemy: true,
            isWithinBounds: behave.withinBounds,
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
            collide: collision.enemyCollides,
            die: behave.die,
            draw: draw.kamikaze,
            health: 1,
            hit: behave.hit,
            isAlive: true,
            isEnemy: true,
            isWithinBounds: behave.withinBounds,
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
            collide: collision.playerCollides,
            die: behave.die,
            draw: draw.player,
            health: 1,
            hit: behave.playerHit,
            isAlive: true,
            isPlayer: true,
            isWithinBounds: behave.withinBounds,
            maxLasers: config.STARTING_LASERS,
            move: move.player,
            radius: 40,
            velocity: 8,
            x: x,
            y: y
        };
    }

    return {
        ammo: ammo,
        dreadnought: dreadnought,
        enemyLaser: enemyLaser,
        exploder: exploder,
        kamikaze: kamikaze,
        laser: laser,
        player: player,
        shield: shield,
        speedBoost: speedBoost,
        stalker: stalker,
        star: star,
        ufo: ufo
    }
})();
