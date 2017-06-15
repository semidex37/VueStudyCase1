(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        console.log('export as AMD!');
        define([
            'js/core/appHeader',
            'js/core/appBody',
            'js/core/appFooter'
        ], factory);
    }else {
        console.log('export Global!');
        global.iWorkFlow = factory(
            global.appHeader,
            global.appBody,
            global.appFooter
        );
    }

})(typeof window !== 'undefined' ? window : this, function(appHeader, appBody, appFooter) {
    console.log("Loaded: iWorkflow.js");

    appHeader.init();
    appBody.init();
    appFooter.init();

    return {};

});