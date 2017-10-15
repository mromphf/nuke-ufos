var Star = function(x, y) {
    var x = x;
    var y = y;

    function isStillAbove(bottomOfTheScreen) {
        return (y + 2) < bottomOfTheScreen;
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

    return {
        isStillAbove: isStillAbove,
        move: move,
        draw: draw
    }
};
