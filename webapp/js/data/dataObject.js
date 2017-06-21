(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/eventObject',
            'js/data/headerObject',
            'js/data/leftMenuObject',
            'js/data/leftMenuTree',
            'js/data/itemObject',
            'js/data/controlObject'
        ], factory);
    }else {
        global.dataObject = factory(
            global.publicObject,
            global.eventObject,
            global.headerObject,
            global.leftMenuObject,
            global.leftMenuTree,
            global.itemObject,
            global.controlObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, eventObject, headerObject, leftMenuObject, leftMenuTree, itemObject, controlObject) {
    console.log("Loaded: dataObject!");
    // console.log("dataObject-publicObject", publicObject);

    return {
        publicObject: publicObject,
        eventObject: eventObject,
        headerObject: headerObject,
        leftMenuObject: leftMenuObject,
        leftMenuTree: leftMenuTree,
        itemObject: itemObject,
        controlObject: controlObject
    };

});