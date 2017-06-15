(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.leftMenuTree = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {

    var leftMenuTree = {
        name: 'Root',
        type: 'Root',
        index: 0,
        children: [
            {
                name: 'i-CANVAS 6.0',
                type: 'Folder',
                children: [
                    { type: 'Event', name: 'AutoRefresh' },
                    { type: 'Event', name: 'doRefresh' },
                    { type: 'Event', name: 'doExport' }
                ]
            }, {
                name: 'Form1',
                type: 'Folder',
                children: [
                    { type: 'browser', name: 'browser' },
                    { type: 'button', name: 'button' },
                    { type: 'chart', name: 'chart' },
                    { type: 'checkbox', name: 'checkbox' },
                    { type: 'combobox', name: 'combobox' },
                    { type: 'custom', name: 'custom' },
                    { type: 'datepicker', name: 'datepicker' },
                    { type: 'groupbox', name: 'groupbox' },
                    { type: 'image', name: 'image' },
                    { type: 'inputbox', name: 'inputbox' },
                    { type: 'listgrid', name: 'listgrid' },
                    { type: 'multicombo', name: 'multicombo' },
                    { type: 'picklist', name: 'picklist' },
                    { type: 'piechart', name: 'piechart' },
                    { type: 'pivotgrid', name: 'pivotgrid' },
                    { type: 'polarchart', name: 'polarchart' },
                    { type: 'polygon', name: 'polygon' },
                    { type: 'radiobutton', name: 'radiobutton' },
                    { type: 'scatterchart', name: 'scatterchart' },
                    { type: 'tablelayout', name: 'tablelayout' },
                    { type: 'textbox', name: 'textbox' }
                ]
            }, {
                name: 'Actions',
                type: 'Folder',
                children: [
                    { type: 'Refresh', name: 'Refresh' },
                    { type: 'SetProperties', name: 'SetProperties' },
                    { type: 'ClearData', name: 'ClearData' },
                    { type: 'Export', name: 'Export' },
                    { type: 'CreateRow', name: 'CreateRow' },
                    { type: 'DeleteRow', name: 'DeleteRow' },
                    { type: 'Update', name: 'Update' }
                ]
            }, {
                name: 'Condition',
                type: 'Folder',
                children: [
                    { type: 'If', name: 'If' },
                    { type: 'For', name: 'For' }
                ]
            }, {
                name: 'Diagram',
                type: 'SVG',
                children: [
                    { type: 'Rect1', name: 'Rect1' },
                    { type: 'Rect2', name: 'Rect2' },
                    { type: 'Rect3', name: 'Rect3' },
                    { type: 'Rect4', name: 'Rect4' }
                ]
            }
        ]
    };

    return leftMenuTree;

});