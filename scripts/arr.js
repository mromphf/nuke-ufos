"use strict";

let arr = {
    randomElement: function(arr) {
        return arr[(Math.floor((Math.random() * arr.length)) + 1) - 1];
    },

    push: function(arr, elm) {
        let a = arr;
        a.push(elm);
        return a;
    }
}
