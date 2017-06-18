(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define(['js/data/publicObject'], factory);
    }else {
        global.headerObject = factory(global.publicObject);
    }

})(typeof window !== 'undefined' ? window : this, function(/* object */ publicObject) {

    /* Root */
    var root = {
        name: 'Root',
        type: 'Root',
        children: []
    };

    /* Group */
    var group1 = {
        name: 'Group 1',
        type: 'Group',
        children: []
    };

    var group2 = {
        name: 'Group 2',
        type: 'Group',
        children: []
    };

    /* Item */
    var itemIconUndo = {
        type: 'Icon',
        text: 'Undo'
    };

    var itemIconRedo = {
        type: 'Icon',
        text: 'Redo'
    };

    var itemIconTrash = {
        type: 'Icon',
        text: 'Trash'
    };

    var itemButtonExportSVG = {
        type: 'Button',
        text: 'Export SVG'
    };

    var itemButtonExportPNG = {
        type: 'Button',
        text: 'Export PNG'
    };

    var itemIconPrint = {
        type: 'Icon',
        text: 'Print'
    };

    var itemRangeZoomToFit = {
        type: 'Range',
        id: 'rangeZoomToFit',
        text: 'Zoom To Fit:',
        afterValue: '%',
        min: 20,
        max: 500,
        value: publicObject.ZoomToFit,
        changed: function(value) {
            publicObject.ZoomToFit = value;
        },
        step: 20
    };


    var itemRangeGridSize = {
        type: 'Range',
        id: 'rangeGridSize',
        text: 'Grid Size:',
        min: 5,
        max: 25,
        value: publicObject.PaperSize,
        changed: function(value) {
            publicObject.PaperSize = value;
        }
    };

    var addChildren = function(parentObject, children) {
        if(typeof parentObject.children != "object"
            && !parentObject.children.hasOwnProperty("length")) {
            parentObject.children = [];
        }
        var index, indexLen=children.length;
        for(index=0; index<indexLen; index++) {
            children[index].index = index;
            parentObject.children.push(children[index]);
        }
    };

    addChildren(root, [group1, group2]);
    addChildren(group1, [
        itemIconUndo,
        itemIconRedo,
        itemIconTrash,
        itemButtonExportSVG,
        itemButtonExportPNG,
        itemIconPrint
    ]);
    addChildren(group2, [
        itemRangeZoomToFit,
        itemRangeGridSize
    ]);

    return {
        root: root,
        groups: {
            group1: group1,
            group2: group2
        },
        itemIcon: {
            itemIconUndo: itemIconUndo,
            itemIconRedo: itemIconRedo,
            itemIconTrash: itemIconTrash,
            itemIconPrint: itemIconPrint,
        },
        itemButton: {
            itemButtonExportSVG: itemButtonExportSVG,
            itemButtonExportPNG: itemButtonExportPNG
        },
        itemRange: {
            itemRangeZoomToFit: itemRangeZoomToFit,
            itemRangeGridSize: itemRangeGridSize
        }
    };

});