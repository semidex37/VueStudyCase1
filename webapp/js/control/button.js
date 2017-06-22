(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/core/mixins'
        ], factory);
    }else {
        global.button = factory(
            global.mixins
        );
    }

})(typeof window !== 'undefined' ? window : this, function(mixins) {

    var type = 'button';
    var name = 'Button';
    var width = 120;
    var height = 60;
    var fill = 'rgb(198, 217, 241)';

    Vue.component('app-control-button', {
        mixins: [mixins.getComponentMixin()],
        template: '#app-control-button-template',
        computed: {
            addButtonTransform: function() {
                return 'translate(' + (this.width - 20) + ', 5)';
            }
        },
        methods: {
            onMouseMove: function(e) {
                console.log('app-control-button', 'onMouseMove', e);
            },
            onMouseUp: function(e) {
                console.log('app-control-button', 'onMouseUp', e);
            },
            onClick: function(e) {
                console.log('app-control-button', 'onClick', e);
            },
            onMouseDownAddItem: function(e) {
                console.log('app-control-button', 'onMouseDownAddItem');
            }
        }
    });

    return {
        type: type,
        name: name,
        width: width,
        height: height,
        fill: fill
    };

});