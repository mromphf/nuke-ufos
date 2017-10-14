var game = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    var stars = [];

    var player = {
        x: 0,
        y: 0,

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

    function randomWidth() {
        return Math.floor((Math.random() * maxWidth) + 1);
    }

    function randomHeight() {
        return Math.floor((Math.random() * maxHeight) + 1);
    }

    function randomStarsAnywhere(numExistingStars) {
        var result = [];
        for (var i = 0; i < (30 - numExistingStars); i++) {
            result.push({x: randomWidth(), y: randomHeight()});
        }
        return result;
    }

    function randomStarsFromTop(numExistingStars) {
        var result = [];
        for (var i = 0; i < (30 - numExistingStars); i++) {
            result.push({x: randomWidth(), y: 0});
        }
        return result;
    }

    var moveStars = function() {
        var oldStars = [];
        this.stars.forEach(function(star) {
            if ((star.y + 2) < maxHeight ) {
                star.y = star.y + 2;
                oldStars.push(star);
            }
        });
        this.stars = oldStars.concat(randomStarsFromTop(oldStars.length));
    }

    var initialize = function() {
        player.x = maxWidth / 2;
        player.y = maxHeight - (maxHeight * 0.2);
        this.stars = randomStarsAnywhere(0);
    }

    return {
        initialize: initialize,
        moveStars: moveStars,
        player: player,
        stars: stars
    };
})();
