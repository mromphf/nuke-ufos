var nukeUfos = (function() {
    function runGame() {
        setTimeout(function() {
            screen.render(game.drawables());
            game.moveEverything();
            game.expireTimer(17);
            runGame();
        }, 17);
    }

    keyboard.registerListeners();
    runGame();
})();
