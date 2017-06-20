(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/control/controls',
            'js/util/util'
        ], factory);
    }else {
        global.appCenter = factory(
            global.publicObject,
            global.eventObject,
            global.controls,
            globa.util
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, controls, util) {

    Vue.component('app-center', {
        props: ['dataObject', 'items'],
        template: '#app-center-template'
    });

    console.log("appCenter-publicObject", publicObject);

    Vue.component('app-paper', {
        props: ['dataObject'],
        template: '#app-paper-template',
        computed: {
            classObject: function() {
                // var paperSize = 'app-paper-grid-'+this.dataObject.publicObject.root.PaperSize;
                var paperSize = 'app-paper-grid-'+publicObject.PaperSize;
                var classObject = {};
                classObject[paperSize] = true;

                return classObject;
            }
        }
    });

    Vue.component('app-svg', {
        props: ['dataObject'],
        template: '#app-svg-template',
        computed: {
            id: function () {
                return 'app-controls';
            },
            items: function() {
                return this.dataObject.itemObject
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

                if(eventObject.ActiveObject
                    && eventObject.isDrag) {
                    eventObject.ControlDrag(document.getElementById('app-svg'), e);
                }

            },
            onMouseUpLeft: function() {
                console.log('app-svg', 'onMouseUpLeft');
                if(eventObject.isDrag) {
                    eventObject.isDrag = false;
                }
            },
            onClickLeft: function () {
                if(eventObject.ActiveObject) {
                    eventObject.ActiveObject = null;
                }
            }
        }
    });

    Vue.component('app-panel', {
        props: ['dataObject'],
        data: function() {
            return {
                // direction: ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']
                direction: ['nw', 'ne', 'se', 'sw']
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
                    console.log('app-panel', 'calculatorRect', eventObject.ActiveObject.item.left);
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
                console.log('app-panel', 'onMouseDownLeft');
                if(eventObject) {
                    eventObject.isDrag = true;

                    var elPoint = util.mouseEvent.CalculatorMousePoint(this.$el, e.clientX, e.clientY);
                    // console.log('app-panel', 'onMouseDownLeft', 'elPoint', elPoint.X, elPoint.Y);

                    eventObject.MouseDownDiffPoint.X = elPoint.X;
                    eventObject.MouseDownDiffPoint.Y = elPoint.Y;

                    console.log('app-panel', 'onMouseDownLeft', eventObject.ActiveObject.item.id, e.clientX, e.clientY);
                }
            },
            onMouseMove: function (e){
                // console.log('app-panel', 'onMouseMove');
                if(eventObject.ActiveObject
                    && eventObject.isDrag) {
                    // console.log('app-panel', 'onMouseDrag', eventObject.ActiveObject.item.id);

                    eventObject.ControlDrag(document.getElementById('app-svg'), e);

                    // var svg = document.getElementById('app-svg');
                    // var svgPoint = util.mouseEvent.CalculatorMousePoint(svg, e.clientX, e.clientY);
                    //
                    // eventObject.ActiveObject.item.left = svgPoint.X - eventObject.MouseDownDiffPoint.X;
                    // eventObject.ActiveObject.item.top = svgPoint.Y - eventObject.MouseDownDiffPoint.Y;
                    //
                    // console.log('app-panel', 'onMouseDrag', eventObject.ActiveObject.item.id,
                    //     eventObject.ActiveObject.item.left, eventObject.ActiveObject.item.top);

                }
            },
            onMouseUpLeft: function (){
                console.log('app-panel', 'onMouseUpLeft');
                if(eventObject.ActiveObject) {
                    eventObject.isDrag = false;
                }
            },

            onResizeDown: function(value) {
                console.log('app-panel', 'onResizeDown', value);
                if(eventObject) {
                    eventObject.isDrag = false;
                    eventObject.isResize = true;
                }

            },
            onResizeMove: function(value) {
                console.log('app-panel', 'onResizeMove', value);

            },
            onResizeUp: function(value) {
                console.log('app-panel', 'onResizeUp', value);

            },
        }
    });

    Vue.component('app-popup', {
        props: ['dataObject'],
        template: '#app-popup-template'
    });

    Vue.component('app-mini-map', {
        props: ['dataObject'],
        template: '#app-mini-map-template'
    });

    return {};

});