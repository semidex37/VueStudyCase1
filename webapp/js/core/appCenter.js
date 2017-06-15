(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.appCenter = factory();
    }

})(typeof window !== 'undefined' ? window : this, function(/* RGBColor, stackBlur */) {

    Vue.component('app-center', {
        props: ['items'],
        template: '#app-center-template'
    });



    return {};

});