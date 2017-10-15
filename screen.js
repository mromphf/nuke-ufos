var screen = (function() {
    var canvas = document.getElementById("screen");
    var context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawBackground() {
        context.fillStyle = "#020202";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    function render(player, stars) {
        drawBackground();
        stars.forEach(function(star) {
            star.draw(context);
        });
        player.draw(context);
        context.fill();
    }

    return {
        render: render
    };
})();
