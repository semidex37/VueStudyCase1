(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.appRight = factory();
    }

})(typeof window !== 'undefined' ? window : this, function(/* RGBColor, stackBlur */) {

    Vue.component('app-right-template', {
        props: ['items'],
        template: '#app-right-template'
    });


    return {};

});