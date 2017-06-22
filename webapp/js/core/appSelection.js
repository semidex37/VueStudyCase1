(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/core/mixins'
        ], factory);
    }else {
        global.appSelection = factory(
            global.publicObject,
            global.eventObject,
            global.mixins
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, mixins) {

    Vue.component('app-selection', {
        mixins: [mixins.getPanelMixin()],
        template: '#app-selection-template'
    });

    return {};

});