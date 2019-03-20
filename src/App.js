import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    let uniqueItems, foundUniqueItems = {};
    let setItems, foundSetItems = {};
    let runewordItems, foundRunewordItems = {};

    fetch(`/json/uniqueItems.json`)
      .then(blob => blob.json())
      .then(data => uniqueItems = data);

    fetch(`/json/sets.json`)
      .then(blob => blob.json())
      .then(data => setItems = data);

    fetch(`/json/runewords.json`)
      .then(blob => blob.json())
      .then(data => runewordItems = data);

    let doSearch = function (e) {
      e.preventDefault();

      let text = document.getElementById("searchText").value
      //console.log(setItems);
      //console.log(e.currentTarget);
      findItems(uniqueItems, text)
      //findItems(setItems, text)
      findItems(runewordItems, text)
    }

    let findItems = function (jsonData, searchText) {

      //split text and for each textPart check if the current item prop 

      searchText = searchText.toLowerCase();

      let result = jsonData.filter(item => item.props.some(prop => {
        let itemMod = prop[1].toLowerCase();
        return wildcardToRegExp(searchText).test(itemMod)
      }));

      console.log(result);
    }

    function wildcardToRegExp(s) {
      s = s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
      let re = new RegExp('^' + s.split(/\*+/).map(s).join('.*') + '$');
      //console.log(re);
      return re;
    }

    return (
      <div className="App">

        <div>
          <p />
          <input id="searchText" type="text"></input><button type="submit" onClick={doSearch}>Search</button>
        </div>
        <ul><Item /></ul>

      </div>
    );
  }
}

export default App;

class Item extends Component {
  render() {
    return <p>Item</p>
  }
}