(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/leftMenuTree',
            'js/data/itemObject'
        ], factory);
    }else {
        global.appLeft = factory(
            global.leftMenuTree,
            global.itemObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(leftMenuTree, itemObject) {

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
                var classObject = {
                    'app-tree-content-icon': true
                };

                switch (this.item.type) {
                    case 'Event':
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
                        classObject['app-icon-control-'+this.item.type] = true;
                        break;
                }

                return classObject
            }
        },
        methods: {
            onDblClick: function() {
                console.log('itemDblClick', this.item.type, this.item.name);

                itemObject.AddItem(this.item);

            },
            mouseDown: function() {
                this.isDrag = true;
                console.log('mouseDown')
            },
            mouseDrag: function() {
                if(!this.isDrag) return;

                console.log('drag');
            },
            mouseUp: function() {
                this.isDrag = false;

                console.log('up');
            }
        }
    });

    return {};

});