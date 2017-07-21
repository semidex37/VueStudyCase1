(function(global, factory) {
    'use strict';

    var loadText = 'loadText!vue/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'vue/util/util',
            'vue-template/module/popup/templateObject',
            'vue-template/module/tree/templateObject',
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