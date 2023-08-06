
// Dependencies
const express = require(`express`);
const app = express();
const PORT = 3001;

// read the json file and store it in a variable
const termData = require('./db/db.json');
// print the json file to the console
console.log(termData);



app.get('/', (req, res) => {
     res.send(
       return termData
     );
   });
  
  // activate the server
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


