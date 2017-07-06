(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'control/app-control-arrow-normal-template.html',
            loadText+'control/app-control-arrow-template.html',
            loadText+'control/app-control-button-template.html',
            loadText+'control/app-control-do-refresh-template.html',
            loadText+'control/app-control-dummy-template.html',
            loadText+'control/app-controls-template.html',
            loadText+'control/app-control-template.html',
            loadText+'control/app-event-auto-refresh-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-control-arrow-normal-template'],
            global['app-control-arrow-template'],
            global['app-control-button-template'],
            global['app-control-do-refresh-template'],
            global['app-control-dummy-template'],
            global['app-controls-template'],
            global['app-control-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appControlArrowNormalTemplate,
        appControlArrowTemplate,
        appControlButtonTemplate,
        appControlDoRefreshTemplate,
        appControlDummyTemplate,
        appControlsTemplate,
        appControlTemplate,
        appEventAutoRefreshTemplate
) {

    var templateObject = {
        'app-control-arrow-normal-template': appControlArrowNormalTemplate,
        'app-control-arrow-template': appControlArrowTemplate,
        'app-control-button-template': appControlButtonTemplate,
        'app-control-do-refresh-template' : appControlDoRefreshTemplate,
        'app-control-dummy-template': appControlDummyTemplate,
        'app-controls-template': appControlsTemplate,
        'app-control-template': appControlTemplate,
        'app-event-auto-refresh-template': appEventAutoRefreshTemplate
    };

    return templateObject;

});