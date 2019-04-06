"use strict";

let nukeUfos = (function() {
    const FRAME_RATE = 17;

    function newGame() {
        return {
            player: playerAtStartingPosition(),
            actors: randomStar.fill(),
            elapsedTime: 0,
            timeOfLastSpawn: 0,
            timeOfLastPowerUp: 0,
            score: 0
        };
    }

    function playerAtStartingPosition() {
        return construct.player(screen.WIDTH / 2, screen.HEIGHT - (screen.HEIGHT * 0.2));
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
            screen.render(game.actors.concat(game.player), game.score);
            game.player = game.player.move(keyboard.keysPressed, screen.WIDTH, screen.HEIGHT);
            game.actors = randomStar.replenish(game.actors);
            game.actors = spawn.randomEnemy(game.actors, game.elapsedTime, game.timeOfLastSpawn);
            game.actors = spawn.randomPowerUp(game.actors, game.elapsedTime, game.timeOfLastPowerUp);
            game.timeOfLastSpawn = interactions.timeOfLastSpawn(game.actors.filter(a => a.isEnemy), game.timeOfLastSpawn);
            game.timeOfLastPowerUp = interactions.timeOfLastSpawn(game.actors.filter(a => a.isPowerUp), game.timeOfLastPowerUp);
            game.actors = interactions.moveEverything(game.actors, screen.WIDTH, screen.HEIGHT);
            game.actors = interactions.detectCollisions(game.actors);
            game.actors = interactions.collectPowerups(game.player, game.actors);
            game.player = interactions.applyPowerUps(game.player, game.actors.filter(a => a.isPowerUp));

            if (interactions.playerCollidedWithSomething(game.player, game.actors.filter(actor => actor.isEnemy))) {
                gameOver(game);
            }
            else {
                runGame(Object.assign(game, {
                    score: interactions.tallyScore(game.score, game.actors),
                    elapsedTime: game.elapsedTime + FRAME_RATE,
                    actors: game.actors.filter(a => a.isAlive)
                }));
            }
        }, FRAME_RATE);
    }

    screen.showStartText();
    keyboard.registerStartListeners(startGame);
})();
