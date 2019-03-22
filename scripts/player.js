"use strict";

var Player = function(x, y) {
    this.velocity = 10;
    this.radius = 5;
    this.x = x;
    this.y = y;
    this.isAlive = true;
}

Player.prototype.moveLeft = function() {
    if ((this.x - this.velocity) > 0) {
        this.x = this.x - this.velocity;
    }
}

Player.prototype.moveUp = function() {
    if ((this.y - this.velocity) > 0) {
        this.y = this.y - this.velocity;
    }
}

Player.prototype.moveRight = function(maxWidth) {
    if ((this.x + this.velocity) < maxWidth) {
        this.x = this.x + this.velocity;
    }
}

Player.prototype.moveDown = function(maxHeight) {
    if ((this.y + this.velocity) < maxHeight) {
        this.y = this.y + this.velocity;
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
}
