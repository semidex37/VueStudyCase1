(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/publicObject',
            'vue/data/eventObject',
            'vue/data/templateObject',
            'vue/core/appPanel',
            'vue/core/appSelection',
            'vue/core/appPaper',
            'vue/core/appMiniMap',
            'vue/core/appSVG',
            'vue/core/appPopup',
            'vue/controls/controls'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(
    publicObject,
    eventObject,
    templateObject,
    appPanel,
    appPaper,
    appMiniMap,
    appSVG,
    appPopup,
    controls) {

    Vue.component('app-center-template', {
        props: ['dataObject', 'items'],
        template: templateObject['app-center-template']
    });

    return {};

});