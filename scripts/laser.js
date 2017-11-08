"use strict";

var Laser = function(x, y) {
    var x = x;
    var y = y;
    var isDead = false;

    function hasRoomToMove() {
        return (this.y - 2) > 0;
    }

    function draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        context.fillStyle = "#0f0";
        context.fill();
    }

    function move() {
        this.y = this.y - 5;
    }

    function isTypeOf(type) {
        return type === "laser";
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
        hasRoomToMove: hasRoomToMove,
        isTypeOf: isTypeOf,
        draw: draw,
        move: move,
        die: die,
        isAlive: isAlive
    }
};
