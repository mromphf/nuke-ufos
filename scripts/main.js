"use strict";

var nukeUfos = (function() {
    const MAX_WIDTH = window.innerWidth;
    const MAX_HEIGHT = window.innerHeight;
    const MAX_STARS = 30;
    var gameObjects = {
        player: new Player(MAX_WIDTH, MAX_HEIGHT),
        moveables: randomStarsAnywhere(MAX_STARS),
        elapsedTime: 0,
        score: 0
    };

    function allOfType(type) {
        return gameObjects.moveables.filter(m => m instanceof type);
    }

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
            screen.render(gameObjects.moveables.concat(gameObjects.player));
            gameObjects.moveables = game.replenishStars(gameObjects.moveables);
            gameObjects = game.spawnEnemies(gameObjects)
            gameObjects = game.moveEverything(gameObjects, MAX_WIDTH, MAX_HEIGHT);
            gameObjects = game.detectCollisions(gameObjects);
            gameObjects.moveables = game.removeDeadObjects(gameObjects.moveables);
            gameObjects.elapsedTime = gameObjects.elapsedTime + 17;
            runGame(gameObjects);
        }, 17);
    }

    screen.showStartText();
    keyboard.registerStartListeners(startGame);
})();
