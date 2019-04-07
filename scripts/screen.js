"use strict";

let screen = (function() {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    let canvasA = document.getElementById("foreground");
    let canvasB = document.getElementById("background");
    let foreground = canvasA.getContext("2d");
    let background = canvasB.getContext("2d");
    canvasA.width = WIDTH;
    canvasA.height = HEIGHT;
    canvasB.width = WIDTH;
    canvasB.height = HEIGHT;

    function clearBackground() {
        background.fillStyle = "#020202";
        background.fillRect(0, 0, WIDTH, HEIGHT);
    }

    function clearForeground() {
        foreground.clearRect(0, 0, WIDTH, HEIGHT);
    }

    function showStartText() {
        background.font = "80px arial";
        background.fillStyle = "yellow";
        background.textAlign = "center";
        background.fillText("NUKE UFOS", (WIDTH / 2), (HEIGHT / 2) - 100);

        background.font = "40px arial";
        background.fillText("ARROWS: Move      SPACE: Shoot", (WIDTH / 2), (HEIGHT / 2));

        background.font = "40px arial";
        background.fillText("Press Enter to launch", (WIDTH / 2), (HEIGHT + 200) / 2);
    }

    function reset() {
        updateScore(0);
        clearBackground();
    }

    function renderBackground(drawables) {
        clearBackground();
        drawables.forEach(d => d.draw(background));
    }

    function renderForeground(drawables) {
        clearForeground();
        drawables.forEach(d => d.draw(foreground));
    }

    function updateScore(score) {
        foreground.font = "20px arial";
        foreground.fillStyle = "yellow";
        foreground.fillText(("SCORE: " + score), 30, 30);
    }

    function showGameOver(score) {
        clearBackground();
        clearForeground();

        foreground.font = "80px arial";
        foreground.fillStyle = "yellow";
        foreground.textAlign = "center";
        foreground.fillText("GAME OVER", (WIDTH / 2), (HEIGHT / 2) - 100);

        foreground.font = "40px arial";
        foreground.fillText("Score: " + score, (WIDTH / 2), (HEIGHT / 2));

        foreground.fillText("Press ENTER to try again", (WIDTH / 2), (HEIGHT / 2) + 100);
    }

    return {
        CENTER: WIDTH / 2,
        HEIGHT: HEIGHT,
        WIDTH: WIDTH,
        renderBackground: renderBackground,
        renderForeground: renderForeground,
        reset: reset,
        showGameOver: showGameOver,
        showStartText: showStartText,
        updateScore: updateScore
    };
})();
