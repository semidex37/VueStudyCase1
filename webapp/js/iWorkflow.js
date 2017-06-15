(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.iWorkFlow = factory();
    }

})(typeof window !== 'undefined' ? window : this, function(global) {

    console.log("Loaded: iWorkflow!");

    var items = {
        name: 'Root',
        type: 'Root',
        children: [
            {
                name: 'Group 1',
                type: 'Group',
                children: [
                    {
                        type: 'Icon',
                        text: 'Undo'
                    },
                    {
                        type: 'Icon',
                        text: 'Redo'
                    },
                    {
                        type: 'Icon',
                        text: 'Trash'
                    },
                    {
                        type: 'Button',
                        text: 'Export SVG'
                    },
                    {
                        type: 'Button',
                        text: 'Export PNG'
                    },
                    {
                        type: 'Icon',
                        text: 'Print'
                    }
                ]

            },
            {
                name: 'Group 2',
                type: 'Group',
                children: [
                    {
                        type: 'Text',
                        text: 'Zoom To Fit:'
                    },
                    {
                        type: 'Range',
                        id: 'rangeZoomToFit',
                        min: 20,
                        max: 500,
                        value: 100,
                        step: 20
                    },
                    {
                        type: 'Text',
                        text: '100%'
                    },
                    {
                        type: 'Text',
                        text: 'Grid Size:'
                    },
                    {
                        type: 'Range',
                        id: 'rangeZoomToFit',
                        min: 20,
                        max: 500,
                        value: 100,
                        step: 20
                    },
                    {
                        type: 'Text',
                        text: '10'
                    }
                ]
            }
        ]
    };

    Vue.component('app-header', {
        props: ['groups'],
        template: '#app-header-template',
        computed: {
            total: function() {
                // console.log("typeof groups: ", typeof this.groups);
                // console.log("groups.length: ", this.groups.children.length);
                // console.log("groups: ", this.groups);
                return this.groups.children.length;
            }
        }
    });

    Vue.component('app-header-group', {
        props: ['group', 'index'],
        template: '#app-header-group-template',
        computed: {
            total: function() {
                // console.log("typeof group: ", typeof this.group);
                // console.log("group.length: ", this.group.length);
                // console.log("group: ", this.group);
                return this.group.children.length;
            }
        },
        methods: {
            getId: function() {
                // console.log("this.index", this.index);
                return 'app-header-group-' + this.index;
            },
            pIndex: function(index) {
                return this.index + '-' + index;
            }
        }
    });

    Vue.component('app-header-item', {
        props: ['item', 'index', 'pIndex'],
        template: '#app-header-item-template',
        computed: {
            classObject: function() {
                return {
                    'app-header-item': true,
                    'app-header-icon': this.item.type == 'Icon',
                    'app-header-button': this.item.type == 'Button',
                    'app-header-range': this.item.type == 'Range'
                }
            }
        },
        methods: {
            getId: function() {
                return 'app-header-item-' + this.pIndex
            }
        }
    });

    var appHeader = new Vue({
        el: '#app-header',
        data: {
            groups: items
        }
    });

    // var app = new Vue({
    //     el: '#app',
    //     data: {
    //         groups: items
    //     }
    // });


    return {};

});