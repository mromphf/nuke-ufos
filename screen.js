var screen = (function() {
    var canvas = document.getElementById("screen");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function render() {
        context.fillStyle = "#020202";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    return {
        render: render
    };
})();
