"use strict";

let storage = function(){
    function save(name, value) {
        if (typeof(storage) !== undefined) {
            localStorage.setItem(name, value);
        }
    };

    function load(name) {
        if (typeof(storage) !== undefined) {
            localStorage.getItem(name);
        }
        else {
            return [];
        }
    };

    return {
        load: load,
        save: save
    };
};
