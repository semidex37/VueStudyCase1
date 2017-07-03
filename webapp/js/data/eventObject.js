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

    var setMouseDownPoint = function(x, y) {
        this.MouseDownPoint.X = x;
        this.MouseDownPoint.Y = y;
    };

    var setMouseDownDiffPoint = function(x, y) {
        this.MouseDownDiffPoint.X = x;
        this.MouseDownDiffPoint.Y = y;
    };

    var setMousePoint = function(vue, e) {
        setMouseDownPoint.call(this, e.clientX, e.clientY);

        var elPoint = util.mouseEvent.CalculatorMousePoint(vue.$el, e.clientX, e.clientY);

        setMouseDownDiffPoint.call(this, elPoint.X, elPoint.Y);
    };

    var setActiveObject = function(vue, /* MouseEvent */ e) {
        this.ActiveObject = vue;

        if(typeof e != "undefined"
            && e.constructor == MouseEvent) {
            setSelection.call(this, vue, e);
        }
    };

    var setSelection = function(vue, e) {
        console.log('setSelection', this.ActiveObject.item.id);
        enableMouseDrag.call(this);
        setMousePoint.call(this, vue, e);
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

            if(this.isRotation){
                console.log('isRotation');

            }else if(this.isResize) {
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
                        break;
                }

                // 북
                if(this.ResizeType == resizeType.NW
                    || this.ResizeType == resizeType.NE
                    || this.ResizeType == resizeType.N) {
                    if(diffHeight < 0) {
                        diffTop = 0;
                    }
                }

                // 남
                if(this.ResizeType == resizeType.SE
                    || this.ResizeType == resizeType.SW
                    || this.ResizeType == resizeType.S) {

                }

                // 동
                if(this.ResizeType == resizeType.NE
                    || this.ResizeType == resizeType.SE
                    || this.ResizeType == resizeType.E) {

                }

                // 서
                if(this.ResizeType == resizeType.NW
                    || this.ResizeType == resizeType.SW
                    || this.ResizeType == resizeType.W) {
                    if(diffWidth < 0) {
                        diffLeft = 0;
                    }
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

    var enableMouseRotation = function() {
        this.isRotation = true;
    };

    var disableMouseRotation = function() {
        this.isRotation = false;
    };

    var disableBusObject = function() {
        for(var idx in this.busObject) {
            if(this.busObject[idx] != null) {
                this.busObject[idx] = null;
            }
        }// ~for - idx
    };

    var disableMouseMode = function() {
        disableMouseDrag.call(this);
        disableMouseResize.call(this);
        disableMouseRotation.call(this);
        disablePopup.call(this);
        disableBusObject.call(this);
    };

    var enablePopup = function() {
        this.isPopup = true;
    };

    var disablePopup = function() {
        this.isPopup = false;
    };

    var SaveReferItem = function(item) {
        console.log("SaveReferItem", item);

        var _item = {};
        for(var idx in item) {
            _item[idx] = item[idx];
        }
        eventObject.ReferItem = _item;
    };

    var RemoveReferItem = function() {
        delete eventObject.ReferItem;
    };

    // Event Bus
    var bus = new Vue();

    var busEvent = {
        clickEventContextMenu: 'click-event-context-menu'
    };

    var busObject = {};

    var id;
    for(var idx in busEvent) {
        id = busEvent[idx];
        busObject[id] = null;
        bus.$on(id, function(args) {
            busObject[id] = args;
        });
    }// ~for - idx

    eventObject = {
        bus: bus,
        busEvent: busEvent,
        busObject: busObject,
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
        isRotation: false,
        isPopup: false,
        setActiveObject: setActiveObject,
        setSelection: setSelection,
        setMousePoint: setMousePoint,
        ControlDrag: ControlDrag,
        disableMouseMode: disableMouseMode,
        disableMouseDrag: disableMouseDrag,
        disableMouseResize: disableMouseResize,
        disableMouseRotation: disableMouseRotation,
        enableMouseResize: enableMouseResize,
        enableMouseRotation: enableMouseRotation,
        enablePopup: enablePopup,
        disablePopup: disablePopup
    };

    return eventObject;

});