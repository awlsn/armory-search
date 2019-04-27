import React from 'react'

function FilterInventorySlot(props) {
    const { filters, toggleCheckboxState, toggleWeaponClick } = props;
    let ButtonList = filters.map((filter) => {

        let classes = `item-filter ${filter.name}-filter ${filter.checked ? "item-filter-selected" : ""}`



        if (filter.name === 'weapon-left' || filter.name === 'weapon-right') {
            return <button onClick={toggleWeaponClick} key={filter.name} name={filter.name} className={classes}></button>
        }

        if (filter.name === 'one-hand' || filter.name === 'two-hand') {
            return;
        }

        return <button onClick={toggleCheckboxState} key={filter.name} name={filter.name} className={classes}></button>
    });




    return (
        <div className="filter three columns" >
            <h5 className="item-name diablo_unique">Item Filters</h5>
            <p>Select an inventory slot to show/hide items for that slot.</p>
            <div className="inventory-filter">
                {ButtonList}
            </div>
        </div >)
}

export default FilterInventorySlot;