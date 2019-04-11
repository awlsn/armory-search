import React from 'react';

import Unique from './itemTypes/Unique';
import Runeword from './itemTypes/Runeword';
import FullSet from './itemTypes/FullSet'
import Set from './itemTypes/Set';
import Augment from './itemTypes/Generic';
import Charm from './itemTypes/Generic'
import Base from './itemTypes/SimpleGeneric'

function ItemList(props) {
    //catItems.forEach((item) => {
    // if (item.name === itemName) itemMatch = true;
    //});
    const { items, itemType, filters } = props;

    switch (itemType) {
        case 'Uniques':
            //take items, remove any items that match selected filters

            let filteredItems = items.filter((item) => {
                let addToList = true;
                filters.forEach((filter) => {
                    if (!filter.checked) {
                        if (filter.label === item.category || filter.label.slice(0, -1) === item.category) {
                            addToList = false;
                            return;
                        }
                        item.subCategories.forEach((subCat) => {
                            if (filter.label === subCat || filter.label.slice(0, -1) === subCat) {
                                addToList = false
                                return;
                            }
                        });
                    }

                });
                return addToList;
            });
            //console.log(filteredItems);
            return filteredItems.map((item, i) => <Unique key={item.index + i} item={item} />)
        case 'Set Items':
            return items.map((item, i) => <Set key={item.index + i} item={item} />)
        case 'Full Sets':
            return items.map((item, i) => <FullSet key={item.index + i} item={item} />)
        case 'Augments':
            return items.map((item, i) => <Augment key={item.index + i} item={item} />)
        case 'Runewords':
            return items.map((item, i) => <Runeword key={item.index + i} item={item} />)
        case 'Bases':
            return items.map((item, i) => <Base key={item.index + i} item={item} />)
        case 'Charm Components':
            return items.map((item, i) => <Charm key={item.index + i} item={item} />)

        default:
            return "";
    }


}

export default ItemList;