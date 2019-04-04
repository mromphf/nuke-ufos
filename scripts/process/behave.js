"use strict"

let behave = (function() {
    function die() {
        return Object.assign(this, {
            isAlive: false
        });
    }

    return {
        die: die
    };
})();
