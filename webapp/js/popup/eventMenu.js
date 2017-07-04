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
                var zoomToFitRatio;

                if(eventObject.busObject[eventObject.busEvent.clickEventContextMenu] != null) {
                    zoomToFitRatio = publicObject.ZoomToFit / 100;

                    var vue = eventObject.busObject[eventObject.busEvent.clickEventContextMenu];
                    left = vue.eventPoint.x * zoomToFitRatio;
                    top = (vue.eventPoint.y + 20) * zoomToFitRatio;

                }

                return {
                    left: left,
                    top: top
                };
            },
            contexts: function() {
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

                if(eventObject.busObject[eventObject.busEvent.clickEventContextMenu] != null) {
                    var vue = eventObject.busObject[eventObject.busEvent.clickEventContextMenu];
                    var source = vue.item.source;
                    var events = source.events;
                    var event;
                    for(var idx in events) {
                        event = events[idx];
                        if(event.type == this.context.type) {
                            vue.changeEvent(event);
                        }
                    }
                }

                eventObject.disableBusObject();
            }
        }
    });

    return {};

});