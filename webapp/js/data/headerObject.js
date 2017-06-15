(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.headerObject = factory();
    }

})(typeof window !== 'undefined' ? window : this, function(/* RGBColor, stackBlur */) {

    var headerObject = {
        name: 'Root',
        type: 'Root',
        index: 0,
        children: [
            {
                name: 'Group 1',
                type: 'Group',
                index: 11,
                children: [
                    {
                        type: 'Icon',
                        text: 'Undo',
                        index: 1,
                    },
                    {
                        type: 'Icon',
                        text: 'Redo',
                        index: 2,
                    },
                    {
                        type: 'Icon',
                        text: 'Trash',
                        index: 3,
                    },
                    {
                        type: 'Button',
                        text: 'Export SVG',
                        index: 4,
                    },
                    {
                        type: 'Button',
                        text: 'Export PNG',
                        index: 5,
                    },
                    {
                        type: 'Icon',
                        text: 'Print',
                        index: 6,
                    }
                ]

            },
            {
                name: 'Group 2',
                type: 'Group',
                index: 'b',
                children: [
                    {
                        type: 'Text',
                        text: 'Zoom To Fit:',
                        index: 1,
                    },
                    {
                        type: 'Range',
                        id: 'rangeZoomToFit',
                        min: 20,
                        max: 500,
                        value: 100,
                        step: 20,
                        index: 2,
                    },
                    {
                        type: 'Text',
                        text: '100%',
                        index: 3,
                    },
                    {
                        type: 'Text',
                        text: 'Grid Size:',
                        index: 4,
                    },
                    {
                        type: 'Range',
                        id: 'rangeZoomToFit',
                        min: 5,
                        max: 50,
                        value: 10,
                        index: 5,
                    },
                    {
                        type: 'Text',
                        text: '10',
                        index: 6,
                    }
                ]
            }
        ]
    };

    return headerObject;

});