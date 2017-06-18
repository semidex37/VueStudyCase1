(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/dataObject',
            'js/core/appLeft',
            'js/core/appCenter',
            'js/core/appRight'
        ], factory);
    }else {
        global.appHeader = factory( global.dataObject, global.appLeft );
    }

})(typeof window !== 'undefined' ? window : this, function(dataObject, appLeft, appCenter, appRight) {

    console.log("appBody-dataObject", dataObject);

    Vue.component('app-body', {
        // props: ['leftObject', 'centerObject', 'rightObject', 'dataObject'],
        props: {
            dataObject: Object,
            // leftObject: Object,
            // centerObject: Object,
            // rightObject: Object
        },
        template: '#app-body-template'
    });

    Vue.component('currency-input', {
        template: '#app-test-template',
        props: {
            value: {
                type: Number,
                default: 0
            },
            label: {
                type: String,
                default: ''
            }
        },
        mounted: function () {
            this.formatValue()
        },
        methods: {
            updateValue: function (value) {
                var result = currencyValidator.parse(value, this.value);
                if (result.warning) {
                    this.$refs.input.value = result.value
                }
                console.log(this.$refs.input, this.label, result.value, this.value);
                this.$emit('input', result.value)
            },
            formatValue: function () {
                this.$refs.input.value = currencyValidator.format(this.value)
            },
            selectAll: function (event) {
                // Workaround for Safari bug
                // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
                setTimeout(function () {
                    event.target.select()
                }, 0)
            }
        }
    });

    new Vue({
        el: '#app-test',
        data: {
            price: 0,
            shipping: 0,
            handling: 0,
            discount: 0
        },
        computed: {
            total: function () {
                return ((
                    this.price * 100 +
                    this.shipping * 100 +
                    this.handling * 100 -
                    this.discount * 100
                ) / 100).toFixed(2)
            }
        }
    })

    return {
        init: function() {
            new Vue({
                el: '#app-body',
                data: {
                    dataObject: dataObject,
                    leftObject: {
                        menuItems: dataObject.leftMenuObject,
                        isSearch: true,
                        treeItems: dataObject.leftMenuTree
                    },
                    centerObject: {
                        paperSize: dataObject.headerObject.itemRange.itemRangeGridSize.value
                    },
                    rightObject: {}
                }
            });
        }
    };

});