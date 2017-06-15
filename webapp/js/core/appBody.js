(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(['js/data/dataObject', 'js/core/appLeft'], factory);
    }else {
        global.appHeader = factory( global.dataObject, global.appLeft );
    }

})(typeof window !== 'undefined' ? window : this, function(dataObject, appLeft) {

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

    Vue.component('app-center', {
        props: ['items'],
        template: '#app-center-template'
    });

    Vue.component('app-right', {
        props: ['items'],
        template: '#app-right-template'
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
                            treeItems: dataObject.leftMenuTree
                        },
                        centerObject: {},
                        rightObject: {}
                    }
                }
            });
        }
    };

});