import React from 'react'
import ItemList from './ItemList'

function Results(props) {

    const { matchedItemList, filters } = props;

    //console.log(matchedItemList);

    function CategoryDisplay(props) {
        if (props.show) {
            return (
                <span>
                    <h2>{props.title}</h2>
                    <ItemList items={props.found} itemType={props.title} filters={props.filters} />
                </span>
            )
        } else return "";
    }

    function isFiltered(name) {
        const index = filters.findIndex((filter) => filter.name === name);
        return filters[index].checked
    }

    //if object is not empty... maybe refactor again?
    if (Object.keys(matchedItemList).length > 0) {
        return (
            <div className="seven columns">
                <CategoryDisplay title="Uniques" show={isFiltered('uniques')} found={matchedItemList.uniqueItems} filters={filters} />
                <CategoryDisplay title="Sets" show={isFiltered('sets')} found={matchedItemList.setItems} filters={filters} />
                <CategoryDisplay title="Runewords" show={isFiltered('runewords')} found={matchedItemList.runewordItems} filters={filters} />
                <CategoryDisplay title="Augments" show={isFiltered('augments')} found={matchedItemList.augmentItems} filters={filters} />
            </div>
        )
    } else return ""


}

export default Results;