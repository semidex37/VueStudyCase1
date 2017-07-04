(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/data/itemObject',
            'js/util/util',
            'js/controls/dummy',
            'js/controls/control/button',
            'js/controls/arrow/arrow',
            'js/controls/event/doRefresh',
        ], factory);
    }else {
        global.controls = factory(
            global.publicObject,
            global.eventObject,
            global.itemObject,
            global.util,
            global.dummy,
            global.button
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, itemObject, util, dummy, button) {
    // console.log("Loaded: controls");

    var controls = {};

    // controls
    Vue.component('app-controls-template', {
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
    Vue.component('app-control-template', {
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
                return this.item.left;
            },
            top: function() {
                return this.item.top;
            },
            transform: function() {
                // console.log('translate('+this.left+', '+this.top+')');
                // if(this.item.type == 'arrow') {
                //     var source = this.item.source;
                //
                //     return 'translate('+ (source.left+source.width) + ', ' + (source.top + source.height/2) +')';
                //
                // }else {
                    return 'translate('+this.left+', '+this.top+')';
                // }
            },
            rotate: function() {
                if(this.item.rotate == 0) return '';

                return 'rotate(' + this.item.rotate + ', 85, 60)';
            },
            fillOpacity: function() {
                if(typeof this.item.fillOpacity == 'undefined') return 1;
                return this.item.fillOpacity;
            }
        }
    });

    // util.CalculatorMousePoint;


    // new Vue('', {
    //     el: '#app-controls',
    //     data: {
    //
    //     }
    // });


    return {};

});