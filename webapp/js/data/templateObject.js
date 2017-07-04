(function(global, factory) {
    'use strict';

    var loadText = 'loadText!';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'js/template/app-header-template.html'
            ], factory);
    }else {
        global.templateObject = factory([

        ]);
    }

})(typeof window !== 'undefined' ? window : this, function(
    appHeaderTemplate
) {

    var templateObject = {
        appHeaderTemplate: appHeaderTemplate
    };

    return templateObject;

});