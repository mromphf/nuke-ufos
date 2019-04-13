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
        const rand = Math.random();
        if ( rand > 0.66 ) {
            return 3;
        }
        else if (rand > 0.33 ) {
            return 2;
        }
        else {
            return 1;
        }
    }

    function color() {
        const rand = Math.random();
        if ( rand > 0.66 ) {
            return "#fff";
        }
        else if (rand > 0.33 ) {
            return "#eee";
        }
        else {
            return "#ddd";
        }
    }

    function replenish(actors) {
        if (actors.filter(a => a.isStar).length < config.MAX_STARS) {
            return arr.push(actors, somewhereAtTheTop());
        }
        else {
            return actors;
        }
    }

    function fill() {
        let result = [];
        for (let i = 0; i < config.MAX_STARS; i++) {
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
