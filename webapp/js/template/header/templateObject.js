(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'header/app-header-group-template.html',
            loadText+'header/app-header-item-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-header-group-template'],
            global['app-header-item-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appHeaderGroupTemplate,
        appHeaderItemTemplate
) {

    var templateObject = {
        'app-header-group-template': appHeaderGroupTemplate,
        'app-header-item-template': appHeaderItemTemplate
    };

    return templateObject;

});