"use strict";

var spawn = (function() {
    let MAX_WIDTH = window.innerWidth;
    let MAX_HEIGHT = window.innerHeight;

    function randomTop() {
        return Math.floor((Math.random() * MAX_WIDTH) + 1);
    }

    var ufo = function() {
        return new Ufo(randomTop(MAX_WIDTH), 0);
    }

    return {
        ufo: ufo
    };
})();
