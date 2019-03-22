"use strict";

var nukeUfos = (function() {
    const MAX_WIDTH = window.innerWidth;
    const MAX_HEIGHT = window.innerHeight;
    const MAX_STARS = 30;
    var gameObjects = {
        player: new Player(MAX_WIDTH, MAX_HEIGHT),
        moveables: randomStar.fill(MAX_STARS),
        elapsedTime: 0,
        score: 0
    };

    function allOfType(type) {
        return gameObjects.moveables.filter(m => m instanceof type);
    }

    function startGame() {
        screen.hideStartText();
        keyboard.registerGameListeners(gameObjects);
        runGame(gameObjects);
    }

    function runGame(gameObjects) {
        setTimeout(function() {
            screen.render(gameObjects.moveables.concat(gameObjects.player));
            gameObjects.moveables = game.replenishStars(gameObjects.moveables);
            gameObjects.moveables = spawn.ufo(gameObjects);
            gameObjects.player = game.movePlayer(gameObjects.player);
            gameObjects.moveables = game.moveEverything(gameObjects.moveables, MAX_WIDTH, MAX_HEIGHT);
            gameObjects.moveables = game.detectCollisions(gameObjects);
            gameObjects.moveables = gameObjects.moveables.filter(m => m.isAlive);
            gameObjects.elapsedTime = gameObjects.elapsedTime + 17;
            runGame(gameObjects);
        }, 17);
    }

    screen.showStartText();
    keyboard.registerStartListeners(startGame);
})();
