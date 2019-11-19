const path = require('path');
// base file Name
console.log(path.basename(__filename));
// Directory Name
console.log(path.dirname(__filename));
// file Extention
console.log(path.extname(__filename));
// path object
console.log(path.parse(__filename));