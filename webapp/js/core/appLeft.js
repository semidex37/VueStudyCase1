(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(['js/data/leftMenuTree'], factory);
    }else {
        global.appLeft = factory( global.leftMenuTree );
    }

})(typeof window !== 'undefined' ? window : this, function(leftMenuTree) {

    Vue.component('app-left', {
        props: {
            dataObject: Object
        },
        template: '#app-left-template',
        computed: {
            menuItems: function() {
                return this.dataObject.leftMenuObject;
            },
            isSearch: function() {
                return true; // dataObject.isSearch
            },
            treeItems: function() {
                return this.dataObject.leftMenuTree;
            }
        }
    });

    Vue.component('app-left-menu', {
        props: {
            items: Object
        },
        template: '#app-left-menu-template'
    });

    Vue.component('app-left-search', {
        template: '#app-left-search-template'
    });

    Vue.component('app-left-tree', {
        props: {
            items: Object
        },
        template: '#app-left-tree-template'
    });

    Vue.component('app-left-menu-item', {
        props: {
            item: Object,
            index: Number
        },
        template: '#app-left-menu-item-template',
        methods: {
            getId: function() {
                return 'app-left-menu-item-' + this.index;
            }
        }
    });

    Vue.component('app-tree-header', {
        props: {
            name: String
        },
        template: '#app-tree-header-template'
    });

    Vue.component('app-tree-root', {
        props: {
            items: Object
        },
        template: '#app-tree-root-template'
    });

    Vue.component('app-tree-node', {
        props: {
            item: Object,
            index: Number
        },
        template: '#app-tree-node-template',
        data: function() {
            return {
                isExpand: true
            }
        },
        computed: {
            classObjectSign: function() {
                return {
                    'app-icon-minus': this.isExpand,
                    'app-icon-plus': !this.isExpand
                }
            },
            classObjectFolder: function() {
                return {
                    'app-icon-folder': true,
                    'app-icon-folder-open': this.isExpand,
                    'app-icon-folder-close': !this.isExpand
                }
            },
        },
        methods: {
            expand: function() {
                this.isExpand = !this.isExpand;
            }
        }
    });

    Vue.component('app-tree-contents', {
        props: {
            item: Object
        },
        template: '#app-tree-contents-template'
    });

    Vue.component('app-tree-content', {
        props: {
            item: Object,
            index: Number
        },
        template: '#app-tree-content-template',
        computed: {
            classObjectIcon: function() {
                return {
                    'app-tree-content-icon': true,
                    'app-icon-event': this.item.type == 'Event',
                    'app-icon-control-browser': this.item.type == 'browser',
                    'app-icon-control-button': this.item.type == 'button',
                    'app-icon-control-chart': this.item.type == 'chart',
                    'app-icon-control-checkbox': this.item.type == 'checkbox',
                    'app-icon-control-combobox': this.item.type == 'combobox',
                    'app-icon-control-custom': this.item.type == 'custom',
                    'app-icon-control-datepicker': this.item.type == 'datepicker',
                    'app-icon-control-groupbox': this.item.type == 'groupbox',
                    'app-icon-control-image': this.item.type == 'image',
                    'app-icon-control-inputbox': this.item.type == 'inputbox',
                    'app-icon-control-listgrid': this.item.type == 'listgrid',
                    'app-icon-control-multicombo': this.item.type == 'multicombo',
                    'app-icon-control-picklist': this.item.type == 'picklist',
                    'app-icon-control-piechart': this.item.type == 'piechart',
                    'app-icon-control-pivotgrid': this.item.type == 'pivotgrid',
                    'app-icon-control-polarchart': this.item.type == 'polarchart',
                    'app-icon-control-polygon': this.item.type == 'polygon',
                    'app-icon-control-radiobutton': this.item.type == 'radiobutton',
                    'app-icon-control-scatterchart': this.item.type == 'scatterchart',
                    'app-icon-control-tablelayout': this.item.type == 'tablelayout',
                    'app-icon-control-textbox': this.item.type == 'textbox'
                }
            }
        }
    });

    return {};

});