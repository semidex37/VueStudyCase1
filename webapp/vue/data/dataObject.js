(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/data/templateObject',
            'vue/data/publicObject',
            'vue/data/constObject',
            'vue/data/eventObject',
            'vue/data/headerObject',
            'vue/data/leftMenuObject',
            'vue/data/leftMenuTree',
            'vue/data/itemObject',
            'vue/data/controlObject',
            'vue/data/contextMenuObject',
            'vue/data/popupObject',
            'vue/data/eventMenuObject'
        ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, publicObject, constObject, eventObject, headerObject, leftMenuObject, leftMenuTree, itemObject, controlObject, contextMenuObject, popupObject, eventMenuObject) {
    console.log("Loaded: dataObject!");
    // console.log("dataObject-publicObject", publicObject);

    return {
        templateObject: templateObject,
        publicObject: publicObject,
        constObject: constObject,
        eventObject: eventObject,
        headerObject: headerObject,
        leftMenuObject: leftMenuObject,
        leftMenuTree: leftMenuTree,
        itemObject: itemObject,
        controlObject: controlObject,
        contextMenuObject: contextMenuObject,
        popupObject: popupObject,
        eventMenuObject: eventMenuObject
    };

});