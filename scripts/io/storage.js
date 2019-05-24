"use strict";

const storage = {
    save: function(name, value) {
        if (typeof(storage) !== undefined) {
            localStorage.setItem(name, JSON.stringify(value));
        }
    },

    load: function(name) {
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
    }
};
