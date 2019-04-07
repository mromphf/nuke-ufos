"use strict"

let draw = (function() {
    function star(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.primaryColor;
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

    function player(context) {
        context.beginPath();
        context.moveTo(this.x, this.y - 40);
        context.lineTo((this.x - 40), (this.y + 40));
        context.lineTo((this.x + 40), (this.y + 40));
        context.fillStyle = "#00f";
        context.fill();
    }

    function powerUp(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.primaryColor;
        context.fill();

        context.beginPath();
        context.arc(this.x, this.y, this.radius + 8, 0, 2 * Math.PI);
        context.strokeStyle = this.primaryColor;
        context.stroke();
    }

    function ufo(context) {
        context.beginPath();
        context.fillStyle = this.primaryColor;
        context.arc(this.x, this.y, 30, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = this.secondaryColor;

        context.beginPath();
        context.arc(this.x, this.y + 23, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(this.x, this.y - 23, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(this.x + 23, this.y, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(this.x - 23, this.y, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(this.x + 15, this.y + 15, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(this.x - 15, this.y - 15, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(this.x - 15, this.y + 15, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(this.x + 15, this.y - 15, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(this.x, this.y, 15, 0, 2 * Math.PI);
        context.fillStyle = "#f00";
        context.fill();
    }

    return {
        kamikaze: kamikaze,
        laser: laser,
        player: player,
        powerUp: powerUp,
        star: star,
        ufo: ufo
    }
})();
