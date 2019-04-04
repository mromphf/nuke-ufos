"use strict"

let move = (function() {
    function down() {
        return Object.assign(this, {
            x: this.x,
            y: this.y + this.velocity
        });
    }

    function up() {
        return Object.assign(this, {
            x: this.x,
            y: this.y - this.velocity
        });
    }

    function ifHasRoomToGoDown(maxWidth, maxHeight) {
        return (this.y + this.velocity) < maxHeight;
    }

    function ifHasRoomToGoUp(maxWidth, maxHeight) {
        return (this.y - this.velocity) > 0;
    }

    return {
        down: down,
        up: up,
        ifHasRoomToGoDown: ifHasRoomToGoDown,
        ifHasRoomToGoUp: ifHasRoomToGoUp
    }
})();
