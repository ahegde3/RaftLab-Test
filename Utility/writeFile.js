const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'Data/output.csv',
    header: [
      {id: '_title', title: 'Title'},
      {id: '_isbn', title: 'ISBN'},
      {id: '_author', title: 'Author'},
    ]
  });
  
function writeCsv(data)
{

csvWriter
.writeRecords(data)
.then(()=> console.log('The CSV file was written successfully'));
}  


const data = [
    {
      name: 'John',
      surname: 'Snow',
      age: 26,
      gender: 'M'
    }, {
      name: 'Clair',
      surname: 'White',
      age: 33,
      gender: 'F',
    }, {
      name: 'Fancy',
      surname: 'Brown',
      age: 78,
      gender: 'F'
    }
  ];
  
  writeCsv(data)

  module.exports={writeCsv}