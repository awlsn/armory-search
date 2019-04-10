import React from 'react'
import FilterList from './FilterList'

function FilterBar(props) {

    const { filters, showFilters, toggleFilterCheckbox, toggleFilterBar } = props;
    const buttonText = showFilters ? "Hide Filters" : "Show Filters"
    return (
        <>
            <button onClick={toggleFilterBar}>{buttonText}</button>
            {showFilters &&
                <FilterList filters={filters} toggleCheckboxState={toggleFilterCheckbox} />
            }
        </>
    )
}

export default FilterBar