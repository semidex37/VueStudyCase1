(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        console.log('export as AMD!');
        define([
            'vue/data/dataObject',
            'vue/module/module',
            'vue/layout/header/appHeader',
            'vue/layout/body/appBody',
            'vue/layout/footer/appFooter'
        ], factory);
    }else {
        console.log('export Global!');
        global.iWorkFlow = factory(
            global.dataObject,
            global.appHeader,
            global.appBody,
            global.appFooter
        );
    }

})(typeof window !== 'undefined' ? window : this, function(dataObject, module, appHeader, appBody, appFooter) {
    console.log("Loaded: iWorkflow.js");

    appHeader.init();
    appBody.init();
    appFooter.init();

    return {};

});