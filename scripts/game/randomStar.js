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

    function replenish(actors, maxStars) {
        if (actors.filter(a => a.isStar).length < maxStars) {
            return arr.push(actors, somewhereAtTheTop());
        }
        else {
            return actors;
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
