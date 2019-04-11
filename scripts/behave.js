"use strict";

let behave = (function() {
    function withinBounds(maxWidth, maxHeight) {
        return (
            this.x > 0 &&
            this.x < maxWidth &&
            this.y > 0 &&
            this.y < maxHeight
        );
    }

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

    function playerHit() {
        if (this.health > 1) {
            return Object.assign(this, {
                health: this.health - 1,
                draw: draw.player
            });
        }
        else {
            return this.die();
        }
    }

    function activateShield(player) {
        return Object.assign(player, {
            health: 2,
            draw: draw.playerWithShield
        });
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
            return arr.push(
                actors,
                construct.enemyLaser(this.x, this.y + this.radius, elapsedTime)
            );
        }
        else {
            return actors;
        }
    }

    return {
        activateShield: activateShield,
        boostSpeed: boostSpeed,
        die: die,
        hit: hit,
        increaseLasers: increaseLasers,
        playerHit: playerHit,
        shoot: shoot,
        withinBounds: withinBounds
    };
})();
