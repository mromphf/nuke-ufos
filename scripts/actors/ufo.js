"use strict";

function Ufo(x, y, spawnTime) {
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.radius = 30;
    this.isEnemy = true;
    this.spawnTime = spawnTime;
}

Ufo.prototype.hasRoomToMove = function(maxHeight, maxWidth) {
    return (this.y + 3) < maxWidth;
};

Ufo.prototype.move = function() {
    return new Ufo(this.x, this.y + 3, this.spawnTime);
};

Ufo.prototype.die = function() {
    this.isAlive = false;
    return this;
};

Ufo.prototype.draw = function(c) {
    c.beginPath();
    c.arc(this.x, this.y, 30, 0, 2 * Math.PI);
    c.fillStyle = "#666";
    c.fill();

    c.beginPath();
    c.arc(this.x, this.y + 23, 2, 0, 2 * Math.PI);
    c.fillStyle = "#333";
    c.fill();

    c.beginPath();
    c.arc(this.x, this.y - 23, 2, 0, 2 * Math.PI);
    c.fillStyle = "#333";
    c.fill();

    c.beginPath();
    c.arc(this.x + 23, this.y, 2, 0, 2 * Math.PI);
    c.fillStyle = "#333";
    c.fill();

    c.beginPath();
    c.arc(this.x - 23, this.y, 2, 0, 2 * Math.PI);
    c.fillStyle = "#333";
    c.fill();

    c.beginPath();
    c.arc(this.x + 15, this.y + 15, 2, 0, 2 * Math.PI);
    c.fillStyle = "#333";
    c.fill();

    c.beginPath();
    c.arc(this.x - 15, this.y - 15, 2, 0, 2 * Math.PI);
    c.fillStyle = "#333";
    c.fill();

    c.beginPath();
    c.arc(this.x - 15, this.y + 15, 2, 0, 2 * Math.PI);
    c.fillStyle = "#333";
    c.fill();

    c.beginPath();
    c.arc(this.x + 15, this.y - 15, 2, 0, 2 * Math.PI);
    c.fillStyle = "#333";
    c.fill();

    c.beginPath();
    c.arc(this.x, this.y, 15, 0, 2 * Math.PI);
    c.fillStyle = "#f00";
    c.fill();
};
