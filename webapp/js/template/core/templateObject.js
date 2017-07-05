(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'core/app-mini-map-template.html',
            loadText+'core/app-panel-template.html',
            loadText+'core/app-paper-template.html',
            loadText+'core/app-selection-template.html',
            loadText+'core/app-svg-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-mini-map-template'],
            global['app-panel-template'],
            global['app-paper-template'],
            global['app-selection-template'],
            global['app-svg-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appMiniMapTemplate,
        appPanelTemplate,
        appPaperTemplate,
        appSelectionTemplate,
        appSvgTemplate
) {

    var templateObject = {
        'app-mini-map-template': appMiniMapTemplate,
        'app-panel-template': appPanelTemplate,
        'app-paper-template': appPaperTemplate,
        'app-selection-template': appSelectionTemplate,
        'app-svg-template': appSvgTemplate
    };

    return templateObject;

});