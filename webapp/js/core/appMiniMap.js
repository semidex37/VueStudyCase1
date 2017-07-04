(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'publicObject',
            'eventObject',
            'js/core/appPanel',
            'js/core/appSVG',
            'js/controls/controls'
        ], factory);
    }else {
        global.appMiniMap = factory(
            global.publicObject,
            global.eventObject,
            global.controls,
            global.appSVG,
            global.controls
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, appPanel, appSVG, controls) {

    Vue.component('app-mini-map-template', {
        props: ['dataObject'],
        template: '#app-mini-map-template',
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