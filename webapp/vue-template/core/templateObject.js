(function(global, factory) {
    'use strict';

    var loadText = 'loadText!vue/core/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'app-mini-map-template.html',
            loadText+'app-panel-template.html',
            loadText+'app-paper-template.html',
            loadText+'app-selection-template.html',
            loadText+'app-svg-template.html',
            loadText+'app-popup-template.html'
            ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appMiniMapTemplate,
        appPanelTemplate,
        appPaperTemplate,
        appSelectionTemplate,
        appSvgTemplate,
        appPopupTemplate
) {

    var templateObject = {
        'app-mini-map-template': appMiniMapTemplate,
        'app-panel-template': appPanelTemplate,
        'app-paper-template': appPaperTemplate,
        'app-selection-template': appSelectionTemplate,
        'app-svg-template': appSvgTemplate,
        'app-popup-template': appPopupTemplate,
    };

    return templateObject;

});