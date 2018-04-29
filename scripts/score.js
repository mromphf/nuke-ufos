var score = (function() {
    var score = 0;

    function increase(val) {
        score = score + val;
        document.getElementById("score").innerHTML = score;
    }

    return {
        increase: increase
    };
})();
