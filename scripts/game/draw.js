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
        context.save();
        context.translate(this.x, this.y);

        context.beginPath();
        context.fillStyle = "#c00";
        context.moveTo(0, 20);
        context.lineTo(-20, -20);
        context.lineTo(20, -20);
        context.fill();

        context.beginPath();
        context.moveTo(0, -19);
        context.lineTo(-19, -40);
        context.lineTo(-19, -19);
        context.fill();

        context.beginPath();
        context.moveTo(0, -19);
        context.lineTo(19, -40);
        context.lineTo(19, -19);
        context.fill();

        context.restore();
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
        context.save();
        context.translate(this.x, this.y - 45);

        context.beginPath();
        context.moveTo(0, 0);
        context.quadraticCurveTo(50, 50, 25, 100);
        context.quadraticCurveTo(25, 75, 0, 50);

        context.moveTo(0, 0);
        context.quadraticCurveTo(-50, 50, -25, 100);
        context.quadraticCurveTo(-25, 75, 0, 50);
        context.fillStyle = "#00f";
        context.fill();

        context.restore();
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
        context.save();
        context.translate(this.x, this.y);

        context.beginPath();
        context.fillStyle = this.primaryColor;
        context.arc(0, 0, 30, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = this.secondaryColor;

        context.beginPath();
        context.arc(0, 23, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(0, -23, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(23, 0, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(-23, 0, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(15, 15, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(-15, -15, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(-15, 15, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(15, -15, 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.arc(0, 0, 15, 0, 2 * Math.PI);
        context.fillStyle = "#f00";
        context.fill();

        context.restore();
    }
};
