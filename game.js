var game = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;

    var player = {
        x: maxWidth / 2,
        y: maxHeight - (maxHeight * 0.2),

        moveLeft: function() {
            if ((this.x - 20) > 0) {
                this.x = this.x - 20;
            }
        },

        moveUp: function() {
            if ((this.y - 20) > 0) {
                this.y = this.y - 20;
            }
        },

        moveRight: function() {
            if ((this.x + 20) < maxWidth) {
                this.x = this.x + 20;
            }
        },

        moveDown: function() {
            if ((this.y + 20) < maxHeight) {
                this.y = this.y + 20;
            }
        }
    };

    return {
        player: player
    };
})();
