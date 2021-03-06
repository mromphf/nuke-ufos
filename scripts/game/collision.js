"use strict";

let collision = (function() {
    function hasOccuredBetween(circle1, circle2) {
        let dx = circle1.x - circle2.x;
        let dy = circle1.y - circle2.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < circle1.radius + circle2.radius) {
            return true;
        }

        return false;
    }

    function enemyCollides(target) {
        if (target.isLaser && !target.isEnemy) {
            return this.hit();
        }
        else if (target.isPlayer) {
            return this.die();
        }
        else {
            return this;
        }
    }

    function enemyLaserCollides(target) {
        if (target.isPlayer) {
            return this.die();
        }
        else {
            return this;
        }
    }

    function laserCollides(target) {
        if (target.isEnemy && !target.isLaser) {
            return this.die();
        }
        else {
            return this;
        }
    }

    function powerUpCollides(target) {
        if (target.isPlayer) {
            return this.die();
        }
        else {
            return this;
        }
    }

    function playerCollides(target) {
        if (target.isEnemy) {
            return this.hit();
        }
        else if (target.isPowerUp) {
            return target.applyTo(this);
        }
        else {
            return this;
        }
    }
    
    return {
        enemyCollides: enemyCollides,
        enemyLaserCollides: enemyLaserCollides,
        hasOccuredBetween: hasOccuredBetween,
        laserCollides: laserCollides,
        playerCollides: playerCollides,
        powerUpCollides: powerUpCollides
    }
})();
