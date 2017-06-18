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
                    { type: 'browser', name: 'Browser' },
                    { type: 'button', name: 'Button' },
                    { type: 'chart', name: 'Chart' },
                    { type: 'checkbox', name: 'Checkbox' },
                    { type: 'combobox', name: 'Combobox' },
                    { type: 'custom', name: 'Custom' },
                    { type: 'datepicker', name: 'DatePicker' },
                    { type: 'groupbox', name: 'GroupBox' },
                    { type: 'image', name: 'Image' },
                    { type: 'inputbox', name: 'Inputbox' },
                    { type: 'listgrid', name: 'ListGrid' },
                    { type: 'multicombo', name: 'MultiCombo' },
                    { type: 'picklist', name: 'PickList' },
                    { type: 'piechart', name: 'PieChart' },
                    { type: 'pivotgrid', name: 'PivotGrid' },
                    { type: 'polarchart', name: 'PolarChart' },
                    { type: 'polygon', name: 'Polygon' },
                    { type: 'radiobutton', name: 'RadioButton' },
                    { type: 'scatterchart', name: 'ScatterChart' },
                    { type: 'tablelayout', name: 'TableLayout' },
                    { type: 'textbox', name: 'TextBox' }
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