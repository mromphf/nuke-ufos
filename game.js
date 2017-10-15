var game = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    var totalStars = 30;
    var stars = randomStarsAnywhere();
    var ply = new player(maxWidth, maxHeight);

    function randomStarsAnywhere() {
        var result = [];
        for (var i = 0; i < totalStars; i++) {
            result.push(randomStar.anywhere());
        }
        return result;
    }

    function randomStarsFromTop(numExistingStars) {
        var result = [];
        for (var i = 0; i < (totalStars - numExistingStars); i++) {
            result.push(randomStar.somewhereAtTheTop());
        }
        return result;
    }

    var moveStars = function() {
        var oldStars = [];
        this.stars.forEach(function(star) {
            if (star.isStillAbove(maxHeight)) {
                star.move();
                oldStars.push(star);
            }
        });
        this.stars = oldStars.concat(randomStarsFromTop(oldStars.length));
    }

    return {
        moveStars: moveStars,
        player: ply,
        stars: stars
    };
})();
