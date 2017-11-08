"use strict";

var Star = function(x, y) {
    var x = x;
    var y = y;
    var isDead = false;

    function hasRoomToMove(maxWidth, maxHeight) {
        return (y + 2) < maxHeight;
    }

    function move() {
        y = y + 2;
    }

    function draw(context) {
        context.beginPath();
        context.arc(x, y, 2, 0, 2 * Math.PI);
        context.fillStyle = "#eee";
        context.fill();
    }

    function isTypeOf(type) {
        return type === "star";
    }

    function die() {
        isDead = true;
    }

    function isAlive() {
        return isDead === false;
    }

    return {
        hasRoomToMove: hasRoomToMove,
        isTypeOf: isTypeOf,
        move: move,
        draw: draw,
        die: die,
        isAlive: isAlive
    }
};
