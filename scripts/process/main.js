"use strict";

let nukeUfos = (function() {
    let game = {
        player: playerAtStartingPosition(),
        actors: randomStar.fill(),
        elapsedTime: 0,
        lastSpawnTime: 0,
        score: 0
    };

    function playerAtStartingPosition() {
        return new Player(screen.WIDTH / 2, screen.HEIGHT - (screen.HEIGHT * 0.2));
    }

    function startGame() {
        screen.hideStartText();
        keyboard.registerGameListeners(game);
        runGame(game);
    }

    function runGame(game) {
        setTimeout(function() {
            screen.render(game.actors.concat(game.player), game.score);
            game.player = game.player.move(keyboard.keysPressed, screen.WIDTH, screen.HEIGHT);
            game.actors = randomStar.replenish(game.actors);
            game.actors = spawn.randomEnemy(game);
            game.actors = interactions.moveEverything(game.actors, screen.WIDTH, screen.HEIGHT);
            game.actors = interactions.detectCollisions(game);
            game.actors = game.actors.filter(m => m.isAlive);
            game.elapsedTime = game.elapsedTime + 17;
            runGame(game);
        }, 17);
    }

    screen.showStartText();
    keyboard.registerStartListeners(startGame);
})();
