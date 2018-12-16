"use strict";

var Player = function(maxWidth, maxHeight) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.velocity = 10;
    this.radius = 5;
    this.x = maxWidth / 2;
    this.y = maxHeight - (maxHeight * 0.2);
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

Player.prototype.moveRight = function() {
    if ((this.x + this.velocity) < this.maxWidth) {
        this.x = this.x + this.velocity;
    }
}

Player.prototype.moveDown = function() {
    if ((this.y + this.velocity) < this.maxHeight) {
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
