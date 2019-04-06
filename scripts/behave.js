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

    function enemyCollides(target) {
        if (target.isLaser || target.isPlayer) {
            return this.hit();
        }
        else {
            return this;
        }
    }

    function laserCollides(target) {
        if (target.isEnemy) {
            return this.die();
        }
        else {
            return this;
        }
    }

    function powerUpCollides(target) {
        if (target.isPlayer) {
            return this.die();
        }
        else {
            return this;
        }
    }

    function playerCollides(target) {
        if (target.isEnemy) {
            return this.hit();
        }
        else if (target.isPowerUp) {
            return target.applyTo(this);
        }
        else {
            return this;
        }
    }

    return {
        boostSpeed: boostSpeed,
        die: die,
        enemyCollides: enemyCollides,
        hit: hit,
        increaseLasers: increaseLasers,
        laserCollides: laserCollides,
        playerCollides: playerCollides,
        powerUpCollides: powerUpCollides
    };
})();
