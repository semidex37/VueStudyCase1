(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/',
            'js/module/popup/popup'
        ], factory);
    }else {
        global.popup = factory();
    }

})(typeof window !== 'undefined' ? window : this, function(popup) {
    // console.log("Loaded module!");



    new Vue({
        el: '#app-popup-search-controls',
        data: {
            title: 'Search Controls',
            headerIcons: [
                {
                    type: 'image',
                    icon: 'app-icon-selection-close',
                    text: 'Add'
                }, {
                    type: 'image',
                    icon: 'app-icon-selection-add',
                    text: 'Close'
                }
            ],
            isHeader: true,
            isBody: true,
            isFooter: true
        }
    });

    return {};

});