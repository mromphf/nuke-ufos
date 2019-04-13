"use strict";

let storage = function(){
    function save(name, value) {
        if (typeof(storage) !== undefined) {
            localStorage.setItem(name, JSON.stringify(value));
        }
    };

    function load(name) {
        if (typeof(storage) !== undefined) {
            let val = localStorage.getItem(name);
            if (val === null) {
                return [];
            }
            return JSON.parse(val);
        }
        else {
            return [];
        }
    };

    return {
        load: load,
        save: save
    }
}();
