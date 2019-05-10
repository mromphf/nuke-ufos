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

    function dreadnoughtDecay() {
        if (this.halfLife > 0) {
            return Object.assign(this, {
                halfLife: this.halfLife - 1,
                primaryColor: "#666"
            });
        }
        else {
            return Object.assign(this, {
                primaryColor: "#444",
                halfLife: 5,
                isDecaying: false
            });
        }
    }

    function bubbleDecay() {
        if (this.halfLife > 0) {
            return Object.assign(this, {
                halfLife: this.halfLife - 1,
                radius: this.radius + 1
            });
        }
        else {
            return this.die();
        }
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

    function startDecay() {
        return Object.assign(this, {
            isDecaying: true
        });
    }

    function startDecayWithHit() {
        if (this.health > 1) {
            return Object.assign(this, {
                isDecaying: true,
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
        dreadnoughtDecay: dreadnoughtDecay,
        bubbleDecay: bubbleDecay,
        startDecay: startDecay,
        startDecayWithHit: startDecayWithHit,
        increaseLasers: increaseLasers,
        playerHit: playerHit,
        shoot: shoot,
        withinBounds: withinBounds
    };
})();
