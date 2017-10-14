var nukeUfos = (function() {
    function runGame() {
        setTimeout(function() {
            screen.render();
            runGame();
        }, 250);
    }

    runGame();
})();
