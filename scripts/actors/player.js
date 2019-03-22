"use strict";

var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.velocity = 10;
    this.radius = 5;
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
    // No key
    else {
        return this;
    }
}

Player.prototype.draw = function(context) {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo((this.x + 50), (this.y + 70));
    context.lineTo((this.x - 50), (this.y + 70));
    context.fillStyle = "#00f";
    context.fill();
}

Player.prototype.die = function() {
    this.isAlive = false;
    return this;
}
