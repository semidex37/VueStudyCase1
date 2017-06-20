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

    return {
        generator: generator,
        mouseEvent: mouseEvent
    };

});