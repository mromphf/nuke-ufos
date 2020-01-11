"use strict";

let nukeUfos = (function() {
    const FRAME_RATE = 17;

    function newGame() {
        return {
            backgroundObjects: randomStar.fill(config.MAX_STARS),
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
        let scores = storage.load("scores");
        screen.reset();
        if (scores.length === 0) {
            screen.showEmptyLeaderboard();
        }
        else {
            screen.showLeaderboard(scores);
        }
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
        storage.save("scores", scores.sort((a, b) => b.value - a.value).slice(0, 10));
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

            const player = game.actors.find(a => a.isPlayer);

            game.actors = spawn.randomEnemy(
                game.actors, timeElapsed, game.timeOfLastSpawn
            );

            game.actors = spawn.randomPowerUp(
                game.actors, timeElapsed, game.timeOfLastPowerUp
            );

            game.actors = game.actors.map(
                a => a.move(
                    screen.WIDTH,
                    screen.HEIGHT,
                    keyboard.keysPressed,
                    player
            ));

            game.actors = interactions.detectCollisions(game.actors);
            game.actors = interactions.decayAll(game.actors);

            game.actors = interactions.triggerAttacks(
                game.actors, timeElapsed, game.timeOfLastSpawn
            );

            const livingActorsWithinBounds = game.actors.filter(
                a => a.isAlive && a.isWithinBounds(screen.WIDTH, screen.HEIGHT
                ));

            const replinishedStars = randomStar
                .replenish(game.backgroundObjects, config.MAX_STARS)
                .map(o => o.move())
                .filter(o => o.isWithinBounds(screen.WIDTH, screen.HEIGHT));

            const updatedScore = interactions.tallyScore(
                game.score, game.actors.filter(
                    a => a.isWithinBounds(screen.WIDTH, screen.HEIGHT))
            );

            const updatedTimeOfLastPowerUp = interactions.timeOfLastSpawn(
                game.actors.filter(a => a.isPowerUp), game.timeOfLastPowerUp
            );

            const updatedTimeOfLastSpawn = interactions.timeOfLastSpawn(
                game.actors.filter(a => a.isEnemy), game.timeOfLastSpawn
            );

            const updatedGameState = (Object.assign(game, {
                actors: livingActorsWithinBounds,
                backgroundObjects: replinishedStars,
                score: updatedScore,
                timeOfLastPowerUp: updatedTimeOfLastPowerUp,
                timeOfLastSpawn: updatedTimeOfLastSpawn
            }));

            if (player.isAlive) {
                runGame(updatedGameState);
            }
            else {
                gameOver(game);
            }

        }, FRAME_RATE);
    }

    showStartScreen();
})();
