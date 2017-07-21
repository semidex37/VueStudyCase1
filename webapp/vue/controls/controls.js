(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/templateObject',
            'vue/data/publicObject',
            'vue/data/eventObject',
            'vue/data/itemObject',
            'vue/util/util',
            'vue/controls/dummy/dummy',
            'vue/controls/control/button',
            'vue/controls/arrow/arrow',
            'vue/controls/event/doRefresh'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, publicObject, eventObject, itemObject, util, dummy, button) {
    // console.log("Loaded: controls");

    var controls = {};

    // controls
    Vue.component('app-controls-template', {
        props: {
            dataObject: {
                type: Object
            }
        },
        template: templateObject['app-controls-template'],
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
        template: templateObject['app-control-template'],
        computed: {
            left: function() {
                return this.item.left;
            },
            top: function() {
                return this.item.top;
            },
            transform: function() {
                return 'translate('+this.left+', '+this.top+')';
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

    return {};

});