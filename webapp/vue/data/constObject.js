(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }

})(typeof window !== 'undefined' ? window : this, function() {

    var enDirection = {
        // 북서
        NorthWest: 'nw',
        // 북
        North: 'n',
        // 북동
        NorthEast: 'ne',
        // 동
        East: 'e',
        // 남동
        SouthEast: 'se',
        // 남
        South: 's',
        // 남서
        SouthWest: 'sw',
        // 서
        West: 'w'
    };

    var constObject = {
        direction: enDirection
    };

    return constObject;

});