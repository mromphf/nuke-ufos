var Laser = function(x, y) {
    var x = x;
    var y = y;

    function isStillBelow(minScreenHeight) {
        return (y - 2) > minScreenHeight;
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

    return {
        isStillBelow: isStillBelow,
        draw: draw,
        move: move
    }
};
