(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/util/util',
            'js/template/module/popup/templateObject',
            'js/template/module/tree/templateObject',
            loadText+'module/app-popup-container-template.html'
            ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(
    util,
    popup,
    tree,
    appPopupContainerTemplate
) {

    var templateObject = {
        'app-popup-container-template': appPopupContainerTemplate
    };

    templateObject = util.assign(templateObject, popup);

    templateObject = util.assign(templateObject, tree);

    return templateObject;

});