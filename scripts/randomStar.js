"use strict";

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
        return new Star(randomWidth(), randomHeight());
    }

    var somewhereAtTheTop = function() {
        return new Star(randomWidth(), 0);
    }

    return {
        anywhere: anywhere,
        somewhereAtTheTop: somewhereAtTheTop
    };
})();
