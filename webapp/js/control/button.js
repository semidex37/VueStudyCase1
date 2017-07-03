(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/core/mixins',
            'js/data/constObject',
        ], factory);
    }else {
        global.button = factory(
            global.mixins,
            global.constObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(mixins, constObject) {

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

    var contexts = [
        {
            type: 'doRefresh',
            icon: 'browser',
            name: 'doRefresh'
        // }, {
        //     type: 'setProperties',
        //     icon: 'button',
        //     name: 'SetProperties'
        // }, {
        //     type: 'clearData',
        //     name: 'ClearData'
        // }, {
        //     type: 'export',
        //     icon: 'polygon',
        //     name: 'Export'
        // }, {
        //     type: 'createRow',
        //     icon: 'chart',
        //     name: 'CreateRow'
        }
    ];

    Vue.component('app-control-button-template', {
        mixins: [mixins.getComponentMixin()],
        template: '#app-control-button-template',
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
        contexts: contexts
    };

});