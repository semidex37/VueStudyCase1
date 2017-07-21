(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/templateObject'
        ], factory);
    }else {
        global.appHeader = factory();
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject) {

    Vue.component('app-footer-template', {
        template: templateObject['app-footer-template']
    });

    return {
        init: function() {
            new Vue({
                el: '#app-footer'
            });
        }
    };

});