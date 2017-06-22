(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject'
        ], factory);
    }else {
        global.contextMenu = factory(
            global.publicObject,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject) {

    var contextMarginLeft = 30; // 10
    var contextMarginTop = -30; // -5

    Vue.component('app-contexts-template', {
        data: function() {
            return {
                contexts: [
                    {
                        type: 'refresh',
                        icon: 'browser',
                        name: 'Refresh'
                    }, {
                        type: 'setProperties',
                        icon: 'button',
                        name: 'SetProperties'
                    }, {
                        type: 'clearData',
                        name: 'ClearData'
                    }, {
                        type: 'export',
                        icon: 'polygon',
                        name: 'Export'
                    }, {
                        type: 'createRow',
                        icon: 'chart',
                        name: 'CreateRow'
                    }
                ]
            }
        },
        template: '#app-contexts-template',
        computed: {
            isContextObject: function() {
                return eventObject.isPopup;
            },
            styleObject: function() {
                var rect = this.calculatorRect;
                return 'left:' + rect.left + 'px;'
                    + ' top:' + rect.top + 'px;';
            },
            calculatorRect: function() {
                var left = 0;
                var top = 0;
                var width = 0;
                var zoomToFitRatio;

                if(eventObject.ActiveObject) {
                    zoomToFitRatio = publicObject.ZoomToFit / 100;
                    left = eventObject.ActiveObject.item.left * zoomToFitRatio;
                    top = eventObject.ActiveObject.item.top * zoomToFitRatio;
                    width = eventObject.ActiveObject.item.width * zoomToFitRatio;
                }

                return {
                    left: left + width + contextMarginLeft,
                    top: top + contextMarginTop
                };
            }
        }
    });

    Vue.component('app-context-template', {
        props: {
            context: Object
        },
        template: '#app-context-template',
        computed: {
            classObjectIcon: function() {
                var classObject = {};

                switch (this.context.icon) {
                    case 'event':
                        classObject['app-icon-event'] = true;
                        break;
                    case 'browser':
                    case 'button':
                    case 'chart':
                    case 'checkbox':
                    case 'combobox':
                    case 'custom':
                    case 'datepicker':
                    case 'groupbox':
                    case 'image':
                    case 'inputbox':
                    case 'listgrid':
                    case 'multicombo':
                    case 'picklist':
                    case 'piechart':
                    case 'pivotgrid':
                    case 'polarchart':
                    case 'polygon':
                    case 'radiobutton':
                    case 'scatterchart':
                    case 'tablelayout':
                    case 'textbox':
                        classObject['app-icon-control-'+this.context.icon] = true;
                        break;
                }

                return classObject;
            }
        },
        methods: {
            onClickLeft: function(e) {
                console.log('onClickLeft', this.context.type);
            }
        }
    });

    return {};

});