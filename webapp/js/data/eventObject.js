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
        console.log('setSelection', this.ActiveObject.item.id);
        this.isDrag = true;
        this.MouseDownPoint.X = e.clientX;
        this.MouseDownPoint.Y = e.clientY;

        var elPoint = util.mouseEvent.CalculatorMousePoint(vue.$el, e.clientX, e.clientY);

        this.MouseDownDiffPoint.X = elPoint.X;
        this.MouseDownDiffPoint.Y = elPoint.Y;
    };

    /**
     * Resize Direction
     * @type {{NW: string, N: string, NE: string, E: string, SE: string, S: string, SW: string, W: string}}
     */
    var resizeType = {
        NW: 'nw',   // 북서
        N: 'n',     // 북
        NE: 'ne',   // 북동
        E: 'e',     // 동
        SE: 'se',   // 남동
        S: 's',     // 남
        SW: 'sw',   // 남서
        W: 'w'      // 서
    };

    var ControlDrag = function(e) {
        if(this.ActiveObject) {
            var x, y;
            var zoomToFitRatio = publicObject.ZoomToFit / 100;

            if(this.isResize) {
                // console.log('ControlDrag', 'resize', this.ResizeType);
                x = (this.MouseDownPoint.X - e.clientX) / zoomToFitRatio;
                y = (this.MouseDownPoint.Y - e.clientY) / zoomToFitRatio;

                var diffLeft = 0,
                    diffTop = 0,
                    diffWidth = 0,
                    diffHeight = 0;

                switch (this.ResizeType) {
                    case resizeType.NW: // 북서
                        diffTop = this.ReferItem.top - y;
                        diffLeft = this.ReferItem.left - x;
                        diffWidth = this.ReferItem.width + x;
                        diffHeight = this.ReferItem.height + y;

                        if(diffWidth < 0) {
                            diffLeft = 0;
                        }
                        if(diffHeight < 0) {
                            diffTop = 0;
                        }
                        break;

                    case resizeType.NE: // 북동
                        diffTop = this.ReferItem.top - y;
                        diffWidth = this.ReferItem.width - x;
                        diffHeight = this.ReferItem.height + y;
                        break;

                    case resizeType.SE: // 남동
                        diffWidth = this.ReferItem.width - x;
                        diffHeight = this.ReferItem.height - y;
                        break;

                    case resizeType.SW: // 남서
                        diffLeft = this.ReferItem.left - x;
                        diffWidth = this.ReferItem.width + x;
                        diffHeight = this.ReferItem.height - y;

                        if(diffWidth < 0) {
                            diffLeft = 0;
                        }
                        break;

                    case resizeType.N: // 북
                        diffTop = this.ReferItem.top - y;
                        diffHeight = this.ReferItem.height + y;
                        break;

                    case resizeType.S: // 남
                        diffHeight = this.ReferItem.height - y;
                        break;

                    case resizeType.E: // 동
                        diffWidth = this.ReferItem.width - x;
                        break;

                    case resizeType.W: // 서
                        diffLeft = this.ReferItem.left - x;
                        diffWidth = this.ReferItem.width + x;

                        if(diffWidth < 0) {
                            diffLeft = 0;
                        }
                        break;
                }

                // console.log('ControlDrag', 'resize', this.ResizeType,
                //     'X-Y: [', x, y, ']',
                //     'Left-Top: [', this.ActiveObject.item.left, this.ActiveObject.item.top, ']',
                //     'Width-Height: [', this.ActiveObject.item.width, this.ActiveObject.item.height, ']',
                // );
                // console.log(
                //     'diffLeft:', this.ActiveObject.item.left, '-->', diffLeft,
                //     'diffTop:', this.ActiveObject.item.top, '-->', diffTop,
                //     'diffWidth:', this.ActiveObject.item.width, '-->', diffWidth,
                //     'diffHeight:', this.ActiveObject.item.height, '-->', diffHeight
                // );

                // Validation
                if(diffLeft < 0) {
                    diffLeft = 0;
                }
                if(diffTop < 0) {
                    diffTop = 0;
                }
                if(diffWidth < 0) {
                    diffWidth = 0;
                }
                if(diffHeight < 0) {
                    diffHeight = 0;
                }

                if(diffLeft) {
                    this.ActiveObject.item.left = diffLeft;
                }
                if(diffTop) {
                    this.ActiveObject.item.top = diffTop;
                }
                if(diffWidth) {
                    this.ActiveObject.item.width = diffWidth;
                }
                if(diffHeight) {
                    this.ActiveObject.item.height = diffHeight;
                }

            }else if(this.isDrag) {
                var svgPoint = util.mouseEvent.CalculatorMousePoint(document.getElementById('app-svg'), e.clientX, e.clientY);

                // console.log("ControlDrag", this.ActiveObject.item.id);
                x = svgPoint.X - this.MouseDownDiffPoint.X;
                y = svgPoint.Y - this.MouseDownDiffPoint.Y;

                // console.log("ControlDrag", this.ActiveObject.item.id,
                //     '[', this.ActiveObject.item.left, '-->', x, ']',
                //     '[', this.ActiveObject.item.top, '-->', y, ']'
                // );

                this.ActiveObject.item.left = x / zoomToFitRatio;
                this.ActiveObject.item.top = y / zoomToFitRatio;

            }
        }
    };

    var enableMouseDrag = function() {
        this.isDrag = true;
    };

    var disableMouseDrag = function() {
        this.isDrag = false;
    };

    var enableMouseResize = function(resizeType) {
        this.isResize = true;
        this.ResizeType = resizeType;
        // CloneItem.call(this);

        SaveReferItem(this.ActiveObject.item);
    };

    var disableMouseResize = function() {
        this.isResize = false;
        this.ResizeType = null;

        RemoveReferItem();
    };

    var SaveReferItem = function(item) {
        console.log("CloneItem", item);

        var _item = {};
        for(var idx in item) {
            _item[idx] = item[idx];
        }
        eventObject.ReferItem = _item;
    };

    var RemoveReferItem = function() {
        delete eventObject.ReferItem;
    };

    eventObject = {
        ActiveObjectType: activeObjectType,
        ActiveObject: activeObject,
        ReferItem: null,
        MouseDownPoint: {
            X: 0,
            Y: 0
        },
        MouseDownDiffPoint: {
            X: 0,
            Y: 0
        },
        ResizeType: null,
        isDrag: false,
        isResize: false,
        setActiveObject: setActiveObject,
        setSelection: setSelection,
        ControlDrag: ControlDrag,
        disableMouseDrag: disableMouseDrag,
        disableMouseResize: disableMouseResize,
        enableMouseResize: enableMouseResize
    };

    return eventObject;

});