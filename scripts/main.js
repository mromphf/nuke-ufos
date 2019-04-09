"use strict";

let nukeUfos = (function() {
    const FRAME_RATE = 17;

    function newGame() {
        return {
            backgroundObjects: randomStar.fill(),
            actors: [playerAtStartingPosition()],
            elapsedTime: 0,
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

    function gameOver(game) {
        let scores = storage.load("scores");
        scores.push({name: "ANON", value: game.score});
        storage.save("scores", (scores));
        keyboard.registerStartListeners(startGame, showLeaderboard);
        screen.showGameOver(game.score);
    }

    function runGame(game) {
        setTimeout(function() {
            screen.renderForeground(game.actors);
            screen.renderBackground(game.backgroundObjects);
            screen.updateScore(game.score);

            game.backgroundObjects = randomStar.replenish(game.backgroundObjects);
            game.backgroundObjects = interactions.moveEverything(game.backgroundObjects, screen.WIDTH, screen.HEIGHT);

            game.actors = spawn.randomEnemy(game.actors, game.elapsedTime, game.timeOfLastSpawn);
            game.actors = spawn.randomPowerUp(game.actors, game.elapsedTime, game.timeOfLastPowerUp);
            game.actors = interactions.moveEverything(game.actors, screen.WIDTH, screen.HEIGHT, keyboard.keysPressed);
            game.actors = interactions.detectCollisions(game.actors);
            game.actors = interactions.triggerAttacks(game.actors, game.elapsedTime, game.timeOfLastSpawn);

            if (game.actors.find(a => a.isPlayer).isAlive) {
                runGame(Object.assign(game, {
                    actors: game.actors.filter(a => a.isAlive && a.isWithinBounds(screen.WIDTH, screen.HEIGHT)),
                    backgroundObjects: game.backgroundObjects.filter(o => o.isAlive && o.isWithinBounds(screen.WIDTH, screen.HEIGHT)),
                    elapsedTime: game.elapsedTime + FRAME_RATE,
                    score: interactions.tallyScore(game.score, game.actors),
                    timeOfLastPowerUp: interactions.timeOfLastSpawn(game.actors.filter(a => a.isPowerUp), game.timeOfLastPowerUp),
                    timeOfLastSpawn: interactions.timeOfLastSpawn(game.actors.filter(a => a.isEnemy), game.timeOfLastSpawn)
                }));
            }
            else {
                gameOver(game);
            }
        }, FRAME_RATE);
    }

    showStartScreen();
})();
