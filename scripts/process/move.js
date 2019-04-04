"use strict"

let move = (function() {
    function down() {
        return Object.assign(this, {
            x: this.x,
            y: this.y + this.velocity
        });
    }

    function ifHasRoomToGoDown(maxWidth, maxHeight) {
        return (this.y + this.velocity) < maxHeight;
    }

    return {
        down: down,
        ifHasRoomToGoDown: ifHasRoomToGoDown
    }
})();
