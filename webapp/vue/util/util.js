(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/util/generator',
            'vue/util/mouseEvent'
            ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(generator, mouseEvent) {

    var Assign = function(target, property) {
        if(typeof Object.assign == "function") {
            return Object.assign(target, property);
        }else {
            for(var idx in property) {
                target[idx] = property[idx];
            }
            return target;
        }
    };

    return {
        assign: Assign,
        generator: generator,
        mouseEvent: mouseEvent
    };

});