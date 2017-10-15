var Ufo = function(x, y) {
    var x = x;
    var y = y;

    function isStillAbove(bottomOfTheScreen) {
        return (y + 3) < bottomOfTheScreen;
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

    return {
        isStillAbove: isStillAbove,
        move: move,
        draw: draw
    }
}
