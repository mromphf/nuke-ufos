"use strict";

let screen = (function() {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    let canvas = document.getElementById("screen");
    let context = canvas.getContext("2d");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    function drawBackground() {
        context.fillStyle = "#020202";
        context.fillRect(0, 0, WIDTH, HEIGHT);
    }

    function showStartText() {
        context.font = "80px arial";
        context.fillStyle = "yellow";
        context.textAlign = "center";
        context.fillText("NUKE UFOS", (WIDTH / 2), (HEIGHT / 2) - 100);

        context.font = "40px arial";
        context.fillText("ARROWS: Move      SPACE: Shoot", (WIDTH / 2), (HEIGHT / 2));

        context.font = "40px arial";
        context.fillText("Press Enter to launch", (WIDTH / 2), (HEIGHT + 200) / 2);
    }

    function reset() {
        updateScore(0);
        drawBackground();
    }

    function render(drawables) {
        drawBackground();
        drawables.forEach(d => d.draw(context));
    }

    function updateScore(score) {
        context.font = "20px arial";
        context.fillStyle = "yellow";
        context.fillText(("SCORE: " + score), 60, 30);
    }

    function showGameOver(score) {
        drawBackground();

        context.font = "80px arial";
        context.fillStyle = "yellow";
        context.textAlign = "center";
        context.fillText("GAME OVER", (WIDTH / 2), (HEIGHT / 2) - 100);

        context.font = "40px arial";
        context.fillText("Score: " + score, (WIDTH / 2), (HEIGHT / 2));

        context.fillText("Press ENTER to try again", (WIDTH / 2), (HEIGHT / 2) + 100);
    }

    return {
        HEIGHT: HEIGHT,
        WIDTH: WIDTH,
        CENTER: WIDTH / 2,
        render: render,
        updateScore: updateScore,
        showStartText: showStartText,
        reset: reset,
        showGameOver: showGameOver
    };
})();
