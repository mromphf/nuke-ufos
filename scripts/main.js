"use strict";

var nukeUfos = (function() {
    var gameObjects = {
        player: playerAtStartingPosition(),
        moveables: randomStar.fill(),
        elapsedTime: 0,
        score: 0
    };

    function playerAtStartingPosition() {
        return new Player(screen.WIDTH / 2, screen.HEIGHT - (screen.HEIGHT * 0.2));
    }

    function startGame() {
        screen.hideStartText();
        keyboard.registerGameListeners(gameObjects);
        runGame(gameObjects);
    }

    function runGame(gameObjects) {
        setTimeout(function() {
            screen.render(gameObjects.moveables.concat(gameObjects.player));
            gameObjects.moveables = randomStar.replenish(gameObjects.moveables);
            gameObjects.moveables = spawn.ufo(gameObjects);
            gameObjects.player = gameObjects.player.move(keyboard.keysPressed, screen.WIDTH, screen.HEIGHT);
            gameObjects.moveables = game.moveEverything(gameObjects.moveables, screen.WIDTH, screen.HEIGHT);
            gameObjects.moveables = game.detectCollisions(gameObjects);
            gameObjects.moveables = gameObjects.moveables.filter(m => m.isAlive);
            gameObjects.elapsedTime = gameObjects.elapsedTime + 17;
            runGame(gameObjects);
        }, 17);
    }

    screen.showStartText();
    keyboard.registerStartListeners(startGame);
})();
