(function(global, factory) {
    'use strict';

    // export as AMD...
    if ( typeof define !== 'undefined' && define.amd ) {
        define(factory);
    }

    // ...or as browserify
    else if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = factory();
    }

    global.iWorkFlow = factory();

})(typeof window !== 'undefined' ? window : this, function() {

    return {};

});