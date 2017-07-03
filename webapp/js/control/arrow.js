(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/core/mixins',
            'js/data/eventObject'
        ], factory);
    }else {
        global.arrow = factory(
            global.mixins,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(mixins, eventObject) {

    // arrow
    Vue.component('app-control-arrow-template', {
        mixins: [mixins.getComponentMixin()],
        template: '#app-control-arrow-template',
        computed: {
            d: function () {
                var d = "M" + this.startPoint.x + "," + this.startPoint.y +
                        " L" + this.endPoint.x + "," + this.endPoint.y;

                // return "M10,10 L150,10 L150,60 L200,60";
                return d;
            },
            fillOpacity: function () {
                return 0;
            },
            startPoint: function() {
                return {
                    x: this.item.source.left + this.item.source.width,
                    y: this.item.source.top + (this.item.source.height / 2)
                };
            },
            endPoint: function() {
                return {
                    x: this.item.target.left - 5,
                    y: this.item.target.top + (this.item.target.height / 2)
                };
            },
            eventTransform: function() {
                var x = this.startPoint.x < this.endPoint.x ? this.startPoint.x : this.endPoint.x;
                var y = this.startPoint.y < this.endPoint.y ? this.startPoint.y : this.endPoint.y;

                x += (Math.abs(this.startPoint.x-this.endPoint.x) / 2);
                y += (Math.abs(this.startPoint.y-this.endPoint.y) / 2);

                x -= 30;
                // y -= 10;

                return 'translate(' + x + ', ' + y + ')';
            },
            iconTransform: function() {
                return 'translate(2, 2)';
            },
            textTransform: function() {
                return 'translate(20, 5)';
            },
            buttonTransform: function() {
                return 'translate(70, 7)';
            }
        },
        methods: {
            changeEvent: function() {
                eventObject.bus.$emit(eventObject.busEvent.clickEventContextMenu, this);
            }
        }

    });

    var type = 'button';
    var fillOpacity = 0;

    return {
        type: type,
        fillOpacity: fillOpacity
    };

    // var type = 'button';
    // var name = 'Button';
    // var width = 120;
    // var height = 60;
    // var minWidth = 80;
    // var minHeight = 40;
    // var fill = 'rgb(198, 217, 241)';
    //
    // Vue.component('app-control-button-template', {
    //     mixins: [mixins.getComponentMixin()],
    //     template: '#app-control-button-template',
    //     computed: {
    //         addButtonTransform: function() {
    //             return 'translate(' + (this.width - 20) + ', 5)';
    //         }
    //     },
    //     methods: {
    //         onMouseMove: function(e) {
    //             console.log('app-control-button', 'onMouseMove', e);
    //         },
    //         onMouseUp: function(e) {
    //             console.log('app-control-button', 'onMouseUp', e);
    //         },
    //         onClick: function(e) {
    //             console.log('app-control-button', 'onClick', e);
    //         // },
    //         // onMouseDownAddItem: function(e) {
    //         //     console.log('app-control-button', 'onMouseDownAddItem');
    //         }
    //     }
    // });
    //
    // return {
    //     type: type,
    //     name: name,
    //     width: width,
    //     height: height,
    //     // minWidth: minWidth,
    //     // minHeight: minHeight,
    //     fill: fill
    // };

});