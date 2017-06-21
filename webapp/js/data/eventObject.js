(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/publicObject',
            'js/util/util'
        ], factory);
    }else {
        global.eventObject = factory(
            global.publicObject,
            global.util
        );
    }

})(typeof window !== 'undefined' ? window : this, function(publicObject, util) {

    var eventObject = {};

    var activeObjectType = null;
    var activeObject = null;

    // var setActiveObject = function(obj) {
    //     this.ActiveObject = obj;
    // };
    //
    // var getActiveObject = function() {
    //     return this.ActiveObject;
    // };

    var setActiveObject = function(vue, /* MouseEvent */ e) {
        this.ActiveObject = vue;

        if(e.constructor == MouseEvent) {
            setSelection.call(this, vue, e);
        }
    };

    var setSelection = function(vue, e) {
        this.isDrag = true;
        this.MouseDownPoint.X = e.clientX;
        this.MouseDownPoint.Y = e.clientY;

        var elPoint = util.mouseEvent.CalculatorMousePoint(vue.$el, e.clientX, e.clientY);

        this.MouseDownDiffPoint.X = elPoint.X;
        this.MouseDownDiffPoint.Y = elPoint.Y;
    };

    var ControlDrag = function(e) {
        if(this.ActiveObject) {
            if(this.isResize) {



            }else if(this.isDrag) {
                var svgPoint = util.mouseEvent.CalculatorMousePoint(document.getElementById('app-svg'), e.clientX, e.clientY);

                console.log("ControlDrag", this.ActiveObject.item.id);
                var x = svgPoint.X - this.MouseDownDiffPoint.X;
                var y = svgPoint.Y - this.MouseDownDiffPoint.Y;


                if(this.isDiffMode) {
                    // var diffX = x - this.ActiveObject.item.left ;
                    // var diffY = y - this.ActiveObject.item.top;

                    // console.log("diffX", diffX);
                    // if(publicObject.PaperSize > 0
                    //     && publicObject.PaperSize > diffX) {
                    //     console.log('left', publicObject.PaperSize * Math.round(diffX/publicObject.PaperSize));
                    //     // diffX = (publicObject.PaperSize * Math.round(diffX/publicObject.PaperSize));
                    //     diffX = publicObject.PaperSize;
                    //
                    //     this.ActiveObject.item.left += diffX;
                    //
                    // }else if(publicObject.PaperSize < diffX) {
                    //     console.log('right', publicObject.PaperSize * Math.round(diffX/publicObject.PaperSize));
                    //     // diffX = (publicObject.PaperSize * Math.round(diffX/publicObject.PaperSize));
                    //     diffX = publicObject.PaperSize;
                    //
                    //     this.ActiveObject.item.left -= diffX;
                    //
                    // }

                    // if(publicObject.PaperSize > diffY) {
                    //     this.ActiveObject.item.top += publicObject.PaperSize;
                    //
                    // }else if(publicObject.PaperSize < diffY) {
                    //     this.ActiveObject.item.top -= publicObject.PaperSize;
                    //
                    // }

                    // console.log("ControlDrag", this.ActiveObject.item.id,
                    //     '[', this.ActiveObject.item.left, '-->', diffX, ']',
                    //     '[', this.ActiveObject.item.top, '-->', diffY, ']',
                    //     '[', diffX, '-', diffY, ']',
                    // );


                }else {
                    console.log("ControlDrag", this.ActiveObject.item.id,
                        '[', this.ActiveObject.item.left, '-->', x, ']',
                        '[', this.ActiveObject.item.top, '-->', y, ']'
                    );

                    this.ActiveObject.item.left = x;
                    this.ActiveObject.item.top = y;
                }



            }
        }
    };

    var enableMouseDrag = function() {
        this.isDrag = true;
    };

    var disableMouseDrag = function() {
        this.isDrag = false;
    };

    var enableMouseResize = function() {
        eventObject.isResize = true;
    };

    var disableMouseResize = function() {
        eventObject.isResize = false;
    };

    eventObject = {
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
        isDiffMode: false, // true
        setActiveObject: setActiveObject,
        setSelection: setSelection,
        ControlDrag: ControlDrag,
        disableMouseDrag: disableMouseDrag
    };

    return eventObject;

});