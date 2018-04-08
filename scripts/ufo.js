"use strict";

function Ufo(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 30;
    this.isDead = false;
}

Ufo.prototype.hasRoomToMove = function(maxHeight, maxWidth) {
    return (this.y + 3) < maxWidth;
};

Ufo.prototype.move = function() {
    this.y = this.y + 3;
};

Ufo.prototype.draw = function(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "#f00";
    context.fill();
};

Ufo.prototype.isTypeOf = function(type) {
    return type === "ufo";
};

Ufo.prototype.die = function() {
    this.isDead = true;
};

Ufo.prototype.isAlive = function() {
    return this.isDead === false;
};
