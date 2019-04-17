const fs = require('fs');
const axios = require('axios');

exports.loadJson = async function loadJson(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

exports.saveJson = function saveJson(jsonObj, saveLocation) {
  fs.writeFile(saveLocation, JSON.stringify(jsonObj), (err) => {
    if (err) {
      return console.log(err);
    }
    return console.log('The file was saved!');
  });
};
