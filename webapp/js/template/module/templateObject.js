(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'module/app-popup-container-template.html',

            loadText+'module/popup/app-popup-body-template.html',
            loadText+'module/popup/app-popup-button-template.html',
            loadText+'module/popup/app-popup-buttons-template.html',
            loadText+'module/popup/app-popup-search-container-template.html',
            loadText+'module/popup/app-popup-footer-template.html',
            loadText+'module/popup/app-popup-header-template.html',
            loadText+'module/popup/app-popup-search-template.html',
            loadText+'module/popup/app-popup-tree-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-popup-container-template'],

            global['app-popup-template'],
            global['app-popup-body-template'],
            global['app-popup-button-template'],
            global['app-popup-buttons-template'],
            global['app-popup-search-container-template'],
            global['app-popup-footer-template'],
            global['app-popup-header-template'],
            global['app-popup-search-template'],
            global['app-popup-tree-template']
            
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
    appPopupContainerTemplate,
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
        'app-popup-container-template': appPopupContainerTemplate,
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