"use strict";

function Player(x, y) {
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.velocity = 10;
    this.radius = 40;
}

Player.prototype.move = function(keysPressed, maxWidth, maxHeight) {
    // Left arrow
    if (keysPressed[37]) {
        if ((this.x - this.velocity) > 0) {
            return new Player(this.x - this.velocity, this.y);
        }
    }
    // Up arrow
    else if (keysPressed[38]) {
        if ((this.y - this.velocity) > 0) {
            return new Player(this.x, this.y - this.velocity);
        }
    }
    // Right arrow
    else if (keysPressed[39]) {
        if ((this.x + this.velocity) < maxWidth) {
            return new Player(this.x + this.velocity, this.y);
        }
    }
    // Down arrow
    else if (keysPressed[40]) {
        if ((this.y + this.velocity) < maxHeight) {
            return new Player(this.x, this.y + this.velocity);
        }
    }

    return this;
}

Player.prototype.draw = function(context) {
    context.beginPath();
    context.moveTo(this.x, this.y - 40);
    context.lineTo((this.x - 40), (this.y + 40));
    context.lineTo((this.x + 40), (this.y + 40));
    context.fillStyle = "#00f";
    context.fill();
}

Player.prototype.die = function() {
    this.isAlive = false;
    return this;
}