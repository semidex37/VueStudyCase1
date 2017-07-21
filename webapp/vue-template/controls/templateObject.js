(function(global, factory) {
    'use strict';

    var loadText = 'loadText!vue/controls/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'app-control-arrow-normal-template.html',
            loadText+'arrow/app-control-arrow-template.html',
            loadText+'control/app-control-button-template.html',
            loadText+'event/app-control-do-refresh-template.html',
            loadText+'dummy/app-control-dummy-template.html',
            loadText+'app-controls-template.html',
            loadText+'app-control-template.html',
            loadText+'app-event-auto-refresh-template.html'
            ], factory);
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