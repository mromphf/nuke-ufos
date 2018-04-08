"use strict";

function Laser(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.isDead = false;
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
    this.y = this.y - 5;
};

Laser.prototype.isTypeOf = function(type) {
    return type === "laser";
};

Laser.prototype.die = function() {
    this.isDead = true;
};

Laser.prototype.isAlive = function() {
    return this.isDead === false;
};
