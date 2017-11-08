"use strict";

var screen = (function() {
    var canvas = document.getElementById("screen");
    var context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawBackground() {
        context.fillStyle = "#020202";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    function render(drawables) {
        drawBackground();
        drawables.forEach(function(drawable) {
            drawable.draw(context);
        });
    }

    return {
        render: render
    };
})();
