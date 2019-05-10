"use strict";

let randomStar = (function() {
    function randomWidth() {
        return Math.floor((Math.random() * screen.WIDTH) + 1);
    }

    function randomHeight() {
        return Math.floor((Math.random() * screen.HEIGHT) + 1);
    }

    function anywhere() {
        return construct.star(randomWidth(), randomHeight());
    }

    function somewhereAtTheTop() {
        return construct.star(randomWidth(), 0);
    }

    function size() {
        return arr.randomElement([1, 2, 3]);
    }

    function color() {
        return arr.randomElement(["#ddd", "#eee", "#fff"]);
    }

    function replenish(stars) {
        if (stars.length < config.MAX_STARS) {
            return arr.push(stars, somewhereAtTheTop());
        }
        else {
            return stars;
        }
    }

    function fill(maxStars) {
        let result = [];
        for (let i = 0; i < maxStars; i++) {
            result.push(anywhere());
        }
        return result;
    }

    return {
        color: color,
        fill: fill,
        replenish: replenish,
        size: size
    };
})();
