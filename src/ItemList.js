import React from 'react';

import Unique from './itemTypes/Unique';
import Runeword from './itemTypes/Runeword';
import Set from './itemTypes/Set';
import Augment from './itemTypes/Generic';

//import Charm from './itemTypes/Generic'

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
            console.log(filteredItems);
            return filteredItems.map((item) => <Unique key={item.index} item={item} />)
        case 'Sets':
            return items.map((item) => <Set key={item.index} item={item} />)
        case 'Augments':
            return items.map((item) => <Augment key={item.index} item={item} />)
        case 'Runewords':
            return items.map((item) => <Runeword key={item.index} item={item} />)

        default:
            return "";
    }


}

export default ItemList;