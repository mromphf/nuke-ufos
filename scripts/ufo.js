"use strict";

var Ufo = function(x, y) {
    var x = x;
    var y = y;
    var radius = 30;
    var isDead = false;

    function hasRoomToMove(maxWidth, maxHeight) {
        return (this.y + 3) < maxWidth;
    }

    function move() {
        this.y = this.y + 3;
    }

    function draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        context.fillStyle = "#f00";
        context.fill();
    }

    function isTypeOf(type) {
        return type === "ufo";
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
        radius: radius,
        hasRoomToMove: hasRoomToMove,
        isTypeOf: isTypeOf,
        move: move,
        draw: draw,
        die: die,
        isAlive: isAlive
    }
}
