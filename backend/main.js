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
    // console.log(JSON.stringify(itemData));
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
      if (slotType === 'Quivers' || slotType === 'Any Shield') {
        itemSlotType = 'One-Hand';
        // console.log(itemData.index, slotType);
      }
    }
  });
  return itemSlotType;
}

function getMasterList(primaryItemList, secondaryItemList) {
  console.log('Creating master item list');
  const allItems = primaryItemList;
  // If there is anything in our secondary list that is missing, add it
  secondaryItemList.forEach((secondaryItem) => {
    if (!allItems.map(item => item.item).includes(secondaryItem.name)) {
      // make item name properties match - base has .name and uniques have .item
      secondaryItem.item = secondaryItem.name;
      allItems.push(secondaryItem);
    }
  });
  // create a new master list, skipping duplicate item names
  const masterItemList = [];
  allItems.forEach((item) => {
    if (!masterItemList.map(masterItem => masterItem.item).includes(item.item)) masterItemList.push(item);
  });

  return masterItemList;
}

function getCategoryListForCategory(catName, itemList) {
  const catList = [];

  // check every item in a slot type (.slot = 'helm')
  // build an array of all categories in this category
  // this list will be used to create data filters?

  itemList.forEach((item) => {
    if (!catList.includes(item.category) && item.category === catName) {
      catList.push(item.category);
    }
    item.subCategories.forEach((cat) => {
      if (cat === catName) {
        if (!catList.includes(cat)) {
          catList.push(item.subCategories);
        }
      }
    });
  });
  return catList;
}

async function updateJson() {
  let url = '';

  url = 'http://resurgence.slashgaming.net/js/uniqueItems.json';
  const uniqueItems = await loadJson(url);
  url = 'http://resurgence.slashgaming.net/js/setItems.json';
  const setItems = await loadJson(url);
  url = 'http://resurgence.slashgaming.net/js/baseItems.json';
  const baseItems = await loadJson(url);
  url = 'http://resurgence.slashgaming.net/js/runewords.json';
  const runewordItems = await loadJson(url);
  url = 'http://resurgence.slashgaming.net/js/affixes.json';
  const affixes = await loadJson(url);

  // Create a list of all item types
  const masterItemList = getMasterList(uniqueItems, baseItems);
  // There is no data for the special item types in the set "Remnants of the Tribune" ...
  // "Vile Aegis","Obsidian Plate","Demonic Halo"

  setItems.forEach((set) => {
    set.items.forEach((item) => {
      // set is missing a lot of data we need so we will get itemData for that item
      // from a complete list and assign it to the set item
      const thisItemData = getItemDataByName(item.item, masterItemList);
      item.category = thisItemData.category;
      item.subCategories = thisItemData.subCategories;
      item.tier = thisItemData.tier;
      item.slot = findItemSlotType(thisItemData);
    });
  });
  saveJson(setItems, './output/setItems.json');

  uniqueItems.forEach((item) => {
    item.slot = findItemSlotType(item);
  });
  saveJson(uniqueItems, './output/uniqueItems.json');

  baseItems.forEach((item) => {
    item.slot = findItemSlotType(item);
  });
  saveJson(baseItems, './output/baseItems.json');

  // get all possible cats around each slot type? these would be good filter options...
  const catList = getCategoryListForCategory('Boots', masterItemList);
  console.log(catList);

  // runeword and affixes? need to have a check on .items to determine slot type...
  let itemTypeList = [];
  runewordItems.forEach((itemTypes) => {
    itemTypes.items.forEach((item) => {
      itemTypeList.push(item);
    });
  });
  affixes.forEach((itemTypes) => {
    itemTypes.items.forEach((item) => {
      itemTypeList.push(item);
    });
  });
  itemTypeList = [...new Set(itemTypeList)];
  // console.log(JSON.stringify(itemTypeList));

  /* runewordItems.forEach((item) => {
    item.slot = findItemSlotType(item);
  });
  saveJson(runewordItems, './backend/output/runewordItems.json'); */
}

// load json data
// use uniques/bases to build complete data types for sets
// apply slotType to all equipable items
// save json files

// handleCrafting();
updateJson();
