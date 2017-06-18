(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/dataObject'
        ], factory);
    }else {
        global.appHeader = factory(
            global.publicObject,
            global.dataObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, dataObject) {

    // console.log("appHeader-publicObject", publicObject);

    Vue.component('app-header', {
        // props: ['groups'],
        props: {
            groups: Object
        },
        template: '#app-header-template'
    });

    Vue.component('app-header-group', {
        // props: ['group', 'index'],
        props: {
            group: Object,
            index: Number,
            data: {
                type: Number,
                default: 37
            }
        },
        template: '#app-header-group-template',
        computed: {
        },
        methods: {
            getId: function() {
                return 'app-header-group-' + this.index;
            },
            pIndex: function(index) {
                return this.index + '-' + index;
            }
        }
    });

    Vue.component('app-header-item', {
        // props: ['item', 'index', 'pIndex'],
        props: {
            item: Object,
            index: Number,
            pIndex: String
        },
        template: '#app-header-item-template',
        computed: {
            classObject: function() {
                return {
                    'app-header-item': true,
                    'app-header-icon': this.item.type == 'Icon',
                    'app-header-button': this.item.type == 'Button',
                    'app-header-range': this.item.type == 'Range'
                }
            }
        },
        methods: {
            getId: function() {
                return 'app-header-item-' + this.pIndex
            },
            updateSize: function(value) {
                if(typeof this.item.changed == 'function') {
                    this.item.changed(value);
                }
            },
            result: function() {
                var value = "";
                if(this.item.hasOwnProperty('preValue')) {
                    value = this.item.preValue;
                }
                value += this.item.value;
                if(this.item.hasOwnProperty('afterValue')) {
                    value += this.item.afterValue;
                }
                console.log("result", value);
                return value;
            }
        }
    });

    return {
        init: function() {
            new Vue({
                el: '#app-header',
                data: {
                    groups: dataObject.headerObject.root
                }
            });
        }
    };

});