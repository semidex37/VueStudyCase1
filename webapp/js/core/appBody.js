(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(['js/data/dataObject'], factory);
    }else {
        global.appHeader = factory( global.dataObject );
    }

})(typeof window !== 'undefined' ? window : this, function(dataObject) {

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

    return {
        init: function() {
            new Vue({
                el: '#app-body',
                data: {
                    dataObject: {
                        leftObject: {
                            menuItems: dataObject.leftMenuObject,
                            isSearch: true,
                            treeItems: []
                        },
                        centerObject: {},
                        rightObject: {}
                    }
                }
            });
        }
    };

});