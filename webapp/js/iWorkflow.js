(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.iWorkFlow = factory();
    }

})(typeof window !== 'undefined' ? window : this, function(global) {

    console.log("Loaded: iWorkflow!");

    var init = function() {

    };






    return {};

});