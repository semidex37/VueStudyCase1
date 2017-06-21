(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/eventObject',
            'js/control/control'
        ], factory);
    }else {
        global.button = factory(
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(eventObject, control) {

    var type = 'button';
    var name = 'Button';
    var width = 120;
    var height = 60;
    var fill = 'rgb(198, 217, 241)';

    var generator = function() {
        return {
            left: 20,
            top: 20,
            type: type,
            name: name,
            width: width,
            height: height,
            fill: fill
        }
    };

    var button = generator();
    button.generator = generator;

    Vue.component('app-control-button', {
        mixins: [control.getMixin()],
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
            },
            onMouseDownAddItem: function(e) {
                console.log('app-control-button', 'onMouseDownAddItem');
            }
        }
    });

    return button;

});