"use strict";

var nukeUfos = (function() {
    const MAX_WIDTH = window.innerWidth;
    const MAX_HEIGHT = window.innerHeight;
    const MAX_STARS = 30;
    var gameObjects = {
        player: new Player(MAX_WIDTH, MAX_HEIGHT),
        ufos: [],
        lasers: [],
        stars: game.randomStarsAnywhere(MAX_STARS),
        elapsedTime: 0,
        score: 0
    };

    function startGame() {
        screen.hideStartText();
        keyboard.registerGameListeners(gameObjects);
        runGame(gameObjects);
    }

    function runGame(gameObjects) {
        setTimeout(function() {
            screen.render(game.drawables(gameObjects));
            gameObjects.stars = game.replenishStars(gameObjects.stars);
            gameObjects.ufos = game.spawnEnemies(gameObjects)
            gameObjects = game.moveEverything(gameObjects, MAX_WIDTH, MAX_HEIGHT);
            gameObjects = game.detectCollisions(gameObjects);
            gameObjects = game.removeDeadObjects(gameObjects);
            gameObjects.elapsedTime = gameObjects.elapsedTime + 17;
            runGame(gameObjects);
        }, 17);
    }

    screen.showStartText();
    keyboard.registerStartListeners(startGame);
})();
