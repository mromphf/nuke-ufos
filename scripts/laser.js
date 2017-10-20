var Laser = function(x, y) {
    var x = x;
    var y = y;

    function hasRoomToMove() {
        return (y - 2) > 0;
    }

    function draw(context) {
        context.beginPath();
        context.arc(x, y, 5, 0, 2 * Math.PI);
        context.fillStyle = "#0f0";
        context.fill();
    }

    function move() {
        y = y - 5;
    }

    function isTypeOf(type) {
        return type === "laser";
    }

    return {
        hasRoomToMove: hasRoomToMove,
        isTypeOf: isTypeOf,
        draw: draw,
        move: move
    }
};
