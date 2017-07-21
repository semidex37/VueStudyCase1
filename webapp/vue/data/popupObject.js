(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.popupObject = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {

    var popups = [];

    var isPopup = function(vue) {
        var resultBln = false;
        var popup;
        for(var idx in popups) {
            popup = popups[idx];
            if(popup.vue == vue) {
                resultBln = true;
                break;
            }
        }// ~for - idx
        return resultBln;
    };

    var addPopup = function(popup) {
        popups.push(popup);
    };

    var removePopup = function(popup) {
        var index = popups.indexOf(popup);
        var _popup = popups.splice(index, 1)[0];

        if(index == -1) return false;

        delete _popup[0];

        return true;
    };

    var removePopupByVue = function(vue) {
        var resultBln = null;
        var popup;
        for(var idx in popups) {
            popup = popups[idx];
            if(popup.vue == vue) {
                resultBln = removePopup(popup);
                break;
            }
        }// ~for - idx
        return resultBln;
    };

    return {
        $popups: popups,
        isPopup: isPopup,
        AddPopup: addPopup,
        RemovePopup: removePopup,
        RemovePopupByVue: removePopupByVue
    };

});