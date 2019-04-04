"use strict";

function Star(x, y) {
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.radius = 2;
    this.isEnemy = false;
    this.isStar = true;
};

Star.prototype.move = function() {
    return new Star(this.x, this.y + 2);
};

Star.prototype.hasRoomToMove = function(maxWidth, maxHeight) {
    return (this.y + 2) < maxHeight;
};

Star.prototype.draw = function(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "#eee";
    context.fill();
};

Star.prototype.die = function() {
    this.isAlive = false;
    return this;
};
