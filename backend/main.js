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
    if (item.item === name) {
      itemData = item;
    }
  });
  return itemData;
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
  console.log('LOADED');

  // console.log(getCategoryItems('Gloves', uniqueItems));
  const slotTypes = {
    helm: [], amulet: [], oneHand: [], twoHand: [], armor: [], gloves: [], ring: [], belt: [], boots: [],
  };
    // loop through through uniques to get item names
  const allItems = uniqueItems.map(item => ({ name: item.item, baseProps: item.baseProps }));
  // If there is anything in baseItems missing, add it
  baseItems.forEach((baseItem) => {
    if (!allItems.map(item => item.name).includes(baseItem.name)) {
      allItems.push({ name: baseItem.name, baseProps: baseItem.baseProps });
    }
  });
  // filter so we only have unique item names
  const uniqueAllItems = [];
  allItems.forEach((item) => {
    if (!uniqueAllItems.map(uniqueItem => uniqueItem.name).includes(item.name)) {
      uniqueAllItems.push(item);
    }
  });

  const twoH = uniqueAllItems.filter(item => item.baseProps.forEach(prop => console.log(prop)));

  console.log(twoH);
  // check baseprops on allItems for weapon, then two hand, then one hand?
  const twoHandItems = {};

  const updatedSetItems = [];
  setItems.forEach((set) => {
    // const newSetData = set;
    set.items.forEach((item) => {
      const thisItemData = getItemDataByName(item.item, uniqueItems);
      item.category = thisItemData.category;
      item.subCategories = thisItemData.subCategories;
      item.tier = thisItemData.tier;
      // console.log(thisItemData.category);
    });
  });

  saveJson(setItems, './backend/output/setItems.json');
  // slotTypes.ring.push([...new Set(getCategoryItems('Ring', uniqueItems))]);
  // console.log(JSON.stringify(slotTypes.ring));
  // create an algorithm to form an object where each slotType
  // has a list of any potential match when searching vs item or item cat?
  // created by parsing basic and unique items etc.
}

// load json data
// use uniques/bases to build complete data types for sets
// apply slotType to all equipable items
// save json files

// handleCrafting();
updateJson();
