(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/publicObject',
            'vue/data/eventObject',
            'vue/data/templateObject',
            'vue/core/appPanel',
            'vue/core/appSVG',
            'vue/controls/controls'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, templateObject, appPanel, appSVG, controls) {

    Vue.component('app-mini-map-template', {
        props: ['dataObject'],
        template: templateObject['app-mini-map-template'],
        computed: {
            transform: function() {
                var w = 150 / window.innerWidth;
                var h = 100 / window.innerHeight;

                return 'matrix('+w+',0,0,'+h+',0,0)';
            }
        }
    });

    return {};

});