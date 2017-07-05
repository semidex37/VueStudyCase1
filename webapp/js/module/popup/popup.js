(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/templateObject'
        ], factory);
    }else {
        global.popup = factory(
            global.templateObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject) {

    Vue.component('app-popup-container-template', {
        template: templateObject['app-popup-container-template']
    });


    Vue.component('app-popup-header-template', {
        template: templateObject['app-popup-header-template']
    });

    Vue.component('app-popup-body-template', {
        template: templateObject['app-popup-body-template']

    });

    Vue.component('app-popup-footer-template', {
        template: templateObject['app-popup-footer-template']

    });

    Vue.component('app-popup-buttons-template', {
        template: templateObject['app-popup-buttons-template'],
        data: function() {
            return {
                button: {
                    OK: "OK",
                    CANCEL: "CANCEL"
                }
            }
        }
    });

    Vue.component('app-popup-button-template', {
        props: ['type'],
        template: templateObject['app-popup-button-template']

    });

    Vue.component('app-popup-search-template', {
        template: templateObject['app-popup-search-template']

    });

    Vue.component('app-popup-tree-template', {
        template: templateObject['app-popup-tree-template']
    });

    new Vue({
        el: '#app-popup-search-controls'
    });

    return {};

});