(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/control/controls'
        ], factory);
    }else {
        global.appCenter = factory(global.publicObject, global.controls);
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, controls) {

    Vue.component('app-center', {
        props: ['dataObject', 'items'],
        template: '#app-center-template'
    });

    console.log("appCenter-publicObject", publicObject);

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

    Vue.component('app-svg', {
        props: ['dataObject'],
        template: '#app-svg-template',
        computed: {
            id: function () {
                return 'app-controls';
            },
            items: function() {
                return this.dataObject.itemObject
            },
            transform: function() {
                var zoomToFit = publicObject.ZoomToFit / 100;
                return 'matrix('+zoomToFit+',0,0,'+zoomToFit+',0,0)';
            },
            classObject: function() {
                return {

                };
            }
        }
    });

    Vue.component('app-panel', {
        props: ['dataObject'],
        template: '#app-panel-template'
    });

    Vue.component('app-popup', {
        props: ['dataObject'],
        template: '#app-popup-template'
    });

    Vue.component('app-mini-map', {
        props: ['dataObject'],
        template: '#app-mini-map-template'
    });

    return {};

});