(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.appHeader = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {

    Vue.component('app-footer', {
        template: '#app-footer-template'
    });

    return {
        init: function() {
            new Vue({
                el: '#app-footer'
            });
        }
    };

});