(function(global, factory) {
    'use strict';

    var loadText = 'loadText!js/template/';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            loadText+'tree/app-tree-contents-template.html',
            loadText+'tree/app-tree-content-template.html',
            loadText+'tree/app-tree-node-template.html',
            loadText+'tree/app-tree-root-template.html'
            ], factory);
    }else {
        global.templateObject = factory([
            global['app-tree-contents-template'],
            global['app-tree-content-template'],
            global['app-tree-node-template'],
            global['app-tree-root-template']
        ]);
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