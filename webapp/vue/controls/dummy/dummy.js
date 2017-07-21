(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/data/templateObject',
            'js/core/mixins'
        ], factory);
    }else {
        global.dummy = factory(
            global.mixins
        );
    }

})(typeof window !== 'undefined' ? window : this, function(templateObject, mixins) {

    var type = 'dummy';
    var name = 'Button';
    var width = 120;
    var height = 60;
    var fill = 'rgb(198, 217, 241)';

    Vue.component('app-control-dummy-template', {
        mixins: [mixins.getComponentMixin()],
        template: templateObject['app-control-dummy-template'],
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