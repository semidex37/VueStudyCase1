(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/core/mixins'
        ], factory);
    }else {
        global.appSelection = factory(
            global.publicObject,
            global.eventObject,
            global.mixins
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, mixins) {

    Vue.component('app-selection', {
        props: ['item'],
        mixins: [mixins.getPanelMixin()],
        data: function() {
            return {
                children: [
                    {
                        direction: 'ne',
                        type: 'close'
                    },
                    {
                        direction: 'e',
                        type: 'arrow'
                    },
                    {
                        direction: 'se',
                        type: 'copy'
                    },
                    {
                        direction: 'sw',
                        type: 'rotation'
                    },
                    {
                        direction: 'w',
                        type: 'cut'
                    }
                ]
            };
        },
        template: '#app-selection-template',
        computed: {

        },
        methods: {
            itemClassObject: function(item) {
                return {
                    'app-icon-selection-close': item.type == 'close',
                    'app-icon-selection-arrow': item.type == 'arrow',
                    'app-icon-selection-copy': item.type == 'copy',
                    'app-icon-selection-rotation': item.type == 'rotation',
                    'app-icon-selection-cut': item.type == 'cut',


                };
            },
            onClickLeft: function(e, item) {
                console.log('app-selection', 'onClickLeft', item.type, eventObject.ActiveObject.item.id);
            }
        }
    });

    return {};

});