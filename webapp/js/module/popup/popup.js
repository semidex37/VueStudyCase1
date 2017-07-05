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
        template: '#app-popup-container-template'
    });


    Vue.component('app-popup-header-template', {
        template: '#app-popup-header-template'
    });

    Vue.component('app-popup-body-template', {
        template: '#app-popup-body-template'

    });

    Vue.component('app-popup-footer-template', {
        template: '#app-popup-footer-template'

    });

    Vue.component('app-popup-buttons-template', {
        template: '#app-popup-buttons-template',
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
        template: '#app-popup-button-template'

    });

    Vue.component('app-popup-search-template', {
        template: '#app-popup-search-template'

    });

    Vue.component('app-popup-tree-template', {
        template: '#app-popup-tree-template'
    });

    new Vue({
        el: '#app-popup-search-controls'
    });

    return {};

});