(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/data/headerObject',
            'js/data/leftMenuObject',
            'js/data/leftMenuTree'
        ], factory);
    }else {
        global.dataObject = factory(
            global.publicObject,
            global.headerObject,
            global.leftMenuObject,
            global.leftMenuTree
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, headerObject, leftMenuObject, leftMenuTree) {
    console.log("Loaded: dataObject!");
    // console.log("dataObject-publicObject", publicObject);

    var itemObject = {
        list: []
    };

    return {
        publicObject: publicObject,
        headerObject: headerObject,
        leftMenuObject: leftMenuObject,
        leftMenuTree: leftMenuTree,
        itemObject: itemObject
    };

});