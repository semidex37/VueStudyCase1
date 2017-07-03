(function(global, factory) {
    'use strict';

    // export as AMD...
    if(typeof define !== 'undefined' && define.amd) {
        define([
            'js/util/generator',
            'js/data/controlObject',
            'js/util/util'
        ], factory);
    }else {
        global.itemObject = factory(
            global.Generator,
            global.controlObject,
            global.util
        );
    }

})(typeof window !== 'undefined' ? window : this, function(generator, controlObject, util) {

    var itemObject = {};
    var items = [];

    var AddItem = function(item, addArgs) {
        var _item;
        if(typeof item == 'object') {
            _item = util.assign({}, item);
        }else if(typeof item == 'string') {
            _item = controlObject[item];
            if(typeof _item == 'undefined') {
                // Error
                // throw Error("");
                console.log("Error: itemObject.AddItem: item is undefined! :" + item);
                _item = controlObject['dummy'];
            }
            _item = util.assign({}, _item);
        }
        var id = generator.GeneratorId('item');

        // New ID
        _item['id'] = id;

        if(typeof addArgs == 'object') {
            util.assign(_item, addArgs);
        }

        itemObject[id] = _item;
        items.push(_item);

        return _item;
    };

    var RemoveItem = function(item) {
        var id = item.id;
        var index = items.indexOf(item);
        var _item = items.splice(index, 1);

        if(index == -1) return false;

        delete _item;
        delete itemObject[id];

        return true;
    };

    var RemoveItemById = function(id) {
        return RemoveItem(getItemById(id));
    };

    var ClearItem = function() {
        if(items.length == 0) return true;

        delete items.splice(0, items.length-1);
        for(var item in itemObject) {
            delete itemObject[item];
        }
    };

    var CloneItem = function(item) {
        return AddItem(item, {
            left: item.left + 20,
            top: item.top + 20
        });
    };

    var CloneItemById = function(id) {
        return CloneItem(getItemById(id));
    };

    var getItemById = function(id) {
        return itemObject[id];
    };


    AddItem(controlObject.button, {
        name: 'D-Button',
        left: 220,
        top: 40
    });

    AddItem(controlObject.button, {
        name: 'D-Button 2',
        left: 220,
        top: 140
    });

    AddItem(controlObject.dummy, {
        name: 'D-Text 1',
        left: 60,
        top: 120
    });

    AddItem(controlObject.dummy, {
        name: 'D-Arrow 1',
        left: 60,
        top: 240,
    });

    return {
        children: items,
        AddItem: AddItem,
        RemoveItem: RemoveItem,
        RemoveItemById: RemoveItemById,
        Clear: ClearItem,
        CloneItem: CloneItem,
        CloneItemById: CloneItemById
    };

});