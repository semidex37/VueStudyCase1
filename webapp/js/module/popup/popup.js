(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/util/util',
            'js/data/templateObject',
            'js/data/eventObject'
        ], factory);
    }else {
        global.popup = factory(
            global.util,
            global.templateObject,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(util, templateObject, eventObject) {

    Vue.component('app-popup-container-template', {
        template: templateObject['app-popup-container-template'],
        props: {
            title: {
                type: String,
                default: 'Search Controls.'
            },
            headerIcons: {
                type: Array
            },
            isHeader: {
                type: Boolean,
                default: true
            },
            isBody: {
                type: Boolean,
                default: true
            },
            isFooter: {
                type: Boolean,
                default: true
            }
        },
        data: function() {
            return {
                left: 300,
                top: 300,
            }
        },
        computed: {
            styleObject: function() {
                // console.log(this.left, this.top);

                // return 'left: 300px; top:300px';

                return 'left:' + this.left + 'px;'
                    + ' top: ' + this.top + 'px;';
            }
        },
        methods: {
            onMouseDrag: function(e) {
                // console.log('app-popup-container-template', "onMouseDrag");

                var elPoint = util.mouseEvent.CalculatorMousePoint(document.getElementById('app'), e.clientX, e.clientY);
                var x, y;

                x = elPoint.X - eventObject.MouseDownDiffPoint.X;
                y = elPoint.Y - eventObject.MouseDownDiffPoint.Y;

                this.left = x;
                this.top = y;
            }
        }
    });

    Vue.component('app-popup-header-template', {
        template: templateObject['app-popup-header-template'],
        props: {
            title: {
                type: String
            },
            headerIcons: {
                type: Array
            }
        },
        data: function() {
            return {
                isDrag: false
            }
        },
        methods: {
            onClick: function(e, obj) {
                console.log("app-popup-header-template: onClick", e, obj);
            },
            onMouseDown: function(e) {
                this.isDrag = true;
                eventObject.setMousePoint(this, e);
                console.log('app-popup-header-template', "onMouseDown", e);

            },
            onMouseMove: function(e) {
                if(this.isDrag) {
                    // console.log('app-popup-header-template', "onMouseMove", e);
                    this.$emit('onMouseMove', e);
                }
            },
            onMouseUp: function(e) {
                console.log('app-popup-header-template', "onMouseUp", e);
                this.isDrag = false;
            }
        }
    });

    Vue.component('app-popup-body-template', {
        template: templateObject['app-popup-body-template']

    });

    Vue.component('app-popup-footer-template', {
        template: templateObject['app-popup-footer-template']

    });

    Vue.component('app-popup-buttons-template', {
        template: templateObject['app-popup-buttons-template'],
        data: function() {
            return {
                button: {
                    OK: "OK",
                    CANCEL: "CANCEL"
                }
            }
        }
    });

    Vue.component('app-popup-button-template', {
        props: ['type'],
        template: templateObject['app-popup-button-template']

    });

    Vue.component('app-popup-search-template', {
        template: templateObject['app-popup-search-template']

    });

    Vue.component('app-popup-tree-template', {
        template: templateObject['app-popup-tree-template']
    });

    new Vue({
        el: '#app-popup-search-controls',
        data: {
            title: 'Search Controls',
            headerIcons: [
                {
                    type: 'image',
                    icon: 'app-icon-selection-close',
                    text: 'Add'
                }, {
                    type: 'image',
                    icon: 'app-icon-selection-add',
                    text: 'Close'
                }
            ],
            isHeader: true,
            isBody: true,
            isFooter: true
        }
    });

    return {};

});