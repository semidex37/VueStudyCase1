(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject'
        ], factory);
    }else {
        global.appPanel = factory(
            global.publicObject,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject) {

    Vue.component('app-panel', {
        props: ['dataObject'],
        data: function() {
            return {
                direction: ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']
                // direction: ['nw', 'ne', 'se', 'sw']
            }
        },
        template: '#app-panel-template',
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

                if(eventObject.ActiveObject) {
                    // console.log('app-panel', 'calculatorRect', eventObject.ActiveObject.item.left);
                    left = eventObject.ActiveObject.item.left;
                    top = eventObject.ActiveObject.item.top;
                    width = eventObject.ActiveObject.item.width;
                    height = eventObject.ActiveObject.item.height;
                }

                return {
                    left: left,
                    top: top,
                    width: width,
                    height: height,
                }
            }
        },
        methods: {
            onMouseDownLeft: function (e){
                eventObject.setSelection(this, e);
            },
            onMouseMove: function (e){
                eventObject.ControlDrag(e);
            },
            onMouseUpLeft: function (){
                console.log('app-panel', 'onMouseUpLeft');
                eventObject.disableMouseDrag();
                eventObject.disableMouseResize();
            },

            onResizeDown: function(e, value) {
                console.log('app-panel', 'onResizeDown', value);
                eventObject.setSelection(this, e);
                eventObject.enableMouseResize(value);

            },
            onResizeUp: function(value) {
                console.log('app-panel', 'onResizeUp', value);
                eventObject.disableMouseDrag();
                eventObject.disableMouseResize();
            },
        }
    });

    return {};

});