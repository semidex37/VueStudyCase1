(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/data/itemObject',
            'js/core/mixins'
        ], factory);
    }else {
        global.appSelection = factory(
            global.publicObject,
            global.eventObject,
            global.itemObject,
            global.mixins
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, itemObject, mixins) {

    Vue.component('app-selection-template', {
        props: ['item'],
        mixins: [mixins.getPanelMixin()],
        data: function() {
            return {
                children: [
                    {
                        direction: 'nw',
                        type: 'close'
                    },
                    {
                        direction: 'ne',
                        type: 'add'
                    },
                    {
                        direction: 'e',
                        type: 'arrow'
                    },
                    {
                        direction: 'se',
                        type: 'copy'
                    },
                    // {
                    //     direction: 'sw',
                    //     type: 'rotation'
                    // },
                    // {
                    //     direction: 'w',
                    //     type: 'cut'
                    // }
                ]
            };
        },
        template: '#app-selection-template',
        computed: {
            isActiveObject: function() {
                return eventObject.ActiveObject != null
                        && !eventObject.isDrag
            }
        },
        methods: {
            itemClassObject: function(item) {
                return {
                    'app-icon-selection-close': item.type == 'close',
                    'app-icon-selection-arrow': item.type == 'arrow',
                    'app-icon-selection-copy': item.type == 'copy',
                    'app-icon-selection-rotation': item.type == 'rotation',
                    'app-icon-selection-add': item.type == 'add',
                    'app-icon-selection-cut': item.type == 'cut'
                };
            },
            onClickLeft: function(e, item) {
                console.log('app-selection', 'onClickLeft', item.type, eventObject.ActiveObject.item.id);

                if(item.type == 'close') {
                    // itemObject.RemoveItem(eventObject.ActiveObject.item);
                    itemObject.RemoveItemById(eventObject.ActiveObject.item.id);
                    eventObject.setActiveObject(null);

                }else if(item.type == 'copy') {
                    itemObject.CloneItem(eventObject.ActiveObject.item);

                }else if(item.type == 'cut') {

                }else if(item.type == 'rotation') {

                }else if(item.type == 'add') {
                    eventObject.setMousePoint(this, e);
                    eventObject.enablePopup();

                }else if(item.type == 'arrow') {

                }


            },
            onMouseDownLeft: function(e, item) {

                if(item.type == 'rotation') {
                    console.log('app-selection', 'onMouseDownLeft');
                    eventObject.enableMouseRotation();
                }

            },
            onMouseMove: function(e, item) {
                eventObject.ControlDrag(e);
            }
        }
    });

    return {};

});