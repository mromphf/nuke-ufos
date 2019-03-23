"use strict";

let collision = (function() {
    let hasOccuredBetween = function(circle1, circle2) {
        let dx = circle1.x - circle2.x;
        let dy = circle1.y - circle2.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < circle1.radius + circle2.radius) {
            return true;
        }

        return false;
    }
    
    return {
        hasOccuredBetween: hasOccuredBetween
    }
})();
