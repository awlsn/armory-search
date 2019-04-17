const { saveJson, loadJson } = require('./lib/util.js');
const { scrapeCrafting } = require('./lib/scraper.js');


async function handleCrafting() {
  const url = 'http://resurgence.slashgaming.net/crafting.html';
  const craftingItems = await scrapeCrafting(url);
  saveJson(craftingItems, './backend/output/crafting.json');
}

function getCategoryItems(category, itemList) {
  return itemList.filter(item => item.category === category || item.subCategories.includes(category)).map(item => item.item);
}

function getItemDataByName(name, itemList) {
  let itemData = {};
  itemList.forEach((item) => {
    if (item.name === name) {
      itemData = item;
    }
  });
  return itemData;
}

function itemHasCategory(checkCat, itemData) {
  let match = false;
  if (checkCat === itemData.category || checkCat.slice(0, -1) === itemData.category) {
    match = true;
  }
  if (itemData.subCategories) {
    itemData.subCategories.forEach((subCat) => {
      if (checkCat === subCat || checkCat.slice(0, -1) === subCat) {
        match = true;
      }
    });
  }
  return match;
}


function getItemSlot(itemList, slotType) {
  return itemList.filter(item => itemHasCategory(slotType, item));
}

function findItemSlotType(itemData) {
  // first check if baseProps has 1h or 2h
  let itemSlotType = '';
  // console.log(JSON.stringify(itemData));
  if (!itemData.baseProps) {
    console.log(JSON.stringify(itemData));
    return itemSlotType;
  }
  itemData.baseProps.forEach((prop) => {
    // sometimes prop contains an array and sometimes it's just a value (depending on the dataset)
    const thisProp = (Array.isArray(prop)) ? prop[1] : prop;
    if (thisProp.substr(0, 8) === 'One-Hand') {
      itemSlotType = 'One-Hand';
    }
    // Two-Hand is always after One-Hand in props - will reassign when both values are present in props
    if (thisProp.substr(0, 8) === 'Two-Hand') {
      itemSlotType = 'Two-Hand';
    }
  });

  if (itemSlotType !== '') return itemSlotType;

  const slotTypes = ['Helm', 'Amulet', 'Armor', 'Gloves', 'Ring', 'Belt', 'Boots', 'Quivers', 'Any Shield', 'Charm', 'Jewel'];
  slotTypes.forEach((slotType) => {
    if (itemHasCategory(slotType, itemData)) {
      itemSlotType = slotType;
    }
  });
  return itemSlotType;
}

async function updateJson() {
  let url = '';

  url = 'http://resurgence.slashgaming.net/js/uniqueItems.json';
  // url = './backend/output/uniqueItems.json';
  const uniqueItems = await loadJson(url);
  url = 'http://resurgence.slashgaming.net/js/setItems.json';
  // url = './backend/output/setItems.json';
  const setItems = await loadJson(url);
  url = 'http://resurgence.slashgaming.net/js/baseItems.json';
  // url = './backend/output/baseItems.json';
  const baseItems = await loadJson(url);

  console.log('Creating master item list');
  // loop through through uniques to get item names
  const allItems = uniqueItems.map(item => ({
    name: item.item, baseProps: item.baseProps, category: item.category, subCategories: item.subCategories,
  }));
  // If there is anything in baseItems missing from the list, add it
  baseItems.forEach((baseItem) => {
    if (!allItems.map(item => item.name).includes(baseItem.name)) {
      allItems.push({
        name: baseItem.name, baseProps: baseItem.baseProps, category: baseItem.category, subCategories: baseItem.subCategories,
      });
    }
  });
  // filter so we only have unique item names
  const masterItemList = [];
  allItems.forEach((item) => {
    if (!masterItemList.map(uniqueItem => uniqueItem.name).includes(item.name)) {
      masterItemList.push(item);
    }
  });
  // TODO:  we are missing the special item types in the set "Remnants of the Tribune" ...

  setItems.forEach((set) => {
    set.items.forEach((item) => {
      const thisItemData = getItemDataByName(item.item, masterItemList);
      item.category = thisItemData.category;
      item.subCategories = thisItemData.subCategories;
      item.tier = thisItemData.tier;
      item.slot = findItemSlotType(thisItemData);
    });
  });
  saveJson(setItems, './backend/output/setItems.json');

  uniqueItems.forEach((item) => {
    item.slot = findItemSlotType(item);
  });
  saveJson(uniqueItems, './backend/output/uniqueItems.json');

  baseItems.forEach((item) => {
    item.slot = findItemSlotType(item);
  });
  saveJson(baseItems, './backend/output/baseItems.json');
}

// load json data
// use uniques/bases to build complete data types for sets
// apply slotType to all equipable items
// save json files

// handleCrafting();
updateJson();
