(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'context/app-contexts-template.html',
            loadText+'context/app-context-template.html',
            loadText+'context/app-menus-template.html',
            loadText+'context/app-menu-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-contexts-template'],
            global['app-context-template'],
            global['app-menus-template'],
            global['app-menu-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appContextsTemplate,
        appContextTemplate,
        appMenusTemplate,
        appMenuTemplate
) {

    var templateObject = {
        'app-contexts-template': appContextsTemplate,
        'app-context-template': appContextTemplate,
        'app-menus-template': appMenusTemplate,
        'app-menu-template': appMenuTemplate
    };

    return templateObject;

});