(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/core/mixins'
        ], factory);
    }else {
        global.dummy = factory(
            global.mixins
        );
    }

})(typeof window !== 'undefined' ? window : this, function(mixins) {

    var type = 'dummy';
    var name = 'Button';
    var width = 120;
    var height = 60;
    var fill = 'rgb(198, 217, 241)';
    var rotate = 0;

    var generator = function() {
        return {
            left: 20,
            top: 20,
            type: type,
            name: name,
            width: width,
            height: height,
            rotate: rotate,
            fill: fill
        }
    };

    var button = generator();
    button.generator = generator;

    Vue.component('app-control-dummy', {
        mixins: [mixins.getComponentMixin()],
        template: '#app-control-dummy-template',
        // computed: {
        //     width: function() {
        //         return this.item.width ? this.item.width : 50;
        //     },
        //     height: function() {
        //         return this.item.height ? this.item.height : 50;
        //     },
        //     fill: function() {
        //         return this.item.fill ? this.item.fill : 'rgb(198, 217, 241)';
        //     },
        //     rx: function() {
        //         return 2;
        //     },
        //     ry: function () {
        //         return 2;
        //     },
        //     stroke: function () {
        //         return 'rgb(85, 142, 123)';
        //     },
        //     textTransform: function() {
        //         return 'translate(5, 5)';
        //     },
        //     addButtonTransform: function() {
        //         return 'translate(' + (this.width - 20) + ', 5)';
        //     }
        // },
        methods: {
            onMouseMove: function(e) {
                console.log('app-control-button', 'onMouseMove', e);
            },
            onMouseUp: function(e) {
                console.log('app-control-button', 'onMouseUp', e);
            },
            onClick: function(e) {
                console.log('app-control-button', 'onClick', e);
            },
            onMouseDownAddItem: function(e) {
                console.log('app-control-button', 'onMouseDownAddItem');
            }
        }
    });

    return button;

});