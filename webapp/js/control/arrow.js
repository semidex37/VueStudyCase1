(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/core/mixins'
        ], factory);
    }else {
        global.arrow = factory(
            global.mixins
        );
    }

})(typeof window !== 'undefined' ? window : this, function(mixins) {

    // arrow
    Vue.component('app-control-arrow-template', {
        mixins: [mixins.getComponentMixin()],
        template: '#app-control-arrow-template',
        props: {

        },
        computed: {
            // left: function() {
            //     return this.item.source.left;
            // },
            // top: function() {
            //     return this.item.source.top;
            // },
            d: function () {
                // var source = this.item.source;
                // var target = this.item.target;
                //
                // var startPointX = source.left + source.width;
                // var startPointY = source.top + (source.height / 2);
                //
                // var endPointX = target.left - 5;
                // var endPointY = target.top + (target.height / 2);

                var d = "M" + this.startPoint.x + "," + this.startPoint.y;
                d += " L" + this.endPoint.x + "," + this.endPoint.y;

                // return "M10,10 L150,10 L150,60 L200,60";
                return d;
            },
            fillOpacity: function () {
                return 0;
            },
            startPoint: function() {
                var source = this.item.source;
                var startPointX = source.left + source.width;
                var startPointY = source.top + (source.height / 2);

                return {
                    x: startPointX,
                    y: startPointY
                }
            },
            endPoint: function() {
                var target = this.item.target;
                var endPointX = target.left - 5;
                var endPointY = target.top + (target.height / 2);

                return {
                    x: endPointX,
                    y: endPointY
                }
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
                console.log('arrow', 'changeEvent');
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