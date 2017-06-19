(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/headerObject',
            'js/data/leftMenuObject',
            'js/data/leftMenuTree',
            'js/data/itemObject'
        ], factory);
    }else {
        global.dataObject = factory(
            global.publicObject,
            global.headerObject,
            global.leftMenuObject,
            global.leftMenuTree,
            global.itemObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, headerObject, leftMenuObject, leftMenuTree, itemObject) {
    console.log("Loaded: dataObject!");
    // console.log("dataObject-publicObject", publicObject);

    return {
        publicObject: publicObject,
        headerObject: headerObject,
        leftMenuObject: leftMenuObject,
        leftMenuTree: leftMenuTree,
        itemObject: itemObject
    };

});