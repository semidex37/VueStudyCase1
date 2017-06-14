(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
        // define('canvgModule', [ 'rgbcolor', 'stackblur' ], factory );
    }else {
        // global.canvg = factory( global.RGBColor, global.stackBlur );
    }

})(typeof window !== 'undefined' ? window : this, function(/* RGBColor, stackBlur */) {

    return {};

});