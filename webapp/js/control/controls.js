(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/data/itemObject',
            'js/util/util'
        ], factory);
    }else {
        global.controls = factory(
            global.publicObject,
            global.eventObject,
            global.itemObject,
            global.util
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, itemObject, util) {
    console.log("Loaded: controls");

    var controls = {};

    // controls
    Vue.component('app-controls', {
        props: {
            dataObject: {
                type: Object
            }
        },
        template: '#app-controls-template',
        computed: {
            itemObject: function() {
                return itemObject;
            }
        }
    });

    // control
    Vue.component('app-control', {
        props: {
            index: {
                type: Number
            },
            item: {
                type: Object,
                required: true
            },
        },
        template: '#app-control-template',
        computed: {
            left: function() {
                return this.item.left ? this.item.left : 20;
            },
            top: function() {
                return this.item.top ? this.item.top : 20;
            },
            // left: function() {
            //     return 20 + (150 * this.index);
            // },
            // top: function() {
            //     return 20;
            // },
            transform: function() {
                return 'translate('+this.left+', '+this.top+')'
            }
        }
    });

    // util.CalculatorMousePoint;

    // button
    Vue.component('app-control-button', {
        props: {
            item: {
                type: Object
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
        template: '#app-control-button-template',
        data: function() {
            return {
                isDrag: false,
                MouseDownPointX: 0,
                MouseDownPointY: 0
            };
        },
        computed: {
            // left: function() {
            //     return this.item.left ? this.item.left : 20;
            // },
            // top: function() {
            //     return this.item.top ? this.item.top : 20;
            // },
            width: function() {
                console.log("this.item", this.item);
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
            // setMouseDownPoint: function(x, y) {
            //     this.MouseDownPointX = x;
            //     this.MouseDownPointY = y;
            //     console.log("setMouseDownPoint", '[', this.MouseDownPointX, this.MouseDownPointY, ']');
            // },
            // // setMouseDownPoint: function(args) {
            // //     this.MouseDownPointX = args.x;
            // //     this.MouseDownPointY = args.y;
            // //     console.log("setMouseDownPoint", '[', this.MouseDownPointX, this.MouseDownPointY, ']');
            // // },
            // setMouseDragPoint: function(x, y) {
            //     this.MouseDragPointX = x;
            //     this.MouseDragPointY = y;
            //     console.log("setMouseDragPoint", '[', this.MouseDragPointX, this.MouseDragPointY, ']');
            // },
            onMouseDownLeft: function(e) {
                eventObject.setActiveObject(this, e);
                // eventObject.setSelection(this, e);
            },
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

    // arrow
    Vue.component('app-control-arrow', {
        template: '#app-control-arrow-template'
    });


    // new Vue('', {
    //     el: '#app-controls',
    //     data: {
    //
    //     }
    // });


    return {};

});