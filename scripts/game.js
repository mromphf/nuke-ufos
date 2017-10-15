var game = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    var totalStars = 30;
    var stars = randomStarsAnywhere();
    var lasers = [];
    var enemies = [];
    var ply = new player(maxWidth, maxHeight);
    var elapsedTime = 0;

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
        var oldEnemies = [];
        var randomTop = Math.floor((Math.random() * maxWidth) + 1);

        if ( elapsedTime > 4000 && enemies.length < 1 ) {
            enemies.push(new Ufo(randomTop, 0));
        }

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
        lasers = oldLasers;

        enemies.forEach(function(enemy) {
            if (enemy.isStillAbove(maxHeight)) {
                enemy.move();
                oldEnemies.push(enemy);
            }
        });
        enemies = oldEnemies;
    }

    var playerShoots = function() {
        if (lasers.length < 3) {
            lasers.push(new Laser(ply.x, ply.y));
        }
    }

    var drawables = function() {
        return stars.concat(lasers).concat(enemies).concat([ply]);
    }

    var expireTimer = function(millisecondsPassed) {
        elapsedTime = elapsedTime + millisecondsPassed;
    }

    return {
        moveEverything: moveEverything,
        player: ply,
        drawables: drawables,
        playerShoots: playerShoots,
        expireTimer: expireTimer
    };
})();
