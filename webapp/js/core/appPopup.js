(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/popup/contextMenu'
        ], factory);
    }else {
        global.appPopup = factory(
            global.contextMenu
        );
    }

})(typeof window !== 'undefined' ? window : this, function(contextMenu) {

    Vue.component('app-popup-template', {
        props: ['dataObject'],
        template: '#app-popup-template'
    });

    return {};

});