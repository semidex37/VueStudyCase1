// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: "",
    paths: {
        js: 'js'
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

