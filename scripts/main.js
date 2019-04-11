"use strict";

let nukeUfos = (function() {
    const FRAME_RATE = 17;

    function newGame() {
        return {
            backgroundObjects: randomStar.fill(),
            actors: [playerAtStartingPosition()],
            startTime: new Date(),
            timeOfLastSpawn: 0,
            timeOfLastPowerUp: 0,
            score: 0
        };
    }

    function playerAtStartingPosition() {
        return construct.player(screen.CENTER, screen.HEIGHT - (screen.HEIGHT * 0.2));
    }

    function showStartScreen() {
        screen.reset();
        screen.showStartText();
        keyboard.registerStartListeners(startGame, showLeaderboard);
    }

    function showLeaderboard() {
        screen.reset();
        screen.showLeaderboard(storage.load("scores"));
        keyboard.registerLeaderboardListeners(showStartScreen);
    }

    function startGame() {
        let game = newGame();
        screen.reset();
        keyboard.registerGameListeners(game);
        runGame(game);
    }

    function saveScore(n, score) {
        let scores = storage.load("scores");
        let name = n || "ANON";
        scores.push({name: name, value: score});
        storage.save("scores", (scores));
        showLeaderboard();
    }

    function gameOver(game) {
        keyboard.registerGameOverListeners(showStartScreen, saveScore, "", game.score);
        screen.showGameOver(game.score, "");
    }

    function runGame(game) {
        const timeElapsed = new Date() - game.startTime;
        setTimeout(function() {
            screen.renderForeground(game.actors);
            screen.renderBackground(game.backgroundObjects);
            screen.updateScore(game.score);

            game.actors = spawn.randomEnemy(game.actors, timeElapsed, game.timeOfLastSpawn);
            game.actors = spawn.randomPowerUp(game.actors, timeElapsed, game.timeOfLastPowerUp);
            game.actors = interactions.moveEverything(game.actors, screen.WIDTH, screen.HEIGHT, keyboard.keysPressed);
            game.actors = interactions.detectCollisions(game.actors);
            game.actors = interactions.triggerAttacks(game.actors, timeElapsed, game.timeOfLastSpawn);

            if (game.actors.find(a => a.isPlayer).isAlive) {
                runGame(Object.assign(game, {
                    actors: game.actors.filter(
                        a => a.isAlive &&
                        a.isWithinBounds(screen.WIDTH, screen.HEIGHT)
                    ),
                    backgroundObjects: randomStar
                        .replenish(game.backgroundObjects)
                        .map(o =>
                            o.move()
                        )
                        .filter(o =>
                            o.isWithinBounds(screen.WIDTH, screen.HEIGHT)
                        ),
                    score: interactions.tallyScore(game.score,
                        game.actors.filter(
                            a => a.isWithinBounds(screen.WIDTH, screen.HEIGHT)
                        )
                    ),
                    timeOfLastPowerUp: interactions.timeOfLastSpawn(
                        game.actors.filter(
                            a => a.isPowerUp
                        ),
                        game.timeOfLastPowerUp
                    ),
                    timeOfLastSpawn: interactions.timeOfLastSpawn(
                        game.actors.filter(
                            a => a.isEnemy
                        ),
                        game.timeOfLastSpawn)
                }));
            }
            else {
                gameOver(game);
            }
        }, FRAME_RATE);
    }

    showStartScreen();
})();
