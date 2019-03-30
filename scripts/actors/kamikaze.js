"use strict";

function Kamikaze(x, y, spawnTime) {
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.radius = 20;
    this.velocity = 10;
    this.isEnemy = true;
    this.spawnTime = spawnTime;
}

Kamikaze.prototype.hasRoomToMove = function(maxHeight, maxWidth) {
    return (this.y + this.velocity) < maxWidth;
}

Kamikaze.prototype.move = function() {
    return new Kamikaze(this.x, this.y + this.velocity, this.spawnTime);
}

Kamikaze.prototype.draw = function(context) {
    context.beginPath();
    context.moveTo(this.x, this.y + 20);
    context.lineTo((this.x - 20), (this.y - 20));
    context.lineTo((this.x + 20), (this.y - 20));
    context.fillStyle = "#c00";
    context.fill();
}

Kamikaze.prototype.die = function() {
    this.isAlive = false;
    return this;
}
