"use strict";

function Laser(x, y) {
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.radius = 5;
};

Laser.prototype.hasRoomToMove = function() {
    return (this.y - 2) > 0;
};

Laser.prototype.draw = function(context) {
    context.beginPath();
    context.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    context.fillStyle = "#0f0";
    context.fill();
};

Laser.prototype.move = function() {
    return new Laser(this.x, this.y - 5);
};

Laser.prototype.die = function() {
    this.isAlive = false;
    return this;
};
