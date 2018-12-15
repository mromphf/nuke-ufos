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

    function showStartText() {
        context.font = "80px arial";
        context.fillStyle = "yellow";
        context.textAlign = "center";
        context.fillText("NUKE UFOS", canvas.width / 2, canvas.height / 2);

        context.font = "40px arial";
        context.fillText("Press any key to begin...", canvas.width / 2, (canvas.height + 200) / 2);
    }

    function hideStartText() {
        document.getElementsByTagName("span")[0].style.display = "inline";
        drawBackground();
    }

    function render(drawables) {
        drawBackground();
        drawables.forEach(function(drawable) {
            drawable.draw(context);
        });
    }

    function updateScore(score) {
        document.getElementById("score").innerHTML = score;
    }

    return {
        render: render,
        updateScore: updateScore,
        showStartText: showStartText,
        hideStartText: hideStartText
    };
})();
