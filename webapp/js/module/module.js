(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/module/popup/popup'
        ], factory);
    }else {
        global.popup = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {

    return {};

});