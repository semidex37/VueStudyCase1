(function(global, factory) {
    'use strict';

    var loadText = 'loadText!vue/module/popup/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'app-popup-body-template.html',
            loadText+'app-popup-button-template.html',
            loadText+'app-popup-buttons-template.html',
            loadText+'app-popup-search-container-template.html',
            loadText+'app-popup-footer-template.html',
            loadText+'app-popup-header-template.html',
            loadText+'app-popup-search-template.html',
            loadText+'app-popup-tree-template.html'
            ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(
    appPopupBodyTemplate,
    appPopupButtonTemplate,
    appPopupButtonsTemplate,
    appPopupSearchContainerTemplate,
    appPopupFooterTemplate,
    appPopupHeaderTemplate,
    appPopupSearchTemplate,
    appPopupTreeTemplate
) {

    var templateObject = {
        'app-popup-body-template': appPopupBodyTemplate,
        'app-popup-button-template': appPopupButtonTemplate,
        'app-popup-buttons-template':   appPopupButtonsTemplate,
        'app-popup-search-container-template': appPopupSearchContainerTemplate,
        'app-popup-footer-template': appPopupFooterTemplate,
        'app-popup-header-template': appPopupHeaderTemplate,
        'app-popup-search-template': appPopupSearchTemplate,
        'app-popup-tree-template': appPopupTreeTemplate
    };

    return templateObject;

});