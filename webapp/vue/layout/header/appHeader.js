(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/publicObject',
            'vue/data/dataObject',
            'vue/data/templateObject'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, dataObject, templateObject) {

    // console.log("appHeader-publicObject", publicObject);

    Vue.component('app-header-template', {
        // props: ['groups'],
        props: {
            groups: Object
        },
        template: templateObject['app-header-template']
    });

    Vue.component('app-header-group-template', {
        // props: ['group', 'index'],
        props: {
            group: Object,
            index: Number,
            data: {
                type: Number,
                default: 37
            }
        },
        template: templateObject['app-header-group-template'],
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

    Vue.component('app-header-item-template', {
        // props: ['item', 'index', 'pIndex'],
        props: {
            item: Object,
            index: Number,
            pIndex: String
        },
        template: templateObject['app-header-item-template'],
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
                return value;
            },
            showMessage: function(message) {
                alert(message);

                // test
                console.log('Clear-itemObject', dataObject.itemObject.children.length);

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