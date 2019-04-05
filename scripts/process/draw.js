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

    function ufo(context) {
        context.beginPath();
        context.arcontext.this.x, this.y, 30, 0, 2 * Math.PI);
        context.fillStyle = "#666";
        context.fill();

        context.beginPath();
        context.arcontext.this.x, this.y + 23, 2, 0, 2 * Math.PI);
        context.fillStyle = "#333";
        context.fill();

        context.beginPath();
        context.arcontext.this.x, this.y - 23, 2, 0, 2 * Math.PI);
        context.fillStyle = "#333";
        context.fill();

        context.beginPath();
        context.arcontext.this.x + 23, this.y, 2, 0, 2 * Math.PI);
        context.fillStyle = "#333";
        context.fill();

        context.beginPath();
        context.arcontext.this.x - 23, this.y, 2, 0, 2 * Math.PI);
        context.fillStyle = "#333";
        context.fill();

        context.beginPath();
        context.arcontext.this.x + 15, this.y + 15, 2, 0, 2 * Math.PI);
        context.fillStyle = "#333";
        context.fill();

        context.beginPath();
        context.arcontext.this.x - 15, this.y - 15, 2, 0, 2 * Math.PI);
        context.fillStyle = "#333";
        context.fill();

        context.beginPath();
        context.arcontext.this.x - 15, this.y + 15, 2, 0, 2 * Math.PI);
        context.fillStyle = "#333";
        context.fill();

        context.beginPath();
        context.arcontext.this.x + 15, this.y - 15, 2, 0, 2 * Math.PI);
        context.fillStyle = "#333";
        context.fill();

        context.beginPath();
        context.arcontext.this.x, this.y, 15, 0, 2 * Math.PI);
        context.fillStyle = "#f00";
        context.fill();
    }

    return {
        star: star,
        laser: laser,
        ufo: ufo,
        kamikaze: kamikaze
    }
})();
