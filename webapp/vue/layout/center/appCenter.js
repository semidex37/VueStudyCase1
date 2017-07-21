(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/data/templateObject',
            'js/core/appPanel',
            'js/core/appSelection',
            'js/core/appPaper',
            'js/core/appMiniMap',
            'js/core/appSVG',
            'js/core/appPopup',
            'js/controls/controls'
        ], factory);
    }else {
        global.appCenter = factory(
            global.publicObject,
            global.eventObject,
            global.appPanel,
            global.appSelection,
            global.appPaper,
            global.appMiniMap,
            global.appSVG,
            global.appPopup,
            global.controls
        );
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