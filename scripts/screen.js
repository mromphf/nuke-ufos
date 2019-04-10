"use strict";

let screen = (function() {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    let canvasA = document.getElementById("hud");
    let canvasB = document.getElementById("nameEntry");
    let canvasC = document.getElementById("foreground");
    let canvasD = document.getElementById("background");
    let hud = canvasA.getContext("2d");
    let nameEntry = canvasB.getContext("2d");
    let foreground = canvasC.getContext("2d");
    let background = canvasD.getContext("2d");

    canvasA.width = WIDTH;
    canvasA.height = HEIGHT;

    canvasB.width = WIDTH;
    canvasB.height = HEIGHT;

    canvasC.width = WIDTH;
    canvasC.height = HEIGHT;

    canvasD.width = WIDTH;
    canvasD.height = HEIGHT;

    function clearBackground() {
        background.fillStyle = "#020202";
        background.fillRect(0, 0, WIDTH, HEIGHT);
    }

    function clearNameEntry() {
        nameEntry.clearRect(0, 0, WIDTH, HEIGHT);
    }

    function clearForeground() {
        foreground.clearRect(0, 0, WIDTH, HEIGHT);
    }

    function clearHud() {
        hud.clearRect(0, 0, WIDTH, HEIGHT);
    }

    function showStartText() {
        hud.font = "80px arial";
        hud.fillStyle = "yellow";
        hud.textAlign = "center";
        hud.fillText("NUKE UFOS", (WIDTH / 2), (HEIGHT / 2) - 100);

        hud.font = "40px arial";
        hud.fillText("ARROWS: Move      SPACE: Shoot", (WIDTH / 2), (HEIGHT / 2));

        hud.font = "40px arial";
        hud.fillText("Press Enter to launch", (WIDTH / 2), (HEIGHT + 200) / 2);

        hud.font = "20px arial";
        hud.fillText("(Press L to view leaderboard)", (WIDTH / 2), (HEIGHT + 400) / 2);
    }

    function reset() {
        clearHud();
        clearNameEntry();
        clearBackground();
        clearForeground();
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
        clearHud();
        hud.font = "20px arial";
        hud.fillStyle = "yellow";
        hud.fillText(("SCORE: " + score), 60, 30);
    }

    function showGameOver(score) {
        reset();

        hud.font = "80px arial";
        hud.fillStyle = "yellow";
        hud.textAlign = "center";
        hud.fillText("GAME OVER", (WIDTH / 2), (HEIGHT / 2) - 100);

        hud.font = "40px arial";
        hud.fillText("Score: " + score, (WIDTH / 2), (HEIGHT / 2));

        hud.fillText("Enter your name", (WIDTH / 2), (HEIGHT / 2) + 100);

        if (name.length > 0) {
            renderName(name);
        }

        hud.font = "20px arial";
        hud.fillText("(Press L to view leaderboard)", (WIDTH / 2), (HEIGHT / 2) + 400);
    }

    function renderName(name) {
        nameEntry.textAlign = "center";
        nameEntry.font = "40px arial";
        nameEntry.fillStyle = "#020202";
        nameEntry.fillRect(0, 0, WIDTH, HEIGHT);
        nameEntry.fillStyle = "#ff0";
        nameEntry.fillText(name, (WIDTH / 2), (HEIGHT / 2) + 200);
    }

    function showLeaderboard(scores) {
        reset();

        hud.font = "80px arial";
        hud.fillStyle = "yellow";
        hud.textAlign = "center";

        hud.fillText("LEADERBOARD", (WIDTH / 2), (HEIGHT / 2) - 300);

        hud.font = "20px arial";
        hud.fillText("(Press Esc to return to main menu)", (WIDTH / 2), (HEIGHT / 2) - 275);

        if (scores.length > 0) {
            let line = 1;
            scores.sort((a, b) => b.value - a.value).slice(0, 10).forEach(function(score) {
                hud.font = "40px arial";
                hud.fillText(score.name + "..............................." + score.value, (WIDTH / 2), 300 + (line * 50));
                line += 1;
            });
        }
        else {
            hud.font = "40px arial";
            hud.fillText("No scores yet", (WIDTH / 2), (HEIGHT / 2));
        }
    }

    return {
        CENTER: WIDTH / 2,
        HEIGHT: HEIGHT,
        WIDTH: WIDTH,
        renderName: renderName,
        renderBackground: renderBackground,
        renderForeground: renderForeground,
        reset: reset,
        showGameOver: showGameOver,
        showStartText: showStartText,
        showLeaderboard: showLeaderboard,
        updateScore: updateScore
    };
})();
