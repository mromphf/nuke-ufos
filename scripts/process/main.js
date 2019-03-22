"use strict";

var nukeUfos = (function() {
    var game = {
        player: playerAtStartingPosition(),
        moveables: randomStar.fill(),
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
            screen.render(game.moveables.concat(game.player), game.score);
            game.player = game.player.move(keyboard.keysPressed, screen.WIDTH, screen.HEIGHT);
            game.moveables = randomStar.replenish(game.moveables);
            game.moveables = spawn.randomEnemy(game);
            game.moveables = interactions.moveEverything(game.moveables, screen.WIDTH, screen.HEIGHT);
            game.moveables = interactions.detectCollisions(game);
            game.moveables = game.moveables.filter(m => m.isAlive);
            game.elapsedTime = game.elapsedTime + 17;
            runGame(game);
        }, 17);
    }

    screen.showStartText();
    keyboard.registerStartListeners(startGame);
})();
