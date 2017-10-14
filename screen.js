var screen = (function() {
    var canvas = document.getElementById("screen");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawBackground() {
        context.fillStyle = "#020202";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawPlayer(player) {
        context.beginPath();
        context.arc(player.x, player.y, 30, 0, 2 * Math.PI);
        context.fillStyle = "#00f";
    }

    function drawStars(stars) {
        stars.forEach(function(star) {
            context.beginPath();
            context.arc(star.x, star.y, 2, 0, 2 * Math.PI);
            context.fillStyle = "#eee";
            context.fill();
        });
    }

    function render(player, stars) {
        drawBackground();
        drawStars(stars);
        drawPlayer(player);
        context.fill();
    }

    return {
        render: render
    };
})();
