(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/control/dummy',
            'js/control/button',
            'js/control/arrow',
            'js/util/util'
            ], factory);
    }else {
        global.controlObject = factory(
            global.dummy,
            global.button,
            global.util
        );
    }

})(typeof window !== 'undefined' ? window : this, function(dummy, button, arrow, util) {

    var controlObject = {};

    var AutoRefresh =   {   type: 'Event',          name: 'AutoRefresh'     };
    var doRefresh =     {   type: 'Event',          name: 'doRefresh'       };
    var doExport =      {   type: 'Event',          name: 'doExport'        };

    var browser =       {   type: 'browser',        name: 'Browser'         };
    // var button =        {   type: 'button',         name: 'Button 1'        };
    var chart =         {   type: 'chart',          name: 'Chart'           };
    var checkbox =      {   type: 'checkbox',       name: 'Checkbox'        };
    var combobox =      {   type: 'combobox',       name: 'Combobox'        };
    var custom =        {   type: 'custom',         name: 'Custom'          };
    var datepicker =    {   type: 'datepicker',     name: 'DatePicker'      };
    var groupbox =      {   type: 'groupbox',       name: 'GroupBox'        };
    var image =         {   type: 'image',          name: 'Image'           };
    var inputbox =      {   type: 'inputbox',       name: 'Inputbox'        };
    var listgrid =      {   type: 'listgrid',       name: 'ListGrid'        };
    var multicombo =    {   type: 'multicombo',     name: 'MultiCombo'      };
    var picklist =      {   type: 'picklist',       name: 'PickList'        };
    var piechart =      {   type: 'piechart',       name: 'PieChart'        };
    var pivotgrid =     {   type: 'pivotgrid',      name: 'PivotGrid'       };
    var polarchart =    {   type: 'polarchart',     name: 'PolarChart'      };
    var polygon =       {   type: 'polygon',        name: 'Polygon'         };
    var radiobutton =   {   type: 'radiobutton',    name: 'RadioButton'     };
    var scatterchart =  {   type: 'scatterchart',   name: 'ScatterChart'    };
    var tablelayout =   {   type: 'tablelayout',    name: 'TableLayout'     };
    var textbox =       {   type: 'textbox',        name: 'TextBox'         };

    var Refresh =       {   type: 'Refresh',        name: 'Refresh'         };
    var SetProperties = {   type: 'SetProperties',  name: 'SetProperties'   };
    var ClearData =     {   type: 'ClearData',      name: 'ClearData'       };
    var Export =        {   type: 'Export',         name: 'Export'          };
    var CreateRow =     {   type: 'CreateRow',      name: 'CreateRow'       };
    var DeleteRow =     {   type: 'DeleteRow',      name: 'DeleteRow'       };
    var Update =        {   type: 'Update',         name: 'Update'          };

    var If =            {   type: 'If',             name: 'If'              };
    var For =           {   type: 'For',            name: 'For'             };

    var setDefaultProperties = function(target, properties) {
        var obj = {
            left: 20,
            top: 20,
            width: 120,
            height: 80,
            rotate: 0,
            fill: 'rgb(198, 217, 241)'
        };

        if(typeof properties == 'object'
            && properties.constructor == Object) {
            util.assign(obj, properties);
        }

        for(var idx in obj) {
            if(typeof target[idx] == 'undefined') {
                target[idx] = obj[idx];
            }
        }

        if(typeof target.type != 'string') {
            target.type = 'dummy';
        }

        return target;
    };

    setDefaultProperties(dummy);

    setDefaultProperties(arrow);

    setDefaultProperties(AutoRefresh);
    setDefaultProperties(doRefresh);
    setDefaultProperties(doExport);

    setDefaultProperties(browser);
    setDefaultProperties(button);
    setDefaultProperties(chart);
    setDefaultProperties(checkbox);
    setDefaultProperties(combobox);
    setDefaultProperties(custom);
    setDefaultProperties(datepicker);
    setDefaultProperties(groupbox);
    setDefaultProperties(image);
    setDefaultProperties(inputbox);
    setDefaultProperties(listgrid);
    setDefaultProperties(multicombo);
    setDefaultProperties(picklist);
    setDefaultProperties(piechart);
    setDefaultProperties(pivotgrid);
    setDefaultProperties(polarchart);
    setDefaultProperties(polygon);
    setDefaultProperties(radiobutton);
    setDefaultProperties(scatterchart);
    setDefaultProperties(tablelayout);
    setDefaultProperties(textbox);

    setDefaultProperties(Refresh);
    setDefaultProperties(SetProperties);
    setDefaultProperties(ClearData);
    setDefaultProperties(Export);
    setDefaultProperties(CreateRow);
    setDefaultProperties(DeleteRow);
    setDefaultProperties(Update);

    setDefaultProperties(If);
    setDefaultProperties(For);

    util.assign(controlObject, {
        dummy: dummy,
    });

    // Event
    util.assign(controlObject, {
        AutoRefresh: AutoRefresh,
        doRefresh: doRefresh,
        doExport: doExport
    });

    // Control
    util.assign(controlObject, {
        browser: browser,
        button: button,
        chart: chart,
        checkbox: checkbox,
        combobox: combobox,
        custom: custom,
        datepicker: datepicker,
        groupbox: groupbox,
        image: image,
        inputbox: inputbox,
        listgrid: listgrid,
        multicombo: multicombo,
        picklist: picklist,
        piechart: piechart,
        pivotgrid: pivotgrid,
        polarchart: polarchart,
        polygon: polygon,
        radiobutton: radiobutton,
        scatterchart: scatterchart,
        tablelayout: tablelayout,
        textbox: textbox
    });

    // Event
    util.assign(controlObject, {
        Refresh: Refresh,
        SetProperties: SetProperties,
        ClearData: ClearData,
        Export: Export,
        CreateRow: CreateRow,
        DeleteRow: DeleteRow,
        Update: Update
    });

    // Condition
    util.assign(controlObject, {
        If: If,
        For: For
    });

    return controlObject;

});