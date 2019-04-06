"use strict"

let behave = (function() {
    function die() {
        return Object.assign(this, {
            isAlive: false
        });
    }

    function increaseLasers(player) {
        return Object.assign(player, {
            maxLasers: player.maxLasers + 1
        });
    }

    return {
        die: die,
        increaseLasers: increaseLasers
    };
})();
