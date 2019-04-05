"use strict";

let nukeUfos = (function() {
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
            game.actors = interactions.moveEverything(game.actors, screen.WIDTH, screen.HEIGHT);
            game.actors = interactions.detectCollisions(game.actors);
            game.actors = interactions.detectPlayerCollisions(game.player, game.actors);

            game.score += interactions.tallyScore(game.actors);

            if (game.actors.filter(a => a.isEnemy).length > 0) {
                game.timeOfLastSpawn = game.actors
                    .filter(a => a.isEnemy)
                    .map(e => e.spawnTime)
                    .sort((a, b) => a - b)
                    .pop()
            }

            if (game.actors.filter(a => a.isPowerUp).length > 0) {
                game.timeOfLastPowerUp= game.actors
                    .filter(a => a.isPowerUp)
                    .map(e => e.spawnTime)
                    .sort((a, b) => a - b)
                    .pop()
            }

            game.actors = game.actors.filter(m => m.isAlive);
            game.elapsedTime += 17;

            if (interactions.playerCollidedWithSomething(game.player, game.actors.filter(actor => actor.isEnemy))) {
                gameOver(game);
            }
            else {
                runGame(game);
            }
        }, 17);
    }

    screen.showStartText();
    keyboard.registerStartListeners(startGame);
})();
