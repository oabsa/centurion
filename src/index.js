import fs from 'fs';
import React from 'react';
import Table from './table';

// The raw centrion data
const data = require('../data.json');

// The array of regions to generate html for
const regions = [
  'S',
  'C',
  'NE',
  'W'
];

for (var i in regions) {
  let region = regions[i];

  let htmlCode = React.renderToStaticMarkup(
    <Table recipients={data} region={region} />
  );

  fs.writeFile(`dist/${region}.html`, htmlCode, function(error) {
      if (error) {
        return console.log(error);
      }
      console.log("The file was saved!");
  });
}
