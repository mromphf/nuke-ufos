var nukeUfos = (function() {
    function runGame() {
        setTimeout(function() {
            screen.render(game.player, game.stars);
            game.moveStars();
            runGame();
        }, 16);
    }

    keyboard.registerListeners();
    game.initialize();
    runGame();
})();
