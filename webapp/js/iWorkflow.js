(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        console.log('export as AMD!');
        define(['js/data/dataObject'], factory);
    }else {
        console.log('export Global!');
        global.iWorkFlow = factory( global.dataObject );
    }

})(typeof window !== 'undefined' ? window : this, function(dataObject) {
    console.log("Loaded: iWorkflow.js");

    var headerItems = dataObject.headerObject;
    var leftMenuItems = dataObject.leftMenuObject;

    Vue.component('app-header', {
        // props: ['groups'],
        props: {
            groups: Object
        },
        template: '#app-header-template'
    });

    Vue.component('app-header-group', {
        // props: ['group', 'index'],
        props: {
            group: Object,
            index: Number
        },
        template: '#app-header-group-template',
        computed: {
            total: function() {
                return this.group.children.length;
            }
        },
        methods: {
            getId: function() {
                return 'app-header-group-' + this.index;
            },
            pIndex: function(index) {
                return this.index + '-' + index;
            }
        }
    });

    Vue.component('app-header-item', {
        // props: ['item', 'index', 'pIndex'],
        props: {
            item: Object,
            index: Number,
            pIndex: String
        },
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

    Vue.component('app-body', {
        // props: ['leftObject', 'centerObject', 'rightObject', 'str'],
        props: {
            dataObject: Object
        },
        template: '#app-body-template',
        computed: {
            leftObject: function() {
                return this.dataObject.leftObject;
            },
            centerObject: function() {
                return this.dataObject.centerObject;
            },
            rightObject: function() {
                return this.dataObject.rightObject;
            }
        }
    });

    Vue.component('app-left', {
        props: ['items'],
        template: '#app-left-template',
        computed: {
            menuItems: function() {
                return this.items.menuItems;
            },
            isSearch: function() {
                return this.items.isSerach;
            },
            treeItems: function() {
                return this.items.treeItems;
            }
        }
    });

    Vue.component('app-center', {
        props: ['items'],
        template: '#app-center-template'
    });

    Vue.component('app-right', {
        props: ['items'],
        template: '#app-right-template'
    });

    Vue.component('app-footer', {
        template: '#app-footer-template'
    });

    Vue.component('app-left-menu', {
        props: ['items'],
        template: '#app-left-menu-template'
    });

    Vue.component('app-left-search', {
        template: '#app-left-search-template'
    });

    Vue.component('app-left-tree', {
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


    var appHeader = new Vue({
        el: '#app-header',
        data: {
            groups: headerItems
        }
    });

    var appBody = new Vue({
        el: '#app-body',
        data: {
            dataObject: {
                leftObject: {
                    menuItems: leftMenuItems,
                    isSearch: true,
                    treeItems: []
                },
                centerObject: {},
                rightObject: {}
            }
        }
    });

    // var appFooter = new Vue({
    //     el: '#app-footer'
    // });

    return {};

});