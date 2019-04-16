
import fs from 'fs';
import axios from 'axios';
import cheerio from 'cheerio';

axios.get('http://resurgence.slashgaming.net/crafting.html')
  .then((response) => {
    const $ = cheerio.load(response.data);
    const craftTypes = $('#crystal-crafting-header-row th');
    const output = [];
    const types = [];
    const craftRows = $('.crystal-crafting-group tr');

    // each tr is a prop for each type
    // so we initialize objects for each type
    // and loop across the tr and add the props to each object...
    craftTypes.each((index, el) => {
      if (index > 0) {
        const craftName = $(el).text().trim();
        const imageFile = $(el).find('img').attr('src');
        types.push({ craftName, imageFile });
        /* output[index] = {};
        output[index].weapon = {};
        output[index].weapon.props = [];
        output[index].armor = {};
        output[index].armor.props = [];
        output[index].helm = {};
        output[index].helm.props = [];
        output[index].shield = {};
        output[index].shield.props = [];
        output[index].belt = {};
        output[index].belt.props = [];
        output[index].glove = {};
        output[index].glove.props = [];
        output[index].boot = {};
        output[index].boot.props = [];
        output[index].ring = {};
        output[index].ring.props = [];
        output[index].amulet = {};
        output[index].amulet.props = [];
        output[index].quiver = {};
        output[index].quiver.props = []; */
      }
    });
    // console.log(output);
    craftRows.each((index, el) => {
      const craftItemCat = $(el).attr('class');
      const tds = $(el).find('td');

      tds.each((tdIndex, tdEl) => {
        const { craftName, imageFile } = types[tdIndex];
        // console.log(output[tdIndex]);
        const thisIndex = `${craftItemCat}-${craftName}`;
        const prop = $(tdEl).text().trim();
        let thisEntry = output.find(item => item.index === thisIndex);
        if (!thisEntry) {
          thisEntry = {};
          thisEntry.index = thisIndex;
          thisEntry.imageFile = imageFile;
          thisEntry.type = craftItemCat;
          thisEntry.name = craftName;
          thisEntry.props = [];
          output.push(thisEntry);
        }
        thisEntry.props.push(prop);
      });
    });
    // console.log(output);


    fs.writeFile('./crafting.json', JSON.stringify(output), (err) => {
      if (err) {
        return console.log(err);
      }
      return console.log('The file was saved!');
    });
  }).catch((e) => {
    console.log(e);
  });
