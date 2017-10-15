var game = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    var totalStars = 30;
    var stars = randomStarsAnywhere();
    var lasers = [];
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

    var moveEverything = function() {
        var oldStars = [];
        var oldLasers = [];

        stars.forEach(function(star) {
            if (star.isStillAbove(maxHeight)) {
                star.move();
                oldStars.push(star);
            }
        });
        stars = oldStars.concat(randomStarsFromTop(oldStars.length));

        lasers.forEach(function(laser) {
            if (laser.isStillBelow(0)) {
                laser.move();
                oldLasers.push(laser);
            }
        });
        lasers = oldLasers.concat();
    }

    var playerShoots = function() {
        if (lasers.length < 3) {
            lasers.push(new Laser(ply.x, ply.y));
        }
    }

    var drawables = function() {
        return stars.concat(lasers).concat([ply]);
    }

    return {
        moveEverything: moveEverything,
        player: ply,
        drawables: drawables,
        playerShoots: playerShoots
    };
})();
