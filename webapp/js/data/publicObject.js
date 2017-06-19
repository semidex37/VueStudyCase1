(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.publicObject = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {

    var publicObject = {
        PaperSize: 10,
        ZoomToFit: 100
    };

    // return {
    //     root: publicObject,
    //     setPaperSize: function(newValue) {
    //         publicObject.PaperSize = newValue;
    //     }
    // };

    return publicObject;

});