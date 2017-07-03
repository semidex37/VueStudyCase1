(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject'
        ], factory);
    }else {
        global.mixins = factory(
            global.publicObject,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject) {

    var getComponentMixin = function() {
        return {
            props: {
                item: {
                    type: Object,
                    require: true
                }
                // left: {
                //     type: Number,
                //     default: 20
                // },
                // top: {
                //     type: Number,
                //     default: 20
                // }
            },
            computed: {
                left: function() {
                    return this.item.left;
                },
                top: function() {
                    return this.item.top;
                },
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
    };

    var createComponent = function(name, args) {
        args['mixins'] = getComponentMixin();
        Vue.component(name, args);
    };

    var getPanelMixin = function() {
        return {
            computed: {
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
                        left: left,
                        top: top,
                        width: width,
                        height: height,
                    };
                }
            }
        };
    };

    return {
        getComponentMixin: getComponentMixin,
        getPanelMixin: getPanelMixin,
        CreateComponent: createComponent
    };

});