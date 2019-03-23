"use strict";

let randomStar = (function() {
    const MAX_STARS = 30;

    function randomWidth() {
        return Math.floor((Math.random() * screen.WIDTH) + 1);
    }

    function randomHeight() {
        return Math.floor((Math.random() * screen.HEIGHT) + 1);
    }

    function anywhere() {
        return new Star(randomWidth(), randomHeight());
    }

    function somewhereAtTheTop() {
        return new Star(randomWidth(), 0);
    }

    function replenish(actors) {
        if (actors.filter(a => a instanceof Star).length < MAX_STARS) {
            actors.push(somewhereAtTheTop());
        }

        return actors;
    }

    function fill() {
        let result = [];
        for (let i = 0; i < MAX_STARS; i++) {
            result.push(anywhere());
        }
        return result;
    }

    return {
        replenish: replenish,
        fill: fill
    };
})();
