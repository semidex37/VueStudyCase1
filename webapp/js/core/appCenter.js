(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(['js/data/publicObject'], factory);
    }else {
        global.appCenter = factory(global.publicObject);
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject) {

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
                console.log("this.paperSize", publicObject.PaperSize);
                // var paperSize = 'app-paper-grid-'+this.dataObject.publicObject.root.PaperSize;
                var paperSize = 'app-paper-grid-'+publicObject.PaperSize;
                var classObject = {};
                classObject[paperSize] = true;

                return classObject;
            }
        }
    });

    Vue.component('app-svg', {
        props: ['items'],
        template: '#app-svg-template'
    });

    Vue.component('app-panel', {
        props: ['items'],
        template: '#app-panel-template'
    });

    Vue.component('app-popup', {
        props: ['items'],
        template: '#app-popup-template'
    });

    Vue.component('app-mini-map', {
        props: ['items'],
        template: '#app-mini-map-template'
    });

    return {};

});