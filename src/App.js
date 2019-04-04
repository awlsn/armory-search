import React, { Component } from 'react';
import Unique from './itemTypes/Unique';
import Runeword from './itemTypes/Runeword';
import Set from './itemTypes/Set';
//import './App.css';


class App extends Component {
  state = {
    foundUniqueItems: {},
    foundRunewordItems: {},
    foundSetItems: {}
  };

  render() {
    let uniqueItems, setItems, runewordItems = {};
    //let { foundUniqueItems } = this.state

    fetch(`/json/uniqueItems.json`)
      .then(blob => blob.json())
      .then(data => uniqueItems = data);

    fetch(`/json/sets.json`)
      .then(blob => blob.json())
      .then(data => setItems = data);

    fetch(`/json/runewords.json`)
      .then(blob => blob.json())
      .then(data => runewordItems = data);


    let doSearch = (e) => {
      e.preventDefault();

      let text = document.getElementById("searchText").value;
      //foundUniqueItems = findItems(uniqueItems, text);
      this.setState((state, props) => ({ foundUniqueItems: findItems(uniqueItems, text) }));
      //console.log(foundUniqueItems)
      this.setState((state, props) => ({ foundRunewordItems: findItems(runewordItems, text) }));
      this.setState((state, props) => ({ foundSetItems: findSetItems(setItems, text) }));
    }

    function findItems(jsonData, searchText) {
      searchText = searchText.toLowerCase();

      let result = jsonData.filter(item => item.props.some(prop => {
        let itemMod = prop[1].toLowerCase();
        return wildcardToRegExp(searchText).test(itemMod)
      }));

      return result;
    }

    function findSetItems(jsonData, searchText) {
      searchText = searchText.toLowerCase();
      //items.item.props
      //console.log(jsonData)

      //let setItems = jsonData.map(set => set.items);
      //let allSetItems = setItems.concat.apply([], setItems)
      let allSetItems = jsonData.map(set => set.items).flat(1);
      //console.log(allSetItems);
      let result = allSetItems.filter(item => item.props.some(prop => {
        let itemMod = prop[1].toLowerCase();
        return wildcardToRegExp(searchText).test(itemMod)
      }));

      return result;
    }

    /**
  * Creates a RegExp from the given string, converting asterisks to .* expressions,
  * and escaping all other characters.
  */
    function wildcardToRegExp(s) {
      return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
    }

    /**
     * RegExp-escapes all characters in the given string.
     */
    function regExpEscape(s) {
      return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    }





    return (
      <div className="App">

        <div>
          <p />
          <form onSubmit={doSearch}>

            <input id="searchText" type="text"></input>
            <button type="submit">Search</button>

          </form>
          <h2>Sets</h2>
          <ItemList items={this.state.foundSetItems} itemType="Set" />
          <h2>Runewords</h2>
          <ItemList items={this.state.foundRunewordItems} itemType="Runeword" />
          <h2>Uniques</h2>
          <ItemList items={this.state.foundUniqueItems} itemType="Unique" />

        </div>


      </div>
    );
  }
}



function ItemList(props) {

  const { items, itemType } = props;

  if (items.length > 0) {
    switch (itemType) {
      case 'Unique':
        return items.map((item) => <Unique item={item} />)
      case 'Runeword':
        return items.map((item) => <Runeword item={item} />)
      case 'Set':
        return items.map((item) => <Set item={item} />)
      default:
        return "";
    }

  } else {
    return <p>Search to find items.</p>
  }

}
export default App;

