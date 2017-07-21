(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.mouseEvent = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {

    var calculatorMousePoint = function(targetElement, clientX, clientY) {
        var rect = targetElement.getBoundingClientRect();

        // Canvas 실제 X, Y 값
        var x = clientX - rect.left;
        var y = clientY - rect.top;

        // console.log("calculatorMousePoint", '[', x, y, ']');

        return {
            X: x,
            Y: y
        }
    };

    return {
        CalculatorMousePoint: calculatorMousePoint
    };

});