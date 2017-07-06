(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/templateObject',
            'js/core/mixins',
            'js/data/constObject',
            'js/data/eventMenuObject',
            'js/data/contextMenuObject',
            'js/data/publicObject',
            'js/data/popupObject'
        ], factory);
    }else {
        global.doRefresh = factory(
            global.mixins,
            global.constObject,
            global.eventMenuObject,
            global.contextMenuObject,
            global.publicObject,
            global.popupObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, mixins, constObject, eventMenuObject, contextMenuObject, publicObject, popupObject) {

    var type = 'doRefresh';
    var name = 'doRefresh';
    var width = 140;
    var height = 60;
    var minWidth = 80;
    var minHeight = 40;
    var fill = 'rgb(198, 217, 241)';

    // Selection Icon
    var selections = [
        {
            direction: constObject.direction.NorthWest,
            type: 'close'
        },
        {
            direction: constObject.direction.NorthEast,
            type: 'add'
        }
    ];

    // Contexts
    var contexts = [
        // contextMenuObject.doRefresh
        {
            action: 'method',
            type: 'openSearchControls',
            icon: 'browser',
            name: 'Search Controls'
        }
    ];

    // Events
    var events = [
        eventMenuObject.click,
        eventMenuObject.dblClick
    ];

    Vue.component('app-control-do-refresh-template', {
        mixins: [mixins.getComponentMixin()],
        template: templateObject['app-control-do-refresh-template'],
        computed: {
            addButtonTransform: function() {
                return 'translate(' + (this.width - 20) + ', 5)';
            }
        },
        methods: {
            onMouseMove: function(e) {
                console.log('app-control-button', 'onMouseMove', e);
            },
            onMouseUp: function(e) {
                console.log('app-control-button', 'onMouseUp', e);
            },
            onClick: function(e) {
                console.log('app-control-button', 'onClick', e);
            },
            openSearchControls: function(e) {
                console.log("openSearchControls");

                if(!popupObject.isPopup(this)) {
                    popupObject.AddPopup({
                        vue: this,
                        left: e.clientX,
                        top: e.clientY,
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
                        data: {

                        },
                        buttons: [
                            {
                                action: 'method',
                                type: 'onOK',
                                title: 'O.K',
                                text: 'O.K'
                            }, {
                                action: 'method',
                                type: 'onCancel',
                                title: 'Cancel',
                                text: 'Cancel'
                            }
                        ],
                        isHeader: true,
                        isBody: true,
                        isFooter: true
                    });
                }

            },

            onOK: function(e) {
                console.log('doRefresh: onOK', e);
                popupObject.RemovePopup(this);
            },

            onCancel: function(e) {
                console.log('doRefresh: onCancel', e);
                popupObject.RemovePopup(this);
            }
        }
    });

    return {
        type: type,
        name: name,
        width: width,
        height: height,
        // minWidth: minWidth,
        // minHeight: minHeight,
        fill: fill,
        selections: selections,
        contexts: contexts,
        events: events
    };

});