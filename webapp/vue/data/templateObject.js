(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';
    var templateObjectName = 'templateObject';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/util/util',
            'js/template/context/' + templateObjectName,
            'js/template/control/' + templateObjectName,
            'js/template/core/' + templateObjectName,
            'js/template/header/' + templateObjectName,
            'js/template/layout/' + templateObjectName,
            'js/template/left/' + templateObjectName,
            'js/template/module/' + templateObjectName,
            'js/template/popup/' + templateObjectName
            ], factory);
    }else {
        global.templateObject = factory([
            global.util,
            global['app-context-template'],
            global['app-control-template'],
            global['app-core-template'],
            global['app-header-template'],
            global['app-layout-arrow-normal-template'],
            global['app-left-arrow-template'],
            global['app-module-button-template'],
            global['app-popup-dummy-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        util
) {

    var templateObject = {};

    // console.log("Loaded! templateObject!", arguments);

    if(arguments.length > 1) {
        var args;
        for(var idx=1; idx<arguments.length; idx++) {
            args = arguments[idx];
            if(typeof args == 'object') {
                templateObject = util.assign(templateObject, args);
            }
        }
    }

    return templateObject;

});