(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'left/app-left-menu-item-template.html',
            loadText+'left/app-left-menu-template.html',
            loadText+'left/app-left-search-template.html',
            loadText+'left/app-left-tree-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-left-menu-item-template'],
            global['app-left-menu-template'],
            global['app-left-search-template'],
            global['app-left-tree-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appLeftMenuItemTemplate,
        appLeftMenuTemplate,
        appLeftSearchTemplate,
        appLeftTreeTemplate
) {

    var templateObject = {

        'app-left-menu-item-template': appLeftMenuItemTemplate,
        'app-left-menu-template': appLeftMenuTemplate,
        'app-left-search-template': appLeftSearchTemplate,
        'app-left-tree-template': appLeftTreeTemplate
    };

    return templateObject;

});