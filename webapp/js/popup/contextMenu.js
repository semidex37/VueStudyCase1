(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/templateObject',
            'js/data/publicObject',
            'js/data/itemObject',
            'js/data/eventObject'
        ], factory);
    }else {
        global.contextMenu = factory(
            global.publicObject,
            global.itemObject,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, publicObject, itemObject, eventObject) {

    var contextMarginLeft = 30; // 10
    var contextMarginTop = -30; // -5

    Vue.component('app-contexts-template', {
        data: function() {
            return {
                defaultContexts: [
                    {
                        action: 'newControl',
                        type: 'doRefresh',
                        icon: 'browser',
                        name: 'doRefresh'
                    }, {
                        action: '',
                        type: 'setProperties',
                        icon: 'button',
                        name: 'SetProperties'
                    }, {
                        action: '',
                        type: 'clearData',
                        name: 'ClearData'
                    }, {
                        action: '',
                        type: 'export',
                        icon: 'polygon',
                        name: 'Export'
                    }, {
                        action: '',
                        type: 'createRow',
                        icon: 'chart',
                        name: 'CreateRow'
                    }
                ]
            }
        },
        template: templateObject['app-contexts-template'],
        computed: {
            isContextObject: function() {
                return eventObject.isPopup && !eventObject.isDrag && this.contexts.length > 0;
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
            },
            contexts: function() {
                if(eventObject.ActiveObject != null) {
                    if(typeof eventObject.ActiveObject.item.contexts == 'object') {
                        return eventObject.ActiveObject.item.contexts;
                    }
                }

                return this.defaultContexts;
            }
        }
    });

    Vue.component('app-context-template', {
        props: {
            context: Object
        },
        template: templateObject['app-context-template'],
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
                console.log('onClickLeft', this.context.type, this.context.action);

                switch(this.context.action) {
                    case 'newControl':
                        AddArrow(this.context);
                        break;
                    case 'popup':

                        break;
                }

                eventObject.disablePopup();
            }
        }
    });

    var AddArrow = function(context) {
        var item = itemObject.AddItem(context.type, {
            left: eventObject.ActiveObject.item.left
            + eventObject.ActiveObject.item.width
            + 100,
            top: eventObject.ActiveObject.item.top
        });

        itemObject.AddArrow(eventObject.ActiveObject.item, item);
    };

    return {};

});