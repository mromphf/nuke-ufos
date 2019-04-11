"use strict";

let draw = (function() {
    function circle(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.primaryColor;
        context.fill();
    }

    function bubble(context) {
        context.beginPath();
        context.lineWidth = 8;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.strokeStyle = this.primaryColor;
        context.stroke();
    }

    function kamikaze(context) {
        context.beginPath();
        context.fillStyle = "#c00";
        context.moveTo(this.x, this.y + 20);
        context.lineTo((this.x - 20), (this.y - 20));
        context.lineTo((this.x + 20), (this.y - 20));
        context.fill();

        context.beginPath();
        context.moveTo(this.x, (this.y - 19));
        context.lineTo((this.x - 19), (this.y - 40));
        context.lineTo((this.x - 19), (this.y - 19));
        context.fill();

        context.beginPath();
        context.moveTo(this.x, (this.y - 19));
        context.lineTo((this.x + 19), (this.y - 40));
        context.lineTo((this.x + 19), (this.y - 19));
        context.fill();
    }

    function playerWithShield(context) {
        context.beginPath();
        context.arc(this.x, this.y + 8, this.radius + 14, 0, 2 * Math.PI);
        context.lineWidth = 2;
        context.strokeStyle = "#ff0";
        context.stroke();

        context.beginPath();
        context.moveTo(this.x, this.y - 40);
        context.lineTo((this.x - 40), (this.y + 40));
        context.lineTo((this.x + 40), (this.y + 40));
        context.fillStyle = "#00f";
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
        context.lineWidth = 2;
        context.strokeStyle = this.primaryColor;
        context.stroke();
    }

    function stalker(context) {
        context.beginPath();
        context.fillStyle = this.secondaryColor;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.strokeStyle = this.primaryColor;
        context.arc(this.x, this.y, this.radius * 0.7, 0, 2 * Math.PI);
        context.lineWidth = 3,
        context.stroke();

        context.beginPath();
        context.fillStyle = this.primaryColor;
        context.arc(this.x, this.y, this.radius * 0.3, 0, 2 * Math.PI);
        context.fill();
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
        circle: circle,
        bubble: bubble,
        kamikaze: kamikaze,
        player: player,
        playerWithShield: playerWithShield,
        powerUp: powerUp,
        stalker: stalker,
        ufo: ufo
    }
})();
