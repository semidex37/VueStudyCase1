(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/popup/contextMenu',
            'js/popup/eventMenu',
        ], factory);
    }else {
        global.appPopup = factory(
            global.contextMenu,
            global.eventMenu
        );
    }

})(typeof window !== 'undefined' ? window : this, function(contextMenu, eventMenu) {

    Vue.component('app-popup-template', {
        props: ['dataObject'],
        template: '#app-popup-template'
    });

    return {};

});