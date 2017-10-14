var randomStar = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;

    function randomWidth() {
        return Math.floor((Math.random() * maxWidth) + 1);
    }

    function randomHeight() {
        return Math.floor((Math.random() * maxHeight) + 1);
    }

    var anywhere = function() {
        return {
            x: randomWidth(),
            y: randomHeight()
        };
    }

    var somewhereAtTheTop = function() {
        return {
            x: randomWidth(),
            y: 0
        };
    }

    return {
        anywhere: anywhere,
        somewhereAtTheTop: somewhereAtTheTop
    };
})();
