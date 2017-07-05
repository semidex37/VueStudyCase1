(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'layout/app-body-template.html',
            loadText+'layout/app-center-template.html',
            loadText+'layout/app-footer-template.html',
            loadText+'layout/app-header-template.html',
            loadText+'layout/app-left-template.html',
            loadText+'layout/app-right-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-body-template'],
            global['app-center-template'],
            global['app-footer-template'],
            global['app-header-template'],
            global['app-left-template'],
            global['app-right-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appBodyTemplate,
        appCenterTemplate,
        appFooterTemplate,
        appHeaderTemplate,
        appLeftTemplate,
        appRightTemplate
) {

    var templateObject = {
        'app-body-template': appBodyTemplate,
        'app-center-template': appCenterTemplate,
        'app-footer-template': appFooterTemplate,
        'app-header-template': appHeaderTemplate,
        'app-left-template': appLeftTemplate,
        'app-right-template': appRightTemplate
    };

    return templateObject;

});