(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'popup/app-popup-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-popup-template']
        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appPopupTemplate
) {

    var templateObject = {
        'app-popup-template': appPopupTemplate
    };

    return templateObject;

});