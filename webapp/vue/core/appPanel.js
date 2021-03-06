(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/publicObject',
            'vue/data/eventObject',
            'vue/data/templateObject',
            'vue/core/mixins'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, templateObject, mixins) {

    Vue.component('app-panel-template', {
        mixins: [mixins.getPanelMixin()],
        data: function() {
            return {
                direction: ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']
                // direction: ['nw', 'ne', 'se', 'sw']
            }
        },
        template: templateObject['app-panel-template'],
        computed: {
            isActiveObject: function() {
                return eventObject.ActiveObject != null
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
                eventObject.disableMouseMode();
            },

            onResizeDown: function(e, value) {
                console.log('app-panel', 'onResizeDown', value);
                eventObject.setSelection(this, e);
                eventObject.enableMouseResize(value);
            },
            onResizeUp: function(value) {
                console.log('app-panel', 'onResizeUp', value);
                eventObject.disableMouseMode();
            },
        }
    });

    return {};

});