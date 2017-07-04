(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'publicObject',
            'constObject',
            'eventObject',
            'itemObject',
            'mixins'
        ], factory);
    }else {
        global.appSelection = factory(
            global.publicObject,
            global.constObject,
            global.eventObject,
            global.itemObject,
            global.mixins
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, constObject, eventObject, itemObject, mixins) {

    Vue.component('app-selection-template', {
        props: ['item'],
        mixins: [mixins.getPanelMixin()],
        data: function() {
            return {
                defaultSelections: [
                    {
                        direction: constObject.direction.NorthWest,
                        type: 'close'
                    },
                    {
                        direction: constObject.direction.NorthEast,
                        type: 'add'
                    },
                    {
                        direction: constObject.direction.East,
                        type: 'arrow'
                    },
                    {
                        direction: constObject.direction.SouthEast,
                        type: 'copy'
                    },
                    {
                        direction: constObject.direction.SouthWest,
                        type: 'rotation'
                    },
                    {
                        direction: constObject.direction.West,
                        type: 'cut'
                    }
                ]
            };
        },
        template: '#app-selection-template',
        computed: {
            isActiveObject: function() {
                return eventObject.ActiveObject != null
                        && !eventObject.isDrag
            },
            children: function() {
                if(eventObject.ActiveObject != null) {
                    if(typeof eventObject.ActiveObject.item.selections == 'object') {
                        return eventObject.ActiveObject.item.selections;
                    }
                }

                return this.defaultSelections;
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