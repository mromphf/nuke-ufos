"use strict";

var Player = function(maxWidth, maxHeight) {
    var maxWidth = maxWidth;
    var maxHeight = maxHeight;
    var velocity = 25;
    var x = maxWidth / 2;
    var y = maxHeight - (maxHeight * 0.2);
    var isDead = false;

    function moveLeft() {
        if ((this.x - velocity) > 0) {
            this.x = this.x - velocity;
        }
    }

    function moveUp() {
        if ((this.y - velocity) > 0) {
            this.y = this.y - velocity;
        }
    }

    function moveRight() {
        if ((this.x + velocity) < maxWidth) {
            this.x = this.x + velocity;
        }
    }

    function moveDown() {
        if ((this.y + velocity) < maxHeight) {
            this.y = this.y + velocity;
        }
    }

    function draw(context) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo((this.x + 50), (this.y + 70));
        context.lineTo((this.x - 50), (this.y + 70));
        context.fillStyle = "#00f";
        context.fill();
    }

    function die() {
        isDead = true;
    }

    function isAlive() {
        return isDead === false;
    }

    return {
        x: x,
        y: y,
        radius: 5,
        moveLeft: moveLeft,
        moveUp: moveUp,
        moveRight: moveRight,
        moveDown: moveDown,
        draw: draw,
        die: die,
        isAlive: isAlive
    }
}
