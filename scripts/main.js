"use strict";

var nukeUfos = (function() {
    const MAX_WIDTH = window.innerWidth;
    const MAX_HEIGHT = window.innerHeight;
    const MAX_STARS = 30;
    var gameObjects = {
        player: new Player(MAX_WIDTH, MAX_HEIGHT),
        ufos: [],
        lasers: [],
        stars: randomStarsAnywhere(MAX_STARS),
        elapsedTime: 0,
        score: 0
    };

    function randomStarsAnywhere(max_stars) {
        var result = [];
        for (var i = 0; i < max_stars; i++) {
            result.push(randomStar.anywhere());
        }
        return result;
    }

    function startGame() {
        screen.hideStartText();
        keyboard.registerGameListeners(gameObjects);
        runGame(gameObjects);
    }

    function runGame(gameObjects) {
        setTimeout(function() {
            screen.render(game.drawables(gameObjects));
            gameObjects.stars = game.replenishStars(gameObjects.stars);
            gameObjects = game.spawnEnemies(gameObjects)
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
