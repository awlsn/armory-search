import React from 'react'
import Results from './Results';

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
            matchedItemList.fullSetItems = findFullSetItems(masterItemList.setItems, text)
            matchedItemList.augmentItems = findItems(masterItemList.augmentItems, text);
            matchedItemList.baseItems = findBaseItems(masterItemList.baseItems, text);
            matchedItemList.charmComponents = findItems(masterItemList.charmComponents, text);
            setMatchedItemList(matchedItemList);
        }

        function findItems(items, searchText) {
            searchText = searchText.toLowerCase();

            let result = items.filter(item => item.props.some(prop => {
                let itemMod = prop[1].toLowerCase();

                searchText = searchText.toLowerCase();
                //return new RegExp(searchText).test(itemMod);
                return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod)
            }));

            return result;
        }

        function findBaseItems(items, searchText) {
            searchText = searchText.toLowerCase();

            let result = items.filter(item => item.props.some(prop => {
                let itemMod = prop.toLowerCase();
                return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod)
            }));

            return result;
        }

        function findFullSetItems(items, searchText) {
            searchText = searchText.toLowerCase();

            let result = items.filter(item => {
                let fullPropResult = item.fullProps.some(prop => {
                    let itemMod = prop.toLowerCase();
                    return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod)
                });

                let partialSetResult = item.partialProps.some(prop => {
                    let itemMod = prop.toLowerCase();
                    return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod)
                });

                return fullPropResult || partialSetResult;
            });

            return result;
        }

        function findSetItems(items, searchText) {
            searchText = searchText.toLowerCase();
            //flatten set array - set items are stored in Set objects but I just want to search individual items for now
            let setItems = items.map(set => set.items);
            let allSetItems = setItems.concat.apply([], setItems)

            let result = allSetItems.filter(item => item.props.some(prop => {
                let itemMod = prop[1].toLowerCase();
                return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod)
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
        function poundToRegExp(s) {
            return new RegExp(s.split(/#+/).map(regExpEscape).join('\\d+'));
        }
        //<label><input type="checkbox" /> Enable full regex</label>
        return (
            <div className="row">
                <form className="itemSearchForm u-full-width" onSubmit={doSearch}>
                    <input id="searchText" className="itemSearch" placeholder="Search items by their properties" type="text"></input>
                    <button type="submit">Search</button>
                    <p>
                        Search items by their properties - * are wildcards and # will match any number.
                    </p>

                </form>

            </div>
        );
    }
}

export default SearchBar;