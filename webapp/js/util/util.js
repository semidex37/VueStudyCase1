(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/util/generator',
            'js/util/mouseEvent'
            ], factory);
    }else {
        global.mouseEvent = factory(
            global.generator,
            global.mouseEvent
        );
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