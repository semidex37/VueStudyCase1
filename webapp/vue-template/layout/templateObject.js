(function(global, factory) {
    'use strict';

    var loadText = 'loadText!vue/layout/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/util/util',
            'vue-template/layout/header/templateObject',
            'vue-template/layout/left/templateObject',
            loadText+'body/app-body-template.html',
            loadText+'center/app-center-template.html',
            loadText+'footer/app-footer-template.html',
            loadText+'header/app-header-template.html',
            loadText+'left/app-left-template.html',
            loadText+'right/app-right-template.html'
            ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(
        util,
        header,
        left,
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

    templateObject = util.assign(templateObject, header);

    templateObject = util.assign(templateObject, left);

    return templateObject;

});