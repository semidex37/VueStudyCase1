(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/util/generator'
        ], factory);
    }else {
        global.itemObject = factory(
            global.Generator
        );
    }

})(typeof window !== 'undefined' ? window : this, function(generator) {

    var itemObject = {};
    var items = [];

    var AddItem = function(item) {
        var id = generator.GeneratorId('item');
        var item = {
            id: id,
            type: item.type,
            name: item.name
        };
        itemObject[id] = item;
        items.push(item);
    };

    var RemoveItem = function(item) {
        var id = item.id;
        var index = items.indexOf(item);
        var _item = items.splice(index, 1);

        delete _item;
        delete itemObject[id];

        return true;
    };

    var RemoveItemById = function(id) {
        var item = itemObject[id];
        return RemoveItem(item);
    };

    var ClearItem = function() {
        if(items.length == 0) return true;

        delete items.splice(0, items.length-1);
        for(var item in itemObject) {
            delete itemObject[item];
        }
    };


    AddItem({
       type: 'button',
        name: 'Button 1'
    });

    AddItem({
        type: 'text',
        name: 'Text 1'
    });

    AddItem({
        type: 'arrow',
        name: 'Arrow 1'
    });

    return {
        children: items,
        AddItem: AddItem,
        RemoveItem: RemoveItem,
        RemoveItemById: RemoveItemById,
        Clear: ClearItem
    };

});