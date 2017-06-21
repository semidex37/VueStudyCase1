(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/core/appPanel',
            'js/core/appSVG',
            'js/control/controls'
        ], factory);
    }else {
        global.appMiniMap = factory(
            global.publicObject,
            global.eventObject,
            global.controls
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, appPanel, appSVG, controls) {

    Vue.component('app-mini-map', {
        props: ['dataObject'],
        template: '#app-mini-map-template'
    });

    return {};

});