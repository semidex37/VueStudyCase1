(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/dataObject',
            'vue/data/templateObject',
            'vue/layout/left/appLeft',
            'vue/layout/center/appCenter',
            'vue/layout/right/appRight'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(dataObject, templateObject, appLeft, appCenter, appRight) {

    // console.log("appBody-dataObject", dataObject);

    Vue.component('app-body-template', {
        // props: ['leftObject', 'centerObject', 'rightObject', 'dataObject'],
        props: {
            dataObject: Object,
            // leftObject: Object,
            // centerObject: Object,
            // rightObject: Object
        },
        template: templateObject['app-body-template']
    });

    return {
        init: function() {
            new Vue({
                el: '#app-body',
                data: {
                    dataObject: dataObject,
                    leftObject: {
                        menuItems: dataObject.leftMenuObject,
                        isSearch: true,
                        treeItems: dataObject.leftMenuTree
                    },
                    centerObject: {
                        paperSize: dataObject.headerObject.itemRange.itemRangeGridSize.value
                    },
                    rightObject: {}
                }
            });
        }
    };

});