var nukeUfos = (function() {
    function runGame() {
        setTimeout(function() {
            screen.render(game.player);
            runGame();
        }, 16);
    }

    keyboard.registerListeners();
    runGame();
})();
