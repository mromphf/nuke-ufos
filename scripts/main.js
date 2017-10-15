var nukeUfos = (function() {
    function runGame() {
        setTimeout(function() {
            screen.render(game.drawables());
            game.moveEverything();
            runGame();
        }, 16);
    }

    keyboard.registerListeners();
    runGame();
})();
