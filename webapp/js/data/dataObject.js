(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/templateObject',
            'js/data/publicObject',
            'js/data/constObject',
            'js/data/eventObject',
            'js/data/headerObject',
            'js/data/leftMenuObject',
            'js/data/leftMenuTree',
            'js/data/itemObject',
            'js/data/controlObject',
            'js/data/contextMenuObject',
            'js/data/eventMenuObject'
        ], factory);
    }else {
        global.dataObject = factory(
            global.publicObject,
            global.constObject,
            global.eventObject,
            global.headerObject,
            global.leftMenuObject,
            global.leftMenuTree,
            global.itemObject,
            global.controlObject,
            global.contextMenuObject,
            global.eventMenuObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, publicObject, constObject, eventObject, headerObject, leftMenuObject, leftMenuTree, itemObject, controlObject, contextMenuObject, eventMenuObject) {
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
        eventMenuObject: eventMenuObject
    };

});