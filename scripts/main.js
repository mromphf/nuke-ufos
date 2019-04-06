"use strict";

let nukeUfos = (function() {
    const FRAME_RATE = 17;

    function newGame() {
        return {
            actors: randomStar.fill().concat(playerAtStartingPosition()),
            elapsedTime: 0,
            timeOfLastSpawn: 0,
            timeOfLastPowerUp: 0,
            score: 0
        };
    }

    function playerAtStartingPosition() {
        return construct.player(screen.CENTER, screen.HEIGHT - (screen.HEIGHT * 0.2));
    }

    function startGame() {
        let game = newGame();
        screen.reset();
        keyboard.registerGameListeners(game);
        runGame(game);
    }

    function gameOver(game) {
        keyboard.registerStartListeners(startGame);
        screen.showGameOver(game.score);
    }

    function runGame(game) {
        setTimeout(function() {
            screen.render(game.actors);
            screen.updateScore(game.score);

            game.actors = randomStar.replenish(game.actors);
            game.actors = spawn.randomEnemy(game.actors, game.elapsedTime, game.timeOfLastSpawn);
            game.actors = spawn.randomPowerUp(game.actors, game.elapsedTime, game.timeOfLastPowerUp);
            game.actors = interactions.moveEverything(game.actors, screen.WIDTH, screen.HEIGHT, keyboard.keysPressed);
            game.actors = interactions.detectCollisions(game.actors);

            if (game.actors.find(a => a.isPlayer).isAlive) {
                runGame(Object.assign(game, {
                    timeOfLastSpawn: interactions.timeOfLastSpawn(game.actors.filter(a => a.isEnemy), game.timeOfLastSpawn),
                    timeOfLastPowerUp: interactions.timeOfLastSpawn(game.actors.filter(a => a.isPowerUp), game.timeOfLastPowerUp),
                    score: interactions.tallyScore(game.score, game.actors),
                    elapsedTime: game.elapsedTime + FRAME_RATE,
                    actors: game.actors.filter(a => a.isAlive)
                }));
            }
            else {
                gameOver(game);
            }
        }, FRAME_RATE);
    }

    screen.showStartText();
    keyboard.registerStartListeners(startGame);
})();
