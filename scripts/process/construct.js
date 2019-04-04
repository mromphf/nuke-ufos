"use strict"

let construct = (function() {
    function star(x, y) {
        return {
            die: behave.die,
            draw: draw.star,
            hasRoomToMove: move.ifHasRoomToGoDown,
            isAlive: true,
            isEnemy: false,
            isStar: true,
            move: move.down,
            radius: 2,
            velocity: 2,
            x: x,
            y: y,
        }
    }

    return {
        star: star
    }
})();
