(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/headerObject',
            'js/data/leftMenuObject'
        ], factory);
    }else {
        global.dataObject = factory(
            global.headerObject,
            global.leftMenuObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(headerObject, leftMenuObject) {
    console.log("Loaded: dataObject!");

    return {
        headerObject: headerObject,
        leftMenuObject: leftMenuObject
    };

});