(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/templateObject',
            'js/popup/contextMenu',
            'js/popup/eventMenu',
        ], factory);
    }else {
        global.appPopup = factory(
            global.contextMenu,
            global.eventMenu
        );
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, contextMenu, eventMenu) {

    Vue.component('app-popup-template', {
        props: ['dataObject'],
        template: templateObject['app-popup-template']
    });

    return {};

});