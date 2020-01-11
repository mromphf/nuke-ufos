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

    function towards(maxWidth, maxHeight, keysPressed, target) {
        if (target.y > this.y) {
            if (target.x > this.x) {
                if (target.x - this.x < 5) {
                    return down.bind(this)();
                }
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

    function player(maxWidth, maxHeight, keysPressed, target) {
        if (keysPressed[key_code.ARROW_LEFT] && keysPressed[key_code.ARROW_UP]) {
            if (((this.x - this.radius - this.velocity) > 0) && 
                ((this.y - this.radius - this.velocity) > 0)) {
                return upLeft.bind(this)();
            }
        }
        if (keysPressed[key_code.ARROW_RIGHT] && keysPressed[key_code.ARROW_UP]) {
            if (((this.x + this.radius + this.velocity) < maxWidth) && 
                ((this.y - this.radius - this.velocity) > 0)) {
                return upRight.bind(this)();
            }
        }
        if (keysPressed[key_code.ARROW_LEFT] && keysPressed[key_code.ARROW_DOWN]) {
            if (((this.x - this.radius - this.velocity) > 0) &&
                ((this.y + this.radius + this.velocity) < maxHeight)) {
                return downLeft.bind(this)();
            }
        }
        if (keysPressed[key_code.ARROW_RIGHT] && keysPressed[key_code.ARROW_DOWN]) {
            if (((this.x + this.radius + this.velocity) < maxWidth) && 
                ((this.y + this.radius + this.velocity) < maxHeight)) {
                return downRight.bind(this)();
            }
        }
        else if (keysPressed[key_code.ARROW_LEFT]) {
            if ((this.x - this.radius - this.velocity) > 0) {
                return left.bind(this)();
            }
        }
        else if (keysPressed[key_code.ARROW_UP]) {
            if ((this.y - this.radius - this.velocity) > 0) {
                return up.bind(this)();
            }
        }
        else if (keysPressed[key_code.ARROW_RIGHT]) {
            if ((this.x + this.radius + this.velocity) < maxWidth) {
                return right.bind(this)();
            }
        }
        else if (keysPressed[key_code.ARROW_DOWN]) {
            if ((this.y + this.radius + this.velocity) < maxHeight) {
                return down.bind(this)();
            }
        }

        return this;
    }

    return {
        down: down,
        downLeft: downLeft,
        downRight: downRight,
        left: left,
        player: player,
        right: right,
        towards: towards,
        up: up,
        upLeft: upLeft,
        upRight: upRight
    }
})();
