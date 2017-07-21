(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/util/util',
            'vue/data/templateObject',
            'vue/data/eventObject',
            'vue/data/publicObject'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(util, templateObject, eventObject, publicObject) {

    Vue.component('app-popup-search-container-template', {
        template: templateObject['app-popup-search-container-template'],
        props: {
            data: {
                type: Object,
                require: true
            }
        },
        computed: {
            styleObject: function() {
                return 'left:' + this.data.left + 'px;'
                    + ' top: ' + this.data.top + 'px;';
            }
        },
        methods: {
            onMouseDrag: function(e) {
                // console.log('app-popup-container-template', "onMouseDrag");

                var elPoint = util.mouseEvent.CalculatorMousePoint(document.getElementById('app'), e.clientX, e.clientY);
                var x, y;

                x = elPoint.X - eventObject.MouseDownDiffPoint.X;
                y = elPoint.Y - eventObject.MouseDownDiffPoint.Y;

                this.data.left = x;
                this.data.top = y;
            },
            onFooterClick: function(e, data) {
                // console.log('onFooterClick', e);

                switch(data.action) {
                    case 'method':
                        if(typeof this.data.vue[data.type] == 'function') {
                            this.data.vue[data.type](e);
                        }else {
                            console.log('Not Found Function!', data.type);
                        }
                        break;
                }



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
                // console.log("app-popup-header-template: onClick", e, obj);
            },
            onMouseDown: function(e) {
                this.isDrag = true;
                eventObject.setMousePoint(this, e);
                // console.log('app-popup-header-template', "onMouseDown", e);

            },
            onMouseMove: function(e) {
                if(this.isDrag) {
                    // console.log('app-popup-header-template', "onMouseMove", e);
                    this.$emit('onMouseMove', e);
                }
            },
            onMouseUp: function(e) {
                // console.log('app-popup-header-template', "onMouseUp", e);
                this.isDrag = false;
            }
        }
    });

    Vue.component('app-popup-body-template', {
        template: templateObject['app-popup-body-template'],
        props: {
            data: {
                type: Object,
                require: true
            }
        }
    });

    Vue.component('app-popup-footer-template', {
        template: templateObject['app-popup-footer-template'],
        props: {
            buttons: {
                type: Array,
                require: true
            }
        },
        methods: {
            onClick: function(e, data) {
                // console.log('app-popup-footer-template: onClick', e);
                this.$emit('onFooterClick', e, data);
            }
        }
    });

    Vue.component('app-popup-buttons-template', {
        template: templateObject['app-popup-buttons-template'],
        props: {
            buttons: {
                type: Array,
                require: true
            }
        },
        methods: {
            onClick: function(e, data) {
                // console.log('app-popup-buttons-template: onClick', e);
                this.$emit('onPopupButtonsClick', e, data);
            }
        }
    });

    Vue.component('app-popup-button-template', {
        props: {
            data: {
                type: Object,
                require: true
            }
        },
        template: templateObject['app-popup-button-template'],
        methods: {
            onClick: function(e) {
                // console.log('app-popup-button-template: onClick', this.data.text);
                this.$emit('onPopupButtonClick', e, this.data);
            }
        }
    });

    Vue.component('app-popup-search-template', {
        template: templateObject['app-popup-search-template']

    });

    Vue.component('app-popup-tree-template', {
        template: templateObject['app-popup-tree-template'],
        props: {
            data: {
                type: Object,
                require: true
            }
        }
    });

    return {};

});