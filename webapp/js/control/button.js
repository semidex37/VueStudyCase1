(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.button = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {

    var type = 'button';
    var name = 'Button';
    var width = 120;
    var height = 60;
    var fill = 'rgb(198, 217, 241)';

    var generator = function() {
        return {
            left: 20,
            top: 20,
            type: type,
            name: name,
            width: width,
            height: height,
            fill: fill
        }
    };

    var button = generator();
    button.generator = generator;

    return button;

});