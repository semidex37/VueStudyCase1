(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'control/app-control-arrow-normal-template.html',
            loadText+'control/app-control-arrow-template.html',
            loadText+'control/app-control-button-template.html',
            loadText+'control/app-control-dummy-template.html',
            loadText+'control/app-controls-template.html',
            loadText+'control/app-control-template.html',
            loadText+'control/app-event-auto-refresh-template.html',
            loadText+'core/app-mini-map-template.html',
            loadText+'core/app-panel-template.html',
            loadText+'core/app-paper-template.html',
            loadText+'core/app-popup-template.html',
            loadText+'core/app-selection-template.html',
            loadText+'core/app-svg-template.html',
            loadText+'header/app-header-group-template.html',
            loadText+'header/app-header-item-template.html',
            loadText+'layout/app-body-template.html',
            loadText+'layout/app-center-template.html',
            loadText+'layout/app-footer-template.html',
            loadText+'layout/app-header-template.html',
            loadText+'layout/app-left-template.html',
            loadText+'layout/app-right-template.html',
            loadText+'left/app-left-menu-item-template.html',
            loadText+'left/app-left-menu-template.html',
            loadText+'left/app-left-search-template.html',
            loadText+'left/app-left-tree-template.html',
            loadText+'popup/app-contexts-template.html',
            loadText+'popup/app-context-template.html',
            loadText+'popup/app-menus-template.html',
            loadText+'popup/app-menu-template.html',
            loadText+'tree/app-tree-contents-template.html',
            loadText+'tree/app-tree-content-template.html',
            loadText+'tree/app-tree-node-template.html',
            loadText+'tree/app-tree-root-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-control-arrow-normal-template'],
            global['app-control-arrow-template'],
            global['app-control-button-template'],
            global['app-control-dummy-template'],
            global['app-controls-template'],
            global['app-control-template'],
            global['app-event-auto-refresh-template'],
            global['app-mini-map-template'],
            global['app-panel-template'],
            global['app-paper-template'],
            global['app-popup-template'],
            global['app-selection-template'],
            global['app-svg-template'],
            global['app-header-group-template'],
            global['app-header-item-template'],
            global['app-body-template'],
            global['app-center-template'],
            global['app-footer-template'],
            global['app-header-template'],
            global['app-left-template'],
            global['app-right-template'],
            global['app-left-menu-item-template'],
            global['app-left-menu-template'],
            global['app-left-search-template'],
            global['app-left-tree-template'],
            global['app-contexts-template'],
            global['app-context-template'],
            global['app-menus-template'],
            global['app-menu-template'],
            global['app-tree-contents-template'],
            global['app-tree-content-template'],
            global['app-tree-node-template'],
            global['app-tree-root-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appControlArrowNormalTemplate,
        appControlArrowTemplate,
        appControlButtonTemplate,
        appControlDummyTemplate,
        appControlsTemplate,
        appControlTemplate,
        appEventAutoRefreshTemplate,
        appMiniMapTemplate,
        appPanelTemplate,
        appPaperTemplate,
        appPopupTemplate,
        appSelectionTemplate,
        appSvgTemplate,
        appHeaderGroupTemplate,
        appHeaderItemTemplate,
        appBodyTemplate,
        appCenterTemplate,
        appFooterTemplate,
        appHeaderTemplate,
        appLeftTemplate,
        appRightTemplate,
        appLeftMenuItemTemplate,
        appLeftMenuTemplate,
        appLeftSearchTemplate,
        appLeftTreeTemplate,
        appContextsTemplate,
        appContextTemplate,
        appMenusTemplate,
        appMenuTemplate,
        appTreeContentsTemplate,
        appTreeContentTemplate,
        appTreeNodeTemplate,
        appTreeRootTemplate
) {

    var templateObject = {
        'app-control-arrow-normal-template': appControlArrowNormalTemplate,
        'app-control-arrow-template': appControlArrowTemplate,
        'app-control-button-template': appControlButtonTemplate,
        'app-control-dummy-template': appControlDummyTemplate,
        'app-controls-template': appControlsTemplate,
        'app-control-template': appControlTemplate,
        'app-event-auto-refresh-template': appEventAutoRefreshTemplate,
        'app-mini-map-template': appMiniMapTemplate,
        'app-panel-template': appPanelTemplate,
        'app-paper-template': appPaperTemplate,
        'app-popup-template': appPopupTemplate,
        'app-selection-template': appSelectionTemplate,
        'app-svg-template': appSvgTemplate,
        'app-header-group-template': appHeaderGroupTemplate,
        'app-header-item-template': appHeaderItemTemplate,
        'app-body-template': appBodyTemplate,
        'app-center-template': appCenterTemplate,
        'app-footer-template': appFooterTemplate,
        'app-header-template': appHeaderTemplate,
        'app-left-template': appLeftTemplate,
        'app-right-template': appRightTemplate,
        'app-left-menu-item-template': appLeftMenuItemTemplate,
        'app-left-menu-template': appLeftMenuTemplate,
        'app-left-search-template': appLeftSearchTemplate,
        'app-left-tree-template': appLeftTreeTemplate,
        'app-contexts-template': appContextsTemplate,
        'app-context-template': appContextTemplate,
        'app-menus-template': appMenusTemplate,
        'app-menu-template': appMenuTemplate,
        'app-tree-contents-template': appTreeContentsTemplate,
        'app-tree-content-template': appTreeContentTemplate,
        'app-tree-node-template': appTreeNodeTemplate,
        'app-tree-root-template': appTreeRootTemplate
    };

    return templateObject;

});