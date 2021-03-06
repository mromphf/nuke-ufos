"use strict";

let screen = (function() {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    let canvasA = document.getElementById("hud");
    let canvasB = document.getElementById("foreground");
    let canvasC = document.getElementById("background");
    let hud = canvasA.getContext("2d");
    let foreground = canvasB.getContext("2d");
    let background = canvasC.getContext("2d");

    canvasA.width = WIDTH;
    canvasA.height = HEIGHT;

    canvasB.width = WIDTH;
    canvasB.height = HEIGHT;

    canvasC.width = WIDTH;
    canvasC.height = HEIGHT;

    function clearBackground() {
        background.fillStyle = "#020202";
        background.fillRect(0, 0, WIDTH, HEIGHT);
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
    }

    function renderName(name) {
        foreground.textAlign = "center";
        foreground.font = "40px arial";
        foreground.fillStyle = "#020202";
        foreground.fillRect(0, 0, WIDTH, HEIGHT);
        foreground.fillStyle = "#ff0";
        foreground.fillText(name, (WIDTH / 2), (HEIGHT / 2) + 200);
    }

    function leaderboardHeader() {
        hud.font = "80px arial";
        hud.fillStyle = "yellow";
        hud.textAlign = "center";

        hud.fillText("LEADERBOARD", (WIDTH / 2), (HEIGHT / 2) - (HEIGHT * 0.3));

        hud.font = "20px arial";
        hud.fillText("(Press Esc to return to main menu)", (WIDTH / 2), (HEIGHT / 2) - (HEIGHT * 0.25));
    }

    function showLeaderboard(scores) {
        reset();
        leaderboardHeader();

        let line = 1;
        scores.sort((a, b) => b.value - a.value).slice(0, 10).forEach(function(score) {
            hud.font = "40px arial";
            hud.fillText(score.name + "..............................." + score.value, (WIDTH / 2), (HEIGHT * 0.3) + (line * 50));
            line += 1;
        });
    }

    function showEmptyLeaderboard() {
        reset();
        leaderboardHeader();
        hud.font = "40px arial";
        hud.fillText("No scores yet", (WIDTH / 2), (HEIGHT / 2));
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
        showEmptyLeaderboard: showEmptyLeaderboard,
        showLeaderboard: showLeaderboard,
        updateScore: updateScore
    };
})();
