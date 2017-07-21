(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.contextMenuObject = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {


    var contextMenuObject = {
        doRefresh: {
            type: 'doRefresh',
            icon: 'browser',
            name: 'doRefresh'
        }
    };

    return contextMenuObject;

});