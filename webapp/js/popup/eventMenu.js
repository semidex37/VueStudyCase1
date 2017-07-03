(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/itemObject',
            'js/data/eventObject'
        ], factory);
    }else {
        global.eventContextMenu = factory(
            global.publicObject,
            global.itemObject,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, itemObject, eventObject) {

    var contextMarginLeft = 30; // 10
    var contextMarginTop = -30; // -5

    var vueEventContexts = Vue.component('app-menus-template', {
        data: function() {
            return {
                defaultContexts: [
                    {
                        type: 'click',
                        icon: 'browser',
                        name: 'Default-Click'
                    }, {
                        type: 'dblClick',
                        icon: 'chart',
                        name: 'Default-DoubleClick'
                    }
                ]
            }
        },
        template: '#app-menus-template',
        computed: {
            isContextObject: function() {
                return eventObject.busObject[eventObject.busEvent.clickEventContextMenu] != null;
                // return true;
                // return _vue != null;
                // return eventObject.isPopup && !eventObject.isDrag;
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

                // if(eventObject.ActiveObject) {
                //     zoomToFitRatio = publicObject.ZoomToFit / 100;
                //     left = eventObject.ActiveObject.item.left * zoomToFitRatio;
                //     top = eventObject.ActiveObject.item.top * zoomToFitRatio;
                //     width = eventObject.ActiveObject.item.width * zoomToFitRatio;
                // }

                // return {
                //     left: left + width + contextMarginLeft,
                //     top: top + contextMarginTop
                // };
                return {
                    left: 50,
                    top: 50
                };
            },
            contexts: function() {
                // if(eventObject.ActiveObject != null) {
                //     if(typeof eventObject.ActiveObject.item.contexts == 'object') {
                //         return eventObject.ActiveObject.item.contexts;
                //     }
                // }

                if(eventObject.busObject[eventObject.busEvent.clickEventContextMenu] != null) {
                    var vue = eventObject.busObject[eventObject.busEvent.clickEventContextMenu];

                    if(typeof vue.item.source.events == 'object') {
                        return vue.item.source.events;
                    }
                }

                return this.defaultContexts;
            }
        }
    });

    // var _vue = null;
    // var _item = null;
    //
    // eventObject.bus.$on(eventObject.busEvent.clickEventContextMenu, function(vue) {
    //     console.log('click-event-context-menu', 'args', vue);
    //     _vue = vue;
    //     _item = vue.item;
    // });

    Vue.component('app-menu-template', {
        props: {
            context: Object
        },
        template: '#app-menu-template',
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

                // var item = itemObject.AddItem(this.context.type, {
                //     left: eventObject.ActiveObject.item.left
                //         + eventObject.ActiveObject.item.width
                //         + 100,
                //     top: eventObject.ActiveObject.item.top
                // });
                //
                // itemObject.AddArrow(eventObject.ActiveObject.item, item);
                //
                // eventObject.disablePopup();
            }
        }
    });

    return {};

});