(function(global, factory) {
    'use strict';

    var loadText = 'loadText!vue/popup/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'app-menus-template.html',
            loadText+'app-menu-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-menus-template'],
            global['app-menu-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appMenusTemplate,
        appMenuTemplate
) {

    var templateObject = {
        'app-menus-template': appMenusTemplate,
        'app-menu-template': appMenuTemplate
    };

    return templateObject;

});