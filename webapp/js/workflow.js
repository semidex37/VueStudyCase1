(function(global, factory) {
    'use strict';

    // export as AMD...
    if ( typeof define !== 'undefined' && define.amd ) {
        define(factory);
        define('', [], factory);
    }

    // ...or as browserify
    else if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = factory();
        module.exoprts = factory( require(''), require('') );
    }

})(typeof window !== 'undefined' ? window : this, function(global) {

    return {};

});