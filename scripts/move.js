"use strict"

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

    function ifHasRoomToGoDown(maxWidth, maxHeight) {
        return (this.y + this.velocity) < maxHeight;
    }

    function ifHasRoomToGoUp(maxWidth, maxHeight) {
        return (this.y - this.velocity) > 0;
    }

    function player(keysPressed, maxWidth, maxHeight) {
        // Left and up arrows
        if (keysPressed[37] && keysPressed[38]) {
            if (((this.x - this.velocity) > 0) && ((this.y - this.velocity) > 0)) {
                return Object.assign(this, {
                    x: this.x - this.velocity,
                    y: this.y - this.velocity
                });
            }
        }
        // Right and up arrows
        if (keysPressed[39] && keysPressed[38]) {
            if (((this.x + this.velocity) < maxWidth) && ((this.y - this.velocity) > 0)) {
                return Object.assign(this, {
                    x: this.x + this.velocity,
                    y: this.y - this.velocity
                });
            }
        }
        // Left and down arrows
        if (keysPressed[37] && keysPressed[40]) {
            if (((this.x - this.velocity) > 0) && ((this.y + this.velocity) < maxHeight)) {
                return Object.assign(this, {
                    x: this.x - this.velocity,
                    y: this.y + this.velocity
                });
            }
        }
        // Right and down arrows
        if (keysPressed[39] && keysPressed[40]) {
            if (((this.x + this.velocity) < maxWidth) && ((this.y + this.velocity) < maxHeight)) {
                return Object.assign(this, {
                    x: this.x + this.velocity,
                    y: this.y + this.velocity
                });
            }
        }
        // Left arrow
        else if (keysPressed[37]) {
            if ((this.x - this.velocity) > 0) {
                return Object.assign(this, {
                    x: this.x - this.velocity
                });
            }
        }
        // Up arrow
        else if (keysPressed[38]) {
            if ((this.y - this.velocity) > 0) {
                return Object.assign(this, {
                    y: this.y - this.velocity
                });
            }
        }
        // Right arrow
        else if (keysPressed[39]) {
            if ((this.x + this.velocity) < maxWidth) {
                return Object.assign(this, {
                    x: this.x + this.velocity
                });
            }
        }
        // Down arrow
        else if (keysPressed[40]) {
            if ((this.y + this.velocity) < maxHeight) {
                return Object.assign(this, {
                    y: this.y + this.velocity
                });
            }
        }

        return this;
    }

    return {
        down: down,
        ifHasRoomToGoDown: ifHasRoomToGoDown,
        ifHasRoomToGoUp: ifHasRoomToGoUp,
        player: player,
        up: up
    }
})();