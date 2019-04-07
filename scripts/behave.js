"use strict";

let behave = (function() {

    function die() {
        return Object.assign(this, {
            isAlive: false
        });
    }

    function hit() {
        if (this.health > 1) {
            return Object.assign(this, {
                health: this.health - 1
            });
        }
        else {
            return this.die();
        }
    }

    function increaseLasers(player) {
        return Object.assign(player, {
            maxLasers: player.maxLasers + 1
        });
    }

    function boostSpeed(player) {
        return Object.assign(player, {
            velocity: player.velocity + 1
        });
    }

    function shoot(actors, elapsedTime, timeOfLastSpawn) {
        if (elapsedTime - timeOfLastSpawn > 1000) {
            actors.push(construct.enemyLaser(this.x, this.y + this.radius, elapsedTime));
        }
        return actors;
    }

    return {
        boostSpeed: boostSpeed,
        die: die,
        hit: hit,
        increaseLasers: increaseLasers,
        shoot: shoot
    };
})();
