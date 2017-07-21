(function(global, factory) {
    'use strict';

    var loadText = 'loadText!vue/';
    var templateObjectName = 'templateObject';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/util/util',
            'vue-template/context/' + templateObjectName,
            'vue-template/controls/' + templateObjectName,
            'vue-template/core/' + templateObjectName,
            'vue-template/layout/' + templateObjectName,
            'vue-template/module/' + templateObjectName,
            'vue-template/popup/' + templateObjectName
            ], factory);
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