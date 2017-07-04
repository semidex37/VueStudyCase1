// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: "",
    paths: {
        js: 'js',
        // template: 'js/template',
        loadText: 'js/lib/require/text',
        // constObject: 'js/data/constObject',
        // contextMenuObject: 'js/data/contextMenuObject',
        // controlObject: 'js/data/controlObject',
        // dataObject: 'js/data/dataObject',
        // eventMenuObject: 'js/data/eventMenuObject',
        // eventObject: 'js/data/eventObject',
        // headerObject: 'js/data/headerObject',
        // itemObject: 'js/data/itemObject',
        // leftMenuObject: 'js/data/leftMenuObject',
        // leftMenuTree: 'js/data/leftMenuTree',
        // publicObject: 'js/data/publicObject',
        // templateObject: 'js/data/templateObject',
        // mixins: 'js/core/mixins'

        // controls: 'js/controls',
        // core: 'js/core',
        // data: 'js/data',
        // popup: 'js/popup',
        // util: 'js/util'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
// requirejs(['app/main']);
console.log("Loaded: app.js");

requirejs(['js/iWorkflow']);

// var iWorkflow = require(['js/iWorkflow'], function(iWorkflow){
//
// });

// var iStudioVersion;
// var config = require(['js/lib/require/text!istudio.version.txt'], function(config) {
//     iStudioVersion = config;
// });

