(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/headerObject',
            'js/data/leftMenuObject',
            'js/data/leftMenuTree'
        ], factory);
    }else {
        global.dataObject = factory(
            global.headerObject,
            global.leftMenuObject,
            global.leftMenuTree
        );
    }

})(typeof window !== 'undefined' ? window : this, function(headerObject, leftMenuObject, leftMenuTree) {
    console.log("Loaded: dataObject!");

    return {
        headerObject: headerObject,
        leftMenuObject: leftMenuObject,
        leftMenuTree: leftMenuTree
    };

});