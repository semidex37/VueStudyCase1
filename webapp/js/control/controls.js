(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/data/itemObject',
            'js/util/util',
            'js/control/dummy',
            'js/control/button'
        ], factory);
    }else {
        global.controls = factory(
            global.publicObject,
            global.eventObject,
            global.itemObject,
            global.util,
            global.dummy,
            global.button,
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, itemObject, util, dummy, button) {
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