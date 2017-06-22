(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject'
        ], factory);
    }else {
        global.appPaper = factory(
            global.publicObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject) {

    Vue.component('app-paper-template', {
        template: '#app-paper-template',
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