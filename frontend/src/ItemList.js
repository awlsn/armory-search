import React from 'react';

import Unique from './itemTypes/Unique';
import Runeword from './itemTypes/Runeword';
import FullSet from './itemTypes/FullSet'
import Set from './itemTypes/Set';
import Augment from './itemTypes/Generic';
import Charm from './itemTypes/Generic'
import Base from './itemTypes/SimpleGeneric'
import Crafting from './itemTypes/Crafting'
import Affixes from './itemTypes/Affixes'

function ItemList(props) {
    //catItems.forEach((item) => {
    // if (item.name === itemName) itemMatch = true;
    //});
    const { items, itemType, filters } = props;

    let filteredItems = items.filter((item) => {
        let addToList = true;
        filters.forEach((filter) => {
            if (!filter.checked) {
                if (filter.name === 'weapon-left') { }
                if (filter.label === item.slot) {
                    addToList = false
                    return;
                }
                //filters.push({ type: 'slot', name: 'weapon-left', label: 'Left Hand', checked: true });
                //filters.push({ type: 'slot', name: 'weapon-right', label: 'Right Hand', checked: true });

                //console.log(filter.name);
                if (filter.label === item.category || filter.label.slice(0, -1) === item.category) {
                    addToList = false;
                    return;
                }
                if (item.subCategories) {
                    item.subCategories.forEach((subCat) => {
                        if (filter.label === subCat || filter.label.slice(0, -1) === subCat) {
                            addToList = false
                            return;
                        }
                    });
                }




            }

        });
        return addToList;
    });

    switch (itemType) {
        case 'Uniques':
            //take items, remove any items that match selected filters


            //console.log(filteredItems);
            return filteredItems.map((item, i) => <Unique key={item.index + i} item={item} />)
        case 'Set Items':
            return filteredItems.map((item, i) => <Set key={item.index + i} item={item} />)
        case 'Full Sets':
            return filteredItems.map((item, i) => <FullSet key={item.index + i} item={item} />)
        case 'Augments':
            return items.map((item, i) => <Augment key={item.index + i} item={item} />)
        case 'Runewords':
            return items.map((item, i) => <Runeword key={item.index + i} item={item} />)
        case 'Bases':
            return filteredItems.map((item, i) => <Base key={item.index + i} item={item} />)
        case 'Charm Components':
            return items.map((item, i) => <Charm key={item.index + i} item={item} />)
        case 'Crafting Recipes':
            return items.map((item, i) => <Crafting key={item.index + i} item={item} />)
        case 'Magic Prefixes/Suffixes':
            return filteredItems.map((item, i) => <Affixes key={item.index + i} item={item} />)
        default:
            return "";
    }


}

export default ItemList;