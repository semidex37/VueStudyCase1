(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/templateObject',
            'js/core/mixins',
            'js/data/eventObject'
        ], factory);
    }else {
        global.arrow = factory(
            global.mixins,
            global.eventObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, mixins, eventObject) {

    // arrow
    Vue.component('app-control-arrow-template', {
        mixins: [mixins.getComponentMixin()],
        template: templateObject['app-control-arrow-template'],
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
            eventPoint: function() {
                var x = this.startPoint.x < this.endPoint.x ? this.startPoint.x : this.endPoint.x;
                var y = this.startPoint.y < this.endPoint.y ? this.startPoint.y : this.endPoint.y;

                x += (Math.abs(this.startPoint.x-this.endPoint.x) / 2);
                y += (Math.abs(this.startPoint.y-this.endPoint.y) / 2);

                x -= 45;
                // x += 10;
                y += 5;
                // y -= 10;

                return {
                    x: x,
                    y: y
                }
            },
            eventTransform: function() {
                return 'translate(' + this.eventPoint.x + ', ' + this.eventPoint.y + ')';
            },
            iconTransform: function() {
                return 'translate(2, 2)';
            },
            textTransform: function() {
                return 'translate(20, 5)';
            },
            // buttonTransform: function() {
            //     return 'translate(70, 7)';
            // },
            eventText: function() {
                if(this.item.selectedEvent) {
                    return this.item.selectedEvent.name;
                }

                return this.item.defaultSelectedEvent.name;
            }
        },
        methods: {
            clickEvent: function(event) {
                eventObject.bus.$emit(eventObject.busEvent.clickEventContextMenu, this, event);
            },
            changeEvent: function(event) {
                this.item.selectedEvent = event;
            }
        }

    });

    var type = 'button';
    var fillOpacity = 0;

    return {
        type: type,
        fillOpacity: fillOpacity
    };

});