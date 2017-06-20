(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/util/util'
        ], factory);
    }else {
        global.eventObject = factory(
            global.util
        );
    }

})(typeof window !== 'undefined' ? window : this, function(util) {

    var activeObjectType = null;
    var activeObject = null;

    // var setActiveObject = function(obj) {
    //     this.ActiveObject = obj;
    // };
    //
    // var getActiveObject = function() {
    //     return this.ActiveObject;
    // };

    var ControlDrag = function(el, e) {
        var svgPoint = util.mouseEvent.CalculatorMousePoint(el, e.clientX, e.clientY);


        this.ActiveObject.item.left = svgPoint.X - this.MouseDownDiffPoint.X;
        this.ActiveObject.item.top = svgPoint.Y - this.MouseDownDiffPoint.Y;

        // console.log("ControlDrag", this.ActiveObject.item.id, '[', this.ActiveObject.item.left, this.ActiveObject.item.top, ']');
        console.log("ControlDrag", this.ActiveObject.item.id);
    };



    return {
        ActiveObjectType: activeObjectType,
        ActiveObject: activeObject,
        MouseDownPoint: {
            X: 0,
            Y: 0
        },
        MouseDownDiffPoint: {
            X: 0,
            Y: 0
        },
        isDrag: false,
        isResize: false,
        ControlDrag: ControlDrag
    };

});