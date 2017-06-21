(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/util/generator',
            'js/data/controlObject'
        ], factory);
    }else {
        global.itemObject = factory(
            global.Generator,
            global.controlObject
        );
    }

})(typeof window !== 'undefined' ? window : this, function(generator, controlObject) {

    var itemObject = {};
    var items = [];

    var AddItem = function(item, addArgs) {
        var id = generator.GeneratorId('item');
        var _item, idx;
        if(typeof item.generator == "function") {
            _item = item.generator();
        }else {
            _item = {};
            for(idx in item) {
                _item[idx] = item[idx];
            }
        }

        // New ID
        _item['id'] = id;

        if(typeof addArgs == 'object') {
            for(idx in addArgs) {
                _item[idx] = addArgs[idx];
            }
        }

        // console.log("AddItem", _item);
        itemObject[id] = _item;
        items.push(_item);

        return _item;
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


    AddItem(controlObject.button, {
        name: 'D-Button',
        left: 220,
        top: 20
    });

    AddItem(controlObject.button, {
        name: 'D-Button 2',
        left: 220,
        top: 120
    });

    AddItem(controlObject.dummy, {
        name: 'D-Text 1',
        left: 20,
        top: 120
    });

    AddItem(controlObject.dummy, {
        name: 'D-Arrow 1',
        left: 20,
        top: 220,
    });

    return {
        children: items,
        AddItem: AddItem,
        RemoveItem: RemoveItem,
        RemoveItemById: RemoveItemById,
        Clear: ClearItem
    };

});