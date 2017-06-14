(function(global, factory) {
    'use strict';

    // export as AMD...
    if ( typeof define !== 'undefined' && define.amd ) {
        define(factory);
        // define('canvgModule', [ 'rgbcolor', 'stackblur' ], factory );
    }

    // ...or as browserify
    else if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = factory();
        // module.exports = factory( require( 'rgbcolor' ), require( 'stackblur' ) );
    }

    // global.canvg = factory( global.RGBColor, global.stackBlur );

})(typeof window !== 'undefined' ? window : this, function(/* RGBColor, stackBlur */) {

    return {};

});