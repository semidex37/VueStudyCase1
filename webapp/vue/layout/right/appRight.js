(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/templateObject'
        ], factory);
    }else {
        global.appRight = factory();
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject) {

    Vue.component('app-right-template', {
        props: ['items'],
        template: templateObject['app-right-template']
    });


    return {};

});