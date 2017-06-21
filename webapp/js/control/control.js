(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/eventObject'
        ], factory);
    }else {
        global.controlInterface = factory(
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(eventObject) {

    var getMixin = function() {
        return {
            props: {
                item: {
                    type: Object,
                    require: true
                },
                left: {
                    type: Number,
                    default: 20
                },
                top: {
                    type: Number,
                    default: 20
                }
            },
            computed: {
                width: function() {
                    return this.item.width ? this.item.width : 50;
                },
                height: function() {
                    return this.item.height ? this.item.height : 50;
                },
                fill: function() {
                    return this.item.fill ? this.item.fill : 'rgb(198, 217, 241)';
                },
                rx: function() {
                    return 2;
                },
                ry: function () {
                    return 2;
                },
                stroke: function () {
                    return 'rgb(85, 142, 123)';
                },
                textTransform: function() {
                    return 'translate(5, 5)';
                },
                addButtonTransform: function() {
                    return 'translate(' + (this.width - 20) + ', 5)';
                }
            },
            methods: {
                onMouseDownLeft: function (e) {
                    eventObject.setActiveObject(this, e);
                }
            }
        };
    }

    var createComponent = function(name, args) {
        args['mixins'] = getMixin();
        Vue.component(name, args);
    };

    return {
        getMixin: getMixin,
        CreateComponent: createComponent
    };

});