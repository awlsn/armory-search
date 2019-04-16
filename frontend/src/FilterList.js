import React from 'react'

function FilterList(props) {

    const { filters, toggleCheckboxState } = props;

    function FilterBox(props) {
        const { filters, type, toggleCheckboxState } = props;
        let checkBoxList = filters.map((filter) => <label key={filter.name}><input type="checkbox" name={filter.name} checked={filter.checked} onChange={toggleCheckboxState} /> {filter.label}</label>)
        if (type === "category") {
            return <div className="filter three columns"><h5 className="item-name diablo_unique">Unique Item Filters</h5>{checkBoxList}</div>
        } if (type === "quality") {
            return <div className="filter three columns"><h5 className="item-name diablo_unique">Item Types</h5>{checkBoxList}</div>
        } if (type === "ilvl") {
            return <div className="filter three columns"><h5 className="item-name diablo_unique">Item Level Filter</h5>{checkBoxList}</div>
        }

        else return <div className="filter three columns">{checkBoxList}</div>
    }

    function getTypes() {
        let uniqueFilterTypes = [];

        filters.forEach((filter) => {
            if (!uniqueFilterTypes.includes(filter.type)) uniqueFilterTypes.push(filter.type);
        });
        return uniqueFilterTypes;
    }



    // for each type
    // filter list to that type
    // output a filterBox

    return getTypes().map((type) => {
        let theseFilters = filters.filter((filter) => filter.type === type);
        return <FilterBox key={type} type={type} filters={theseFilters} toggleCheckboxState={toggleCheckboxState} />

    });
    //return filters.map((filter) => <label key={filter.name}><input type="checkbox" name={filter.name} checked={filter.checked} onChange={toggleCheckboxState} /> {filter.label}</label>)
}

export default FilterList