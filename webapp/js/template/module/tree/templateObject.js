(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/module/tree/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'app-tree-contents-template.html',
            loadText+'app-tree-content-template.html',
            loadText+'app-tree-node-template.html',
            loadText+'app-tree-root-template.html'
            ], factory);
    }

})(typeof window !== 'undefined' ? window : this, function(
        appTreeContentsTemplate,
        appTreeContentTemplate,
        appTreeNodeTemplate,
        appTreeRootTemplate
) {

    var templateObject = {
        'app-tree-contents-template': appTreeContentsTemplate,
        'app-tree-content-template': appTreeContentTemplate,
        'app-tree-node-template': appTreeNodeTemplate,
        'app-tree-root-template': appTreeRootTemplate
    };

    return templateObject;

});