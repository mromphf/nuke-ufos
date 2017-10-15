var player = function(maxWidth, maxHeight) {
    var maxWidth = maxWidth;
    var maxHeight = maxHeight;
    var x = maxWidth / 2;
    var y = maxHeight - (maxHeight * 0.2);

    function moveLeft() {
        if ((this.x - 20) > 0) {
            this.x = this.x - 20;
        }
    }

    function moveUp() {
        if ((this.y - 20) > 0) {
            this.y = this.y - 20;
        }
    }

    function moveRight() {
        if ((this.x + 20) < maxWidth) {
            this.x = this.x + 20;
        }
    }

    function moveDown() {
        if ((this.y + 20) < maxHeight) {
            this.y = this.y + 20;
        }
    }

    function draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, 30, 0, 2 * Math.PI);
        context.fillStyle = "#00f";
    }

    return {
        x: x,
        y: y,
        moveLeft: moveLeft,
        moveUp: moveUp,
        moveRight: moveRight,
        moveDown: moveDown,
        draw: draw
    }
}
