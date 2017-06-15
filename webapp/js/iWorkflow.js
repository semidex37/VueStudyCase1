(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        console.log('export as AMD!');
        define([
            'js/core/appHeader',
            'js/core/appBody'
        ], factory);
    }else {
        console.log('export Global!');
        global.iWorkFlow = factory(
            global.appHeader,
            global.appBody
        );
    }

})(typeof window !== 'undefined' ? window : this, function(appHeader, appBody) {
    console.log("Loaded: iWorkflow.js");

    appHeader.init();
    appBody.init();

    Vue.component('app-footer', {
        template: '#app-footer-template'
    });



    // var appFooter = new Vue({
    //     el: '#app-footer'
    // });

    return {};

});