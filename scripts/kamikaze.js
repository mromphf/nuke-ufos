"use strict";

function Kamikaze(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.velocity = 10;
    this.isAlive = true;
}

Kamikaze.prototype.hasRoomToMove = function(maxHeight, maxWidth) {
    return (this.y + this.velocity) < maxWidth;
}

Kamikaze.prototype.move = function() {
    this.y = this.y + this.velocity;
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
}
