"use strict";

var randomStar = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    const MAX_STARS = 30;

    function randomWidth() {
        return Math.floor((Math.random() * maxWidth) + 1);
    }

    function randomHeight() {
        return Math.floor((Math.random() * maxHeight) + 1);
    }

    function anywhere() {
        return new Star(randomWidth(), randomHeight());
    }

    function somewhereAtTheTop() {
        return new Star(randomWidth(), 0);
    }

    var replenish = function(moveables) {
        if (moveables.filter(m => m instanceof Star).length < MAX_STARS) {
            moveables.push(somewhereAtTheTop());
        }

        return moveables;
    }

    var fill = function() {
        var result = [];
        for (var i = 0; i < MAX_STARS; i++) {
            result.push(anywhere());
        }
        return result;
    }

    return {
        replenish: replenish,
        fill: fill
    };
})();
