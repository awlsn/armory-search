import React, { Component } from 'react';
import Results from './Results'
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

class App extends Component {
  state = {
    masterItemList: {},
    matchedItemList: {},
    filters: [],
    showFilters: false
  };

  toggleFilterCheckbox = (e) => {
    let filters = [...this.state.filters];
    //get the index
    const index = filters.findIndex((filter) => filter.name === e.target.name);
    //update the index
    filters[index].checked = !filters[index].checked

    if (e.target.name === 'ring-left') {
      const ringIndex = filters.findIndex((filter) => filter.name === "ring-right");
      filters[ringIndex].checked = !filters[ringIndex].checked
    }
    if (e.target.name === 'ring-right') {
      const ringIndex = filters.findIndex((filter) => filter.name === "ring-left");
      filters[ringIndex].checked = !filters[ringIndex].checked
    }

    //set state
    this.setState({ filters });
  }

  toggleWeaponClick = (e) => {
    //do a regular toggle to update UI
    this.toggleFilterCheckbox(e);

    let filters = [...this.state.filters]
    //get both left and right hand weapon states
    const lHand = filters[filters.findIndex((filter) => filter.name === 'weapon-left')];
    const rHand = filters[filters.findIndex((filter) => filter.name === 'weapon-right')];
    const oneHand = filters[filters.findIndex((filter) => filter.name === 'one-hand')];
    const twoHand = filters[filters.findIndex((filter) => filter.name === 'two-hand')];
    //if neither
    if (!lHand.checked && !rHand.checked) {
      oneHand.checked = false
      twoHand.checked = false
    }
    //if one -> one
    if (lHand.checked && !rHand.checked) {
      oneHand.checked = true
      twoHand.checked = false
    }
    if (!lHand.checked && rHand.checked) {
      oneHand.checked = true
      twoHand.checked = false
    }
    //if both -> two
    if (lHand.checked && rHand.checked) {
      oneHand.checked = true
      twoHand.checked = true
    }
    this.setState({ filters })
  }



  getIsTypeFilterChecked = (name) => {
    let typeFilters = [...this.state.typeFilters];
    const index = typeFilters.findIndex((filter) => filter.name === name);
    return typeFilters[index].checked
  }

  setMatchedItemList = (matchedItemList) => {
    this.setState({ matchedItemList });
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

  toggleFilterBar = (e) => {
    //console.log(e.target.name);
    const showFilters = this.state.showFilters;
    this.setState({ showFilters: !showFilters })
  }












  componentWillMount() {
    //setup initial data and state
    fetch(`/json/uniqueItems.json`)
      .then(blob => blob.json())
      .then(data => {
        let masterItemList = { ...this.state.masterItemList }
        masterItemList.uniqueItems = data;
        this.setState({ masterItemList })
      });

    fetch(`/json/setItems.json`)
      .then(blob => blob.json())
      .then(data => {
        let masterItemList = { ...this.state.masterItemList };
        masterItemList.setItems = data;
        this.setState({ masterItemList });
      });

    fetch(`/json/runewords.json`)
      .then(blob => blob.json())
      .then(data => {
        let masterItemList = { ...this.state.masterItemList };
        masterItemList.runewordItems = data;
        this.setState({ masterItemList });
      });

    fetch(`/json/augments.json`)
      .then(blob => blob.json())
      .then(data => {
        let masterItemList = { ...this.state.masterItemList };
        masterItemList.augmentItems = data;
        this.setState({ masterItemList });
      });

    fetch(`/json/baseItems.json`)
      .then(blob => blob.json())
      .then(data => {
        let masterItemList = { ...this.state.masterItemList };
        masterItemList.baseItems = data;
        this.setState({ masterItemList });
        masterItemList.baseItems.forEach((item) => item.itemType);
      });

    fetch(`/json/charmComponents.json`)
      .then(blob => blob.json())
      .then(data => {
        let masterItemList = { ...this.state.masterItemList };
        masterItemList.charmComponents = data;
        this.setState({ masterItemList });
      });

    fetch(`/json/crafting.json`)
      .then(blob => blob.json())
      .then(data => {
        let masterItemList = { ...this.state.masterItemList };
        masterItemList.crafting = data;
        this.setState({ masterItemList });
      });

    fetch(`/json/affixes.json`)
      .then(blob => blob.json())
      .then(data => {
        let masterItemList = { ...this.state.masterItemList };
        masterItemList.affixes = data;
        this.setState({ masterItemList });
      });

    let filters = [...this.state.filters];
    filters.push({ type: 'quality', name: 'uniques', label: 'Uniques', checked: true });
    filters.push({ type: 'quality', name: 'sets', label: 'Sets', checked: true });
    filters.push({ type: 'quality', name: 'runewords', label: 'Runewords', checked: true });
    filters.push({ type: 'quality', name: 'augments', label: 'Augments', checked: true });
    filters.push({ type: 'quality', name: 'bases', label: 'Bases', checked: true });
    filters.push({ type: 'quality', name: 'charms', label: 'Charm Components', checked: true });
    filters.push({ type: 'quality', name: 'crafting', label: 'Crafting Recipes', checked: true });
    filters.push({ type: 'quality', name: 'affixes', label: 'Magic Prefixes/Suffixes', checked: true });

    filters.push({ type: 'slot', name: 'helm', label: 'Helm', checked: true });
    filters.push({ type: 'slot', name: 'amulet', label: 'Amulet', checked: true });
    filters.push({ type: 'slot', name: 'armor', label: 'Armor', checked: true });
    filters.push({ type: 'slot', name: 'weapon-left', label: 'Left Hand', checked: true });
    filters.push({ type: 'slot', name: 'weapon-right', label: 'Right Hand', checked: true });
    filters.push({ type: 'slot', name: 'belt', label: 'Belt', checked: true });
    filters.push({ type: 'slot', name: 'ring-left', label: 'Ring', checked: true });
    filters.push({ type: 'slot', name: 'ring-right', label: 'Ring', checked: true });
    filters.push({ type: 'slot', name: 'gloves', label: 'Gloves', checked: true });
    filters.push({ type: 'slot', name: 'boots', label: 'Boots', checked: true });

    //filters.push({ type: 'slot', name: 'ring', label: 'Ring', checked: true });
    filters.push({ type: 'slot', name: 'one-hand', label: 'One-Hand', checked: true });
    filters.push({ type: 'slot', name: 'two-hand', label: 'Two-Hand', checked: true });

    filters.push({ type: 'category', name: 'weapons', label: 'Weapons', checked: true });
    filters.push({ type: 'category', name: 'quivers', label: 'Quivers', checked: true });
    filters.push({ type: 'category', name: 'armors', label: 'Armors', checked: true });
    filters.push({ type: 'category', name: 'shields', label: 'Shields', checked: true });
    filters.push({ type: 'category', name: 'necromancer-shields', label: 'Necromancer Shields', checked: true });
    filters.push({ type: 'category', name: 'paladin-shields', label: 'Paladin Shields', checked: true });
    filters.push({ type: 'category', name: 'helms', label: 'Helms', checked: true });
    filters.push({ type: 'category', name: 'gloves', label: 'Gloves', checked: true });
    filters.push({ type: 'category', name: 'belts', label: 'Belts', checked: true });
    filters.push({ type: 'category', name: 'boots', label: 'Boots', checked: true });
    filters.push({ type: 'category', name: 'rings', label: 'Rings', checked: true });
    filters.push({ type: 'category', name: 'amulets', label: 'Amulets', checked: true });
    filters.push({ type: 'category', name: 'jewels', label: 'Jewels', checked: true });
    filters.push({ type: 'category', name: 'charms', label: 'Charms', checked: true });

    filters.push({ type: 'subcategory', name: 'Barbarian Item', label: 'Barbarian Items', checked: true });
    filters.push({ type: 'subcategory', name: 'Paladin Item', label: 'Paladin Items', checked: true });
    filters.push({ type: 'subcategory', name: 'Necromancer Item', label: 'Necromancer Items', checked: true });
    filters.push({ type: 'subcategory', name: 'Assassin Item', label: 'Assassin Items', checked: true });
    filters.push({ type: 'subcategory', name: 'Druid Item', label: 'Druid Items', checked: true });
    filters.push({ type: 'subcategory', name: 'Amazon Item', label: 'Amazon Items', checked: true });
    filters.push({ type: 'subcategory', name: 'Sorceress Item', label: 'Sorceress Items', checked: true });

    filters.push({ type: 'subcategory', name: 'Missile Weapon', label: 'Missile Weapons', checked: true });
    filters.push({ type: 'subcategory', name: 'Caster Weapon', label: 'Caster Weapons', checked: true });
    filters.push({ type: 'subcategory', name: 'Melee Weapon', label: 'Melee Weapons', checked: true });
    filters.push({ type: 'subcategory', name: 'Shields', label: 'Any Shield', checked: true });

    this.setState({ filters });
  }
  //
  render() {
    return (

      <div className="row">
        <div className="row">
          <SearchBar masterItemList={this.state.masterItemList} setMatchedItemList={this.setMatchedItemList} />
        </div>

        <div className="row">
          <FilterBar filters={this.state.filters} showFilters={this.state.showFilters} toggleFilterCheckbox={this.toggleFilterCheckbox} toggleFilterBar={this.toggleFilterBar} toggleWeaponClick={this.toggleWeaponClick} />
        </div>

        <div className="row">
          <Results matchedItemList={this.state.matchedItemList} filters={this.state.filters} />
        </div>
      </div>
    );
  }
}

export default App;

