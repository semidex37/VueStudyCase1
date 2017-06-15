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
        children: [
            {
                name: 'Group 1',
                type: 'Group',
                index: 1,
                children: [
                    {
                        type: 'Icon',
                        text: '[+]',
                        index: 1,
                    },
                    {
                        type: 'Icon',
                        text: '[-]',
                        index: 2,
                    }
                ]
            }
        ]
    };

    return leftMenuObject;

});