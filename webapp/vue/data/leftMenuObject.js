(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.leftMenuObject = factory();
    }

})(typeof window !== 'undefined' ? window : this, function(/* RGBColor, stackBlur */) {

    var leftMenuObject = {
        name: 'Root',
        type: 'Root',
        index: 0,
        title: 'Root',
        children: [
            {
                type: 'Icon',
                text: '[+]',
                title: 'Expand All',
                index: 1,
            },
            {
                type: 'Icon',
                text: '[-]',
                title: 'Collapse All',
                index: 2,
            }
        ]
    };

    return leftMenuObject;

});