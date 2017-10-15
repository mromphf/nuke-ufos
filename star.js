var Star = function(x, y) {
    var x = x;
    var y = y;

    function isStillAbove(maxScreenHeight) {
        return (this.y + 2) < maxScreenHeight;
    }

    function move() {
        this.y = this.y + 2;
    }

    function draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, 2, 0, 2 * Math.PI);
        context.fillStyle = "#eee";
        context.fill();
    }

    return {
        x: x,
        y: y,
        isStillAbove: isStillAbove,
        move: move,
        draw: draw
    }
};
