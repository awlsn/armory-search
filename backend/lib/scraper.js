
const axios = require('axios');
const cheerio = require('cheerio');

exports.scrapeCrafting = async function scrapeCrafting(url) {
  return axios.get(url)
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
      return output;
    }).catch((e) => {
      console.log('Error fetching crafting url');
      console.log(e);
    });
};
