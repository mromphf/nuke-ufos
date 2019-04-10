"use strict";

let move = (function() {
    function down() {
        return Object.assign(this, {
            y: this.y + this.velocity
        });
    }

    function up() {
        return Object.assign(this, {
            y: this.y - this.velocity
        });
    }

    function left() {
        return Object.assign(this, {
            x: this.x - this.velocity
        });
    }

    function right() {
        return Object.assign(this, {
            x: this.x + this.velocity
        });
    }

    function upLeft() {
        return Object.assign(this, {
            x: this.x - this.velocity,
            y: this.y - this.velocity
        });
    }

    function upRight() {
        return Object.assign(this, {
            x: this.x + this.velocity,
            y: this.y - this.velocity
        });
    }

    function downLeft() {
        return Object.assign(this, {
            x: this.x - this.velocity,
            y: this.y + this.velocity
        });
    }

    function downRight() {
        return Object.assign(this, {
            x: this.x + this.velocity,
            y: this.y + this.velocity
        });
    }

    function towards(target) {
        if (target.y > this.y) {
            if (target.x > this.x) {
                return downRight.bind(this)();
            }
            return downLeft.bind(this)();
        }
        else {
            if (target.x > this.x) {
                return upRight.bind(this)();
            }
            return upLeft.bind(this)();
        }
    }

    function player(maxWidth, maxHeight, keysPressed) {
        // Left and up arrows
        if (keysPressed[37] && keysPressed[38]) {
            if (((this.x - this.velocity) > 0) && ((this.y - this.velocity) > 0)) {
                return upLeft.bind(this)();
            }
        }
        // Right and up arrows
        if (keysPressed[39] && keysPressed[38]) {
            if (((this.x + this.velocity) < maxWidth) && ((this.y - this.velocity) > 0)) {
                return upRight.bind(this)();
            }
        }
        // Left and down arrows
        if (keysPressed[37] && keysPressed[40]) {
            if (((this.x - this.velocity) > 0) && ((this.y + this.velocity) < maxHeight)) {
                return downLeft.bind(this)();
            }
        }
        // Right and down arrows
        if (keysPressed[39] && keysPressed[40]) {
            if (((this.x + this.velocity) < maxWidth) && ((this.y + this.velocity) < maxHeight)) {
                return downRight.bind(this)();
            }
        }
        // Left arrow
        else if (keysPressed[37]) {
            if ((this.x - this.velocity) > 0) {
                return left.bind(this)();
            }
        }
        // Up arrow
        else if (keysPressed[38]) {
            if ((this.y - this.velocity) > 0) {
                return up.bind(this)();
            }
        }
        // Right arrow
        else if (keysPressed[39]) {
            if ((this.x + this.velocity) < maxWidth) {
                return right.bind(this)();
            }
        }
        // Down arrow
        else if (keysPressed[40]) {
            if ((this.y + this.velocity) < maxHeight) {
                return down.bind(this)();
            }
        }

        return this;
    }

    return {
        down: down,
        downLeft: downLeft,
        downRight: downRight,
        left,
        player: player,
        right,
        towards: towards,
        up: up,
        upLeft: upLeft,
        upRight: upRight
    }
})();
