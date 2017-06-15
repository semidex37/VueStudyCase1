(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/dataObject',
            'js/core/appLeft',
            'js/core/appCenter',
            'js/core/appRight'
        ], factory);
    }else {
        global.appHeader = factory( global.dataObject, global.appLeft );
    }

})(typeof window !== 'undefined' ? window : this, function(dataObject, appLeft, appCenter, appRight) {

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