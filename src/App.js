import React, { Component } from 'react';
import Unique from './itemTypes/Unique';
//import './App.css';


class App extends Component {
  state = {
    foundUniqueItems: {},
    foundRunewordItems: {}
  };

  render() {
    let uniqueItems = {};
    let setItems, foundSetItems = {};
    let runewordItems;
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
    }

    function findItems(jsonData, searchText) {
      searchText = searchText.toLowerCase();

      let result = jsonData.filter(item => item.props.some(prop => {
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
          <ItemList items={this.state.foundUniqueItems} />
        </div>


      </div>
    );
  }
}



function ItemList(props) {

  const { items } = props;

  if (items.length > 0) {
    return items.map((item) => <Unique item={item} />)
  } else {
    return <p>Search to find items.</p>
  }

}
export default App;

