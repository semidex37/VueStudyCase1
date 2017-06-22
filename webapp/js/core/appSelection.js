(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject'
        ], factory);
    }else {
        global.appSelection = factory(
            global.publicObject,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject) {

    Vue.component('app-selection', {
        template: '#app-selection-template',
        computed: {
            isActiveObject: function() {
                return eventObject.ActiveObject != null
            },
            styleObject: function() {
                var rect = this.calculatorRect;
                return 'left:' + rect.left + 'px;'
                    + ' top:' + rect.top + 'px;'
                    + 'width: ' + rect.width + 'px;'
                    + 'height:' + rect.height + 'px;';
            },
            calculatorRect: function() {
                var left = 0;
                var top = 0;
                var width = 0;
                var height = 0;
                var zoomToFitRatio;

                if(eventObject.ActiveObject) {
                    zoomToFitRatio = publicObject.ZoomToFit / 100;
                    left = eventObject.ActiveObject.item.left * zoomToFitRatio;
                    top = eventObject.ActiveObject.item.top * zoomToFitRatio;
                    width = eventObject.ActiveObject.item.width * zoomToFitRatio;
                    height = eventObject.ActiveObject.item.height * zoomToFitRatio;
                }

                return {
                    left: left + 5,
                    top: top + 5,
                    width: width - 10,
                    height: height - 10,
                }
            }
        }
    });

    return {};

});