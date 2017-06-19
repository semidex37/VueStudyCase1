(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(factory);
    }else {
        global.generator = factory();
    }

})(typeof window !== 'undefined' ? window : this, function() {

    var generatorId = 0;

    var GeneratorId = function (tag) {
        generatorId++;
        return tag ? tag+generatorId : generatorId;
    };

    return {
        GeneratorId: GeneratorId
    };

});