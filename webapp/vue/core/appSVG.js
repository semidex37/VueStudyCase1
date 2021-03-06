(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/templateObject',
            'vue/util/generator',
            'vue/data/publicObject',
            'vue/data/itemObject',
            'vue/data/eventObject'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, generator, publicObject, itemObject, eventObject) {

    var controlsId = generator.GeneratorId('app-controls');

    Vue.component('app-svg-template', {
        props: ['dataObject'],
        template: templateObject['app-svg-template'],
        computed: {
            controlsId: function () {
                return controlsId;
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