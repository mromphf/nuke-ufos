var collision = (function() {
    var hasOccuredBetween = function(circle1, circle2) {
        var dx = circle1.x - circle2.x;
        var dy = circle1.y - circle2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < circle1.radius + circle2.radius) {
            return true;
        }

        return false;
    }
    
    return {
        hasOccuredBetween: hasOccuredBetween
    }
})();
