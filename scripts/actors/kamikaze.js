"use strict";

function Kamikaze(x, y) {
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.radius = 15;
    this.velocity = 10;
}

Kamikaze.prototype.hasRoomToMove = function(maxHeight, maxWidth) {
    return (this.y + this.velocity) < maxWidth;
}

Kamikaze.prototype.move = function() {
    return new Kamikaze(this.x, this.y + this.velocity);
}

Kamikaze.prototype.draw = function(context) {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo((this.x - 30), (this.y - 50));
    context.lineTo((this.x + 30), (this.y - 50));
    context.fillStyle = "#c00";
    context.fill();
}

Kamikaze.prototype.die = function() {
    this.isAlive = false;
    return this;
}
