"use strict"

let draw = (function() {
    function star(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = "#eee";
        context.fill();
    }

    function laser(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = "#0f0";
        context.fill();
    }

    function kamikaze(context) {
        context.beginPath();
        context.moveTo(this.x, this.y + 20);
        context.lineTo((this.x - 20), (this.y - 20));
        context.lineTo((this.x + 20), (this.y - 20));
        context.fillStyle = "#c00";
        context.fill();
    }

    return {
        star: star,
        laser: laser,
        kamikaze: kamikaze
    }
})();
