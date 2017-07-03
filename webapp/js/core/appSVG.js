(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/itemObject',
            'js/data/eventObject'
        ], factory);
    }else {
        global.appSVG = factory(
            global.publicObject,
            global.itemObject,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, itemObject, eventObject) {

    Vue.component('app-svg-template', {
        props: ['dataObject'],
        template: '#app-svg-template',
        computed: {
            id: function () {
                return 'app-controls';
            },
            items: function() {
                return this.itemObject;
            },
            transform: function() {
                var zoomToFit = publicObject.ZoomToFit / 100;
                return 'matrix('+zoomToFit+',0,0,'+zoomToFit+',0,0)';
            },
            classObject: function() {
                return {

                };
            }
        },
        methods: {
            onMouseDownLeft: function(e) {
                console.log('app-svg', 'onMouseDownLeft');
                // publicObject.ActiveObject = null;
            },
            onMouseMove: function(e) {
                eventObject.ControlDrag(e);
            },
            onMouseUpLeft: function() {
                console.log('app-svg', 'onMouseUpLeft');
                eventObject.disableMouseMode();
            },
            onClickLeft: function () {
                if(eventObject.ActiveObject) {
                    eventObject.ActiveObject = null;
                }
            }
        }
    });

    return {};

});