"use strict"

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

    return {
        die: die,
        hit: hit,
        increaseLasers: increaseLasers,
        boostSpeed: boostSpeed
    };
})();
