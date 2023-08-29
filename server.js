// Purpose: creates an instance of Express.js
const express = require('express'); 

//call these variables for the routes
const apiRoutes = require('./routes/apiRoutes'); 

const htmlRoutes = require('./routes/htmlRoutes');
// const allNotes = require('./db/db.json');
// const store = require('./db/store');
// const notes = require('./db/db.json');

//call this varble to access Express.js methods
const app = express(); 

//call this variable to access the port
const PORT = process.env.PORT || 5001;  


//setting up the middleware functionality
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);
// app.use(`/notes`, store.read());
// app.use(`/notes`, notes);


app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
