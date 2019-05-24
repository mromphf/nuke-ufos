"use strict";

const draw = {
    circle: function(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.primaryColor;
        context.fill();
    },

    bubble: function(context) {
        context.beginPath();
        context.lineWidth = 8;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.strokeStyle = this.primaryColor;
        context.stroke();
    },

    kamikaze: function(context) {
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
    },

    playerWithShield: function(context) {
        context.beginPath();
        context.arc(this.x, this.y + 8, this.radius + 14, 0, 2 * Math.PI);
        context.lineWidth = 2;
        context.strokeStyle = "#ff0";
        context.stroke();

        draw.player.bind(this)(context);
    },

    player: function(context) {
        const y = this.y - 45;

        context.beginPath();
        context.moveTo(this.x, y);
        context.quadraticCurveTo(this.x + 50, y + 50, this.x + 25, y + 100);
        context.quadraticCurveTo(this.x + 25, y + 75, this.x, y + 50);

        context.moveTo(this.x, y);
        context.quadraticCurveTo(this.x - 50, y + 50, this.x - 25, y + 100);
        context.quadraticCurveTo(this.x - 25, y + 75, this.x, y + 50);
        context.fillStyle = "#00f";
        context.fill();
    },

    powerUp: function(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.primaryColor;
        context.fill();

        context.beginPath();
        context.arc(this.x, this.y, this.radius + 8, 0, 2 * Math.PI);
        context.lineWidth = 2;
        context.strokeStyle = this.primaryColor;
        context.stroke();
    },

    stalker: function(context) {
        context.beginPath();
        context.fillStyle = this.primaryColor;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.strokeStyle = this.secondaryColor;
        context.arc(this.x, this.y, this.radius * 0.7, 0, 2 * Math.PI);
        context.lineWidth = 3,
        context.stroke();

        context.beginPath();
        context.fillStyle = this.secondaryColor;
        context.arc(this.x, this.y, this.radius * 0.3, 0, 2 * Math.PI);
        context.fill();
    },

    ufo: function(context) {
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
};
