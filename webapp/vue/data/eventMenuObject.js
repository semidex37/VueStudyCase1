(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }

})(typeof window !== 'undefined' ? window : this, function() {


    var eventMenuObject = {
        click: {
            type: 'click',
            icon: 'browser',
            name: 'Click'
        },
        dblClick: {
            type: 'dblClick',
            icon: 'chart',
            name: 'DoubleClick'
        }
    };

    return eventMenuObject;

});