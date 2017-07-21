(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.publicObject = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {

    var publicObject = {
        PaperSize: 10,
        ZoomToFit: 100,
        PopupList: []
    };

    publicObject.isPopup = function(vue) {
        var resultBln = false;
        var popup;
        for(var idx in this.PopupList) {
            popup = this.PopupList[idx];
            if(popup.vue == vue) {
                resultBln = true;
                break;
            }
        }// ~for - idx
        return resultBln;
    };


    // publicObject.PopupList.push({
    //     title: 'Search Controls',
    //     headerIcons: [
    //         {
    //             type: 'image',
    //             icon: 'app-icon-selection-close',
    //             text: 'Add'
    //         }, {
    //             type: 'image',
    //             icon: 'app-icon-selection-add',
    //             text: 'Close'
    //         }
    //     ],
    //     isHeader: true,
    //     isBody: true,
    //     isFooter: true
    // });

    // return {
    //     root: publicObject,
    //     setPaperSize: function(newValue) {
    //         publicObject.PaperSize = newValue;
    //     }
    // };

    return publicObject;

});