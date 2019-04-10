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
    filters[index].checked = e.target.checked
    //set state
    this.setState({ filters });
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

        //let matchedItemList = { ...this.state.matchedItemList }
        //matchedItemList.uniqueItems = data
        //this.setState({ matchedItemList })
      });

    fetch(`/json/sets.json`)
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
      });

    let filters = [...this.state.filters];
    filters.push({ type: 'quality', name: 'uniques', label: 'Uniques', checked: true });
    filters.push({ type: 'quality', name: 'sets', label: 'Sets', checked: true });
    filters.push({ type: 'quality', name: 'runewords', label: 'Runewords', checked: true });
    filters.push({ type: 'quality', name: 'augments', label: 'Augments', checked: true });

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
    filters.push({ type: 'category', name: 'charms', label: 'Charms', checked: false });
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
          <FilterBar filters={this.state.filters} showFilters={this.state.showFilters} toggleFilterCheckbox={this.toggleFilterCheckbox} toggleFilterBar={this.toggleFilterBar} />
        </div>

        <div className="row">
          <Results matchedItemList={this.state.matchedItemList} filters={this.state.filters} />
        </div>
      </div>
    );
  }
}

export default App;

