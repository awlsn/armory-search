import React, { Component } from 'react';
import Unique from './itemTypes/Unique';
import Runeword from './itemTypes/Runeword';
import Set from './itemTypes/Set';

import Augment from './itemTypes/Generic';
import Charm from './itemTypes/Generic'

//import './App.css';


class App extends Component {
  state = {

    uniqueItems: {},
    foundUniqueItems: {},
    filteredUniqueItems: {},

    runeWordItems: {},
    foundRunewordItems: {},

    setItems: {},
    foundSetItems: {},

    augmentItems: {},
    foundAugmentItems: {},

    charmItems: {},
    foundCharmItems: {},

    baseItems: {},
    filteredBaseItems: {},
    foundBaseItems: {},

    magicItems: {},
    foundMagicItems: {},

    showUniques: true,
    showSets: true,
    showRunewords: true,
    showAugments: true,

    filterHelms: true,
    filterArmor: true,
    filterGloves: true,
    filterBoots: true,
    filterBelts: true,
    filterRings: false,
    filterAmulets: false,
    selectedFilters: []
  };

  toggleUnique = () => this.state.showUniques ? this.setState({ showUniques: false }) : this.setState({ showUniques: true })
  toggleSet = () => this.state.showSets ? this.setState({ showSets: false }) : this.setState({ showSets: true })
  toggleRuneword = () => this.state.showRunewords ? this.setState({ showRunewords: false }) : this.setState({ showRunewords: true })
  toggleAugment = () => this.state.showAugments ? this.setState({ showAugments: false }) : this.setState({ showAugments: true })

  //toggleFilterHelms = () => this.state.filterHelms ? this.setState({ filterHelms: false }) : this.setState({ filterHelms: true })
  toggleFilterHelms = () => this.toggleFilter(this.state.filterHelms, 'filterHelms');
  toggleFilterArmor = () => this.toggleFilter(this.state.filterArmor, 'filterArmor');
  toggleFilterGloves = () => this.toggleFilter(this.state.filterGloves, 'filterGloves');
  toggleFilterBoots = () => this.toggleFilter(this.state.filterBoots, 'filterBoots');
  toggleFilterBelts = () => this.toggleFilter(this.state.filterBelts, 'filterBelts');
  toggleFilterRings = () => this.state.filterRings ? this.setState({ filterRings: false }) : this.setState({ filterRings: true })
  toggleFilterAmulets = () => this.state.filterAmulets ? this.setState({ filterAmulets: false }) : this.setState({ filterAmulets: true })

  toggleFilter = (state, stateName) => {
    //oof
    this.setState(JSON.parse('{"' + stateName + '":' + !state + '}'), this.updateSelectedFilters);

  }

  updateSelectedFilters() {
    console.log("updating");
    let selectedFilters = [];
    if (!this.state.filterHelms) selectedFilters.push("Helm")
    if (!this.state.filterArmor) selectedFilters.push("Armor")
    if (!this.state.filterGloves) selectedFilters.push("Gloves")
    if (!this.state.filterBoots) selectedFilters.push("Boots")
    if (!this.state.filterBelts) selectedFilters.push("Belt")
    //if (this.state.filterRings) selectedFilters.push("Rings")
    //if (this.state.filterAmulets) selectedFilters.push("Amulets")
    this.setState({ selectedFilters }, this.updateFilteredBaseItems)
  }

  updateFilteredBaseItems = () => {
    let match = false;
    //const cat = this.getSelectedFilters();
    const { baseItems, selectedFilters } = this.state;

    const filteredBaseItems = baseItems.filter((item) => {
      match = false;
      selectedFilters.forEach((category) => {
        if (item.category === category) match = true;
        if (item.subCategories.includes(category)) match = true;
      });
      return match;
    });
    //return catItems;
    this.setState({ filteredBaseItems });
  }

  componentDidMount() {
    let uniqueItems, setItems, runewordItems, augmentItems, baseItems = {};

    fetch(`/json/uniqueItems.json`)
      .then(blob => blob.json())
      .then(data => {
        uniqueItems = data
        this.setState((state, props) => ({ uniqueItems }))
      });

    fetch(`/json/sets.json`)
      .then(blob => blob.json())
      .then(data => {
        setItems = data
        this.setState((state, props) => ({ setItems }))
      });

    fetch(`/json/runewords.json`)
      .then(blob => blob.json())
      .then(data => {
        runewordItems = data
        this.setState((state, props) => ({ runewordItems }))
      });

    fetch(`/json/augments.json`)
      .then(blob => blob.json())
      .then(data => {
        augmentItems = data
        this.setState((state, props) => ({ augmentItems }))
      });

    fetch(`/json/baseItems.json`)
      .then(blob => blob.json())
      .then(data => {
        baseItems = data
        this.setState((state, props) => ({ baseItems }), this.updateSelectedFilters);
      });


  }


  render() {


    let doSearch = (e) => {
      e.preventDefault();

      this.updateSelectedFilters();
      //let filteredBaseItems = this.getFilteredBaseItems();
      //this.setState({ filteredBaseItems })

      let text = document.getElementById("searchText").value;
      let { uniqueItems, runewordItems, setItems, augmentItems } = this.state;

      this.setState((state, props) => ({ foundUniqueItems: findItems(uniqueItems, text) }));
      this.setState((state, props) => ({ foundRunewordItems: findItems(runewordItems, text) }));
      this.setState((state, props) => ({ foundSetItems: findSetItems(setItems, text) }));
      this.setState((state, props) => ({ foundAugmentItems: findItems(augmentItems, text) }));

      //console.log(this.getFilteredBaseItems());
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

      let setItems = jsonData.map(set => set.items);
      let allSetItems = setItems.concat.apply([], setItems)
      //let allSetItems = jsonData.map(set => set.items).flat(1);

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
      <div className="row">

        <div className="row">
          <form className="itemSearchForm" onSubmit={doSearch}>
            <input id="searchText" className="itemSearch" placeholder="Search to filter items, * are wild" type="text"></input>
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="three columns">
          <h2>Filters</h2>
          <CategoryFilter
            showUniques={this.state.showUniques} toggleUnique={this.toggleUnique}
            showSets={this.state.showSets} toggleSet={this.toggleSet}
            showRunewords={this.state.showRunewords} toggleRuneword={this.toggleRuneword}
            showAugments={this.state.showAugments} toggleAugment={this.toggleAugment}
          />
          <TypeFilter
            filterHelms={this.state.filterHelms}
            filterArmor={this.state.filterArmor}
            filterGloves={this.state.filterGloves}
            filterBoots={this.state.filterBoots}
            filterBelts={this.state.filterBelts}
            filterRings={this.state.filterRings}
            filterAmulets={this.state.filterAmulets}
            toggleFilterHelms={this.toggleFilterHelms}
            toggleFilterArmor={this.toggleFilterArmor}
            toggleFilterGloves={this.toggleFilterGloves}
            toggleFilterBoots={this.toggleFilterBoots}
            toggleFilterBelts={this.toggleFilterBelts}
            toggleFilterRings={this.toggleFilterRings}
            toggleFilterAmulets={this.toggleFilterAmulets}
          />
        </div>
        <div className="eight columns">
          <CategoryDisplay title="Uniques" selectedFilters={this.state.selectedFilters} filteredBaseItems={this.state.filteredBaseItems} show={this.state.showUniques} found={this.state.foundUniqueItems} />
          <CategoryDisplay title="Sets" filteredBaseItems={this.state.filteredBaseItems} show={this.state.showSets} found={this.state.foundSetItems} />
          <CategoryDisplay title="Runewords" filteredBaseItems={this.state.filteredBaseItems} show={this.state.showRunewords} found={this.state.foundRunewordItems} />
          <CategoryDisplay title="Augments" filteredBaseItems={this.state.filteredBaseItems} show={this.state.showAugments} found={this.state.foundAugmentItems} />

        </div>
      </div>
    );
  }
}

function CategoryDisplay(props) {

  if (props.show) {
    return (
      <span>
        <h2>{props.title}</h2>
        <ItemList filteredBaseItems={props.filteredBaseItems} selectedFilters={props.selectedFilters} items={props.found} itemType={props.title} />
      </span>
    )
  } else {
    return "";
  }
}

function CategoryFilter(props) {

  const { showUniques, toggleUnique } = props;
  const { showSets, toggleSet } = props;
  const { showRunewords, toggleRuneword } = props;
  const { showAugments, toggleAugment } = props;
  return (
    <div className="filter">
      <label><input type="checkbox" checked={showUniques} onChange={toggleUnique} /> Uniques</label>
      <label><input type="checkbox" checked={showSets} onChange={toggleSet} /> Sets</label>
      <label><input type="checkbox" checked={showRunewords} onChange={toggleRuneword} /> Runewords</label>
      <label><input type="checkbox" checked={showAugments} onChange={toggleAugment} /> Augments</label>
    </div>
  )
}

function TypeFilter(props) {
  const {
    filterHelms,
    filterArmor,
    filterGloves,
    filterBoots,
    filterBelts,
    filterRings,
    filterAmulets
  } = props;
  const {
    toggleFilterHelms,
    toggleFilterArmor,
    toggleFilterGloves,
    toggleFilterBoots,
    toggleFilterBelts,
    toggleFilterRings,
    toggleFilterAmulets } = props;


  return (
    <div className="filter">
      <label><input type="checkbox" checked={filterHelms} onChange={toggleFilterHelms} /> Helm</label>
      <label><input type="checkbox" checked={filterArmor} onChange={toggleFilterArmor} /> Armor</label>
      <label><input type="checkbox" checked={filterGloves} onChange={toggleFilterGloves} /> Gloves</label>
      <label><input type="checkbox" checked={filterBoots} onChange={toggleFilterBoots} /> Boots</label>
      <label><input type="checkbox" checked={filterBelts} onChange={toggleFilterBelts} /> Belts</label>
    </div>
  )
}


function ItemList(props) {
  //catItems.forEach((item) => {
  // if (item.name === itemName) itemMatch = true;
  //});
  const { items, itemType, filteredBaseItems, selectedFilters } = props;

  let itemMatch = false;


  if (items.length > 0) {

    switch (itemType) {
      case 'Uniques':
        const filteredItems = items.filter((item) => {

          if (item.category) {
            selectedFilters.forEach((filter) => {
              if (filter === item.category) { itemMatch = true; return; }
              if (item.subCategories) {
                item.subCategories.forEach((subCat) => {
                  if (filter === item.subCat) { itemMatch = true; return; }
                })
              }
            })
          }
          /*
          filteredBaseItems.forEach((baseItem) => {
            //console.log(baseItem.name, item.item)
            if (baseItem.name === item.item) itemMatch = true;
          })*/
          if (itemMatch) return false;
          else return true;
        });

        //console.log(filteredItems);
        return filteredItems.map((item) => <Unique item={item} />)
      case 'Runewords':
        return items.map((item) => <Runeword item={item} />)
      case 'Sets':
        return items.map((item) => <Set item={item} />)
      case 'Augments':
        return items.map((item) => <Augment item={item} />)
      default:
        return "";
    }

  } else {
    return <p>Search to find items.</p>
  }

}
export default App;

