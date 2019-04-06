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
            // Rendering
            screen.render(game.actors.concat(game.player), game.score);

            // Movement and spawning
            game.player = game.player.move(keyboard.keysPressed, screen.WIDTH, screen.HEIGHT);
            game.actors = randomStar.replenish(game.actors);
            game.actors = spawn.randomEnemy(game.actors, game.elapsedTime, game.timeOfLastSpawn);
            game.timeOfLastSpawn = interactions.timeOfLastSpawn(game.actors.filter(a => a.isEnemy), game.timeOfLastSpawn);
            game.actors = spawn.randomPowerUp(game.actors, game.elapsedTime, game.timeOfLastPowerUp);
            game.timeOfLastPowerUp = interactions.timeOfLastSpawn(game.actors.filter(a => a.isPowerUp), game.timeOfLastPowerUp);

            // Interactions and collisions
            game.actors = interactions.moveEverything(game.actors, screen.WIDTH, screen.HEIGHT);
            game.actors = interactions.detectCollisions(game.actors);
            game.actors = interactions.detectPlayerCollisions(game.player, game.actors);
            game.score += interactions.tallyScore(game.actors);

            // Clean up
            game.elapsedTime += 17;
            game.actors = game.actors.filter(m => m.isAlive);

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
