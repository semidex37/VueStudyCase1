(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/templateObject',
            'vue/data/leftMenuObject',
            'vue/data/leftMenuTree',
            'vue/data/itemObject'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, leftMenuObject, leftMenuTree, itemObject) {

    Vue.component('app-left-template', {
        template: templateObject['app-left-template'],
        computed: {
            menuItems: function() {
                return leftMenuObject;
            },
            isSearch: function() {
                return true; // dataObject.isSearch
            },
            treeItems: function() {
                return leftMenuTree;
            }
        }
    });

    Vue.component('app-left-menu-template', {
        props: {
            items: Object
        },
        template: templateObject['app-left-menu-template']
    });

    Vue.component('app-left-search-template', {
        template: templateObject['app-left-search-template']
    });

    Vue.component('app-left-tree-template', {
        props: {
            items: Object
        },
        template: templateObject['app-left-tree-template']
    });

    Vue.component('app-left-menu-item-template', {
        props: {
            item: Object,
            index: Number
        },
        template: templateObject['app-left-menu-item-template'],
        methods: {
            getId: function() {
                return 'app-left-menu-item-' + this.index;
            }
        }
    });

    Vue.component('app-tree-header-template', {
        props: {
            name: String
        },
        template: templateObject['app-tree-header-template']
    });

    return {};

});