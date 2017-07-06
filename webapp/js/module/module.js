(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/templateObject',
            'js/data/popupObject',
            'js/module/popup/popup'
        ], factory);
    }else {
        global.popup = factory(
            global.publicObject,
            global.templateObject,
            global.popupObject,
            global.popup
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, templateObject, popupObject, popup) {
    // console.log("Loaded module!");

    Vue.component('app-popup-container-template', {
        props: {
            popupList: {
                type: Array
            }
        },
        template: templateObject['app-popup-container-template']
    });

    new Vue({
        el: '#app-popup-container',
        data: {
            popupList: popupObject.$popups
        }
    });

    return {};

});