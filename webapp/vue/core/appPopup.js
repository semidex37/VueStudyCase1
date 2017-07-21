(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/templateObject',
            'vue/context/contextMenu',
            'vue/popup/eventMenu',
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, contextMenu, eventMenu) {

    Vue.component('app-popup-template', {
        props: ['dataObject'],
        template: templateObject['app-popup-template']
    });

    return {};

});