(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/controlObject'
        ], factory);
    }else {
        global.leftMenuTree = factory(
            global.controlObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(controlObject) {

    var leftMenuTree = {
        name: 'Root',
        type: 'Root',
        index: 0,
        children: [
            {
                name: 'i-CANVAS 6.0',
                type: 'Folder',
                children: [
                    controlObject.AutoRefresh,
                    controlObject.doRefresh,
                    controlObject.doExport,
                ]
            }, {
                name: 'Form1',
                type: 'Folder',
                children: [
                    controlObject.browser,
                    controlObject.button,
                    controlObject.chart,
                    controlObject.checkbox,
                    controlObject.combobox,
                    controlObject.custom,
                    controlObject.datepicker,
                    controlObject.groupbox,
                    controlObject.image,
                    controlObject.inputbox,
                    controlObject.listgrid,
                    controlObject.multicombo,
                    controlObject.picklist,
                    controlObject.piechart,
                    controlObject.pivotgrid,
                    controlObject.polarchart,
                    controlObject.polygon,
                    controlObject.radiobutton,
                    controlObject.scatterchart,
                    controlObject.tablelayout,
                    controlObject.textbox
                ]
            }, {
                name: 'Actions',
                type: 'Folder',
                children: [
                    controlObject.Refresh,
                    controlObject.SetProperties,
                    controlObject.ClearData,
                    controlObject.Export,
                    controlObject.CreateRow,
                    controlObject.DeleteRow,
                    controlObject.Update
                ]
            }, {
                name: 'Condition',
                type: 'Folder',
                children: [
                    controlObject.If,
                    controlObject.For
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