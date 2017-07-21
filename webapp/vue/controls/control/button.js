(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/templateObject',
            'vue/core/mixins',
            'vue/data/constObject',
            'vue/data/eventMenuObject',
            'vue/data/contextMenuObject'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, mixins, constObject, eventMenuObject, contextMenuObject) {

    var type = 'button';
    var name = 'Button';
    var width = 120;
    var height = 60;
    var minWidth = 80;
    var minHeight = 40;
    var fill = 'rgb(198, 217, 241)';

    // Selection Icon
    var selections = [
        {
            direction: constObject.direction.NorthWest,
            type: 'close'
        },
        {
            direction: constObject.direction.NorthEast,
            type: 'add'
        }
    ];

    // Contexts
    var contexts = [
        contextMenuObject.doRefresh
    ];

    // Events
    var events = [
        eventMenuObject.click,
        eventMenuObject.dblClick
    ];

    Vue.component('app-control-button-template', {
        mixins: [mixins.getComponentMixin()],
        template: templateObject['app-control-button-template'],
        computed: {
            addButtonTransform: function() {
                return 'translate(' + (this.width - 20) + ', 5)';
            }
        },
        methods: {
            onMouseMove: function(e) {
                console.log('app-control-button', 'onMouseMove', e);
            },
            onMouseUp: function(e) {
                console.log('app-control-button', 'onMouseUp', e);
            },
            onClick: function(e) {
                console.log('app-control-button', 'onClick', e);
            // },
            // onMouseDownAddItem: function(e) {
            //     console.log('app-control-button', 'onMouseDownAddItem');
            }
        }
    });

    return {
        type: type,
        name: name,
        width: width,
        height: height,
        // minWidth: minWidth,
        // minHeight: minHeight,
        fill: fill,
        selections: selections,
        contexts: contexts,
        events: events
    };

});