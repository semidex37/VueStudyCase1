(function(global, factory) {
    'use strict';

    var loadText = 'loadText!vue/context/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'app-contexts-template.html',
            loadText+'app-context-template.html',
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-contexts-template'],
            global['app-context-template'],
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appContextsTemplate,
        appContextTemplate,
) {

    var templateObject = {
        'app-contexts-template': appContextsTemplate,
        'app-context-template': appContextTemplate
    };

    return templateObject;

});