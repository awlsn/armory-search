import React from 'react'
import FilterList from './FilterList'

function FilterBar(props) {

    const { filters, showFilters, toggleFilterCheckbox, toggleFilterBar, toggleWeaponClick } = props;
    const buttonText = showFilters ? "Hide Filters" : "Show Filters"
    return (
        <>
            <p><button onClick={toggleFilterBar}>{buttonText}</button></p>
            {showFilters &&
                <FilterList filters={filters} toggleCheckboxState={toggleFilterCheckbox} toggleWeaponClick={toggleWeaponClick} />
            }
        </>
    )
}

export default FilterBar