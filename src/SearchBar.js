import React from 'react'

class SearchBar extends React.Component {
    render() {

        const { masterItemList, setMatchedItemList } = this.props;

        let doSearch = (e) => {
            e.preventDefault();

            let text = document.getElementById("searchText").value;

            let matchedItemList = {};
            matchedItemList.uniqueItems = findItems(masterItemList.uniqueItems, text);
            matchedItemList.runewordItems = findItems(masterItemList.runewordItems, text);
            matchedItemList.setItems = findSetItems(masterItemList.setItems, text);
            matchedItemList.augmentItems = findItems(masterItemList.augmentItems, text);
            setMatchedItemList(matchedItemList);
        }

        function findItems(items, searchText) {
            searchText = searchText.toLowerCase();

            let result = items.filter(item => item.props.some(prop => {
                let itemMod = prop[1].toLowerCase();
                return wildcardToRegExp(searchText).test(itemMod)
            }));

            return result;
        }

        function findSetItems(items, searchText) {
            searchText = searchText.toLowerCase();
            //flatten set array - set items are stored in Set objects but I just want to search individual items for now
            let setItems = items.map(set => set.items);
            let allSetItems = setItems.concat.apply([], setItems)

            let result = allSetItems.filter(item => item.props.some(prop => {
                let itemMod = prop[1].toLowerCase();
                return wildcardToRegExp(searchText).test(itemMod)
            }));

            return result;
        }

        //via donmccurdy : https://gist.github.com/donmccurdy/6d073ce2c6f3951312dfa45da14a420f
        //Creates a RegExp from the given string, converting asterisks to .* expressions, and escaping all other characters.
        function wildcardToRegExp(s) {
            return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
        }
        //RegExp-escapes all characters in the given string.
        function regExpEscape(s) {
            return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
        }

        return (
            <div className="row">
                <form className="itemSearchForm" onSubmit={doSearch}>
                    <input id="searchText" className="itemSearch" placeholder="Search to filter items by their properties, * are wild" type="text"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;