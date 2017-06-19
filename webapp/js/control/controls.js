(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/itemObject'
        ], factory);
    }else {
        global.controls = factory(
            globa.itemObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(itemObject) {
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
                return 20 + (120 * this.index);
            },
            top: function() {
                return 20;
            },
            transform: function() {
                return 'translate('+this.left+', '+this.top+')'
            }
        }
    });

    // button
    Vue.component('app-control-button', {
        props: {
            item: {
                type:Object
            },
            height: {
                type:Number,
                default: 100
            }
        },
        template: '#app-control-button-template',
        computed: {
            width: function() {
                return this.item.width;
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