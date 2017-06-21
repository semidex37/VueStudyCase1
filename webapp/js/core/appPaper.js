(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/core/appPanel',
            'js/core/appSVG',
            'js/control/controls'
        ], factory);
    }else {
        global.appPaper = factory(
            global.publicObject,
            global.eventObject,
            global.controls
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, appPanel, appSVG, controls) {

    Vue.component('app-paper', {
        props: ['dataObject'],
        template: '#app-paper-template',
        computed: {
            classObject: function() {
                // var paperSize = 'app-paper-grid-'+this.dataObject.publicObject.root.PaperSize;
                var paperSize = 'app-paper-grid-'+publicObject.PaperSize;
                var classObject = {};
                classObject[paperSize] = true;

                return classObject;
            }
        }
    });

    return {};

});