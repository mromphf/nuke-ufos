var game = (function() {
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    var totalStars = 30;
    var moveables = randomStarsAnywhere();
    var ply = new player(maxWidth, maxHeight);
    var elapsedTime = 0;

    function randomStarsAnywhere() {
        var result = [];
        for (var i = 0; i < totalStars; i++) {
            result.push(randomStar.anywhere());
        }
        return result;
    }

    var randomTop = function() {
        return Math.floor((Math.random() * maxWidth) + 1);
    }

    var numberOfTypes = function(type) {
        return moveables.filter(function(x) {
            return x.isTypeOf(type)
        }).length;
    }

    var moveEverything = function() {
        var existingMoveables = [];

        if ( elapsedTime > 4000 && numberOfTypes("ufo") < 1 ) {
            moveables.push(new Ufo(randomTop(), 0));
        }

        if (numberOfTypes("star") < totalStars) {
            moveables.push(randomStar.somewhereAtTheTop());
        }

        moveables.forEach(function(moveable) {
            if (moveable.hasRoomToMove(maxWidth, maxHeight)) {
                moveable.move();
                existingMoveables.push(moveable);
            }
        });

        moveables = existingMoveables;
    }

    var playerShoots = function() {
        if (numberOfTypes("laser") < 3) {
            moveables.push(new Laser(ply.x, ply.y));
        }
    }

    var drawables = function() {
        return moveables.concat([ply]);
    }

    var addMillisecondsToTimer = function(milliseconds) {
        elapsedTime = elapsedTime + milliseconds;
    }

    return {
        moveEverything: moveEverything,
        player: ply,
        drawables: drawables,
        playerShoots: playerShoots,
        addMillisecondsToTimer: addMillisecondsToTimer
    };
})();
