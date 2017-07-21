(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/publicObject',
            'vue/data/templateObject',
            'vue/data/popupObject',
            'vue/module/popup/popup',
            'vue/module/tree/tree'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(
    publicObject,
    templateObject,
    popupObject,
    popup,
    tree) {
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