var Ufo = function(x, y) {
    var x = x;
    var y = y;

    function hasRoomToMove(maxWidth, maxHeight) {
        return (y + 3) < maxWidth;
    }

    function move() {
        y = y + 3;
    }

    function draw(context) {
        context.beginPath();
        context.arc(x, y, 30, 0, 2 * Math.PI);
        context.fillStyle = "#f00";
        context.fill();
    }

    function isTypeOf(type) {
        return type === "ufo";
    }

    return {
        hasRoomToMove: hasRoomToMove,
        isTypeOf: isTypeOf,
        move: move,
        draw: draw
    }
}
