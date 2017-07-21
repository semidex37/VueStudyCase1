(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/publicObject',
            'vue/data/templateObject'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, templateObject) {

    Vue.component('app-paper-template', {
        template: templateObject['app-paper-template'],
        computed: {
            classObject: function() {
                var paperSize = 'app-paper-grid-'+publicObject.PaperSize;
                var classObject = {};
                classObject[paperSize] = true;

                return classObject;
            }
        }
    });

    return {};

});