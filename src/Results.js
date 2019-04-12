import React from 'react'
import ItemList from './ItemList'

function Results(props) {

    const { matchedItemList, filters } = props;

    //console.log(matchedItemList);

    function CategoryDisplay(props) {
        if (props.show && props.found.length > 0) {
            if (props.title === "Magic Prefixes/Suffixes") {
                const prefixes = props.found.filter((item) => item.affType === 'prefix');
                const suffixes = props.found.filter((item) => item.affType === 'suffix');
                return (
                    <>
                        <h2>{props.title}</h2>
                        <table class="five columns">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Prop</th>
                                    <th>Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ItemList items={prefixes} itemType={props.title} filters={props.filters} />
                            </tbody>
                        </table>

                        <table class="five columns">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Prop</th>
                                    <th>Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ItemList items={suffixes} itemType={props.title} filters={props.filters} />
                            </tbody>
                        </table>


                    </>
                )
            }
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
            <div>
                <CategoryDisplay title="Uniques" show={isFiltered('uniques')} found={matchedItemList.uniqueItems} filters={filters} />
                <CategoryDisplay title="Full Sets" show={isFiltered('sets')} found={matchedItemList.fullSetItems} filters={filters} />
                <CategoryDisplay title="Set Items" show={isFiltered('sets')} found={matchedItemList.setItems} filters={filters} />
                <CategoryDisplay title="Runewords" show={isFiltered('runewords')} found={matchedItemList.runewordItems} filters={filters} />
                <CategoryDisplay title="Augments" show={isFiltered('augments')} found={matchedItemList.augmentItems} filters={filters} />
                <CategoryDisplay title="Bases" show={isFiltered('bases')} found={matchedItemList.baseItems} filters={filters} />
                <CategoryDisplay title="Charm Components" show={isFiltered('charms')} found={matchedItemList.charmComponents} filters={filters} />
                <CategoryDisplay title="Crafting Recipes" show={isFiltered('crafting')} found={matchedItemList.crafting} filters={filters} />
                <CategoryDisplay title="Magic Prefixes/Suffixes" show={isFiltered('affixes')} found={matchedItemList.affixes} filters={filters} />
            </div>
        )
    } else return ""


}

export default Results;