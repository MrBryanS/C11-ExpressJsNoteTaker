const router = require('express').Router();
const store = require('../db/store');


// app.use(express.static('public'));

// const noteData = require('../db/db.json');
// print the json file to the console

// [x] GET /api/notesshould read the db.jsonfile and return all saved notes as JSON.//send the json file to the browser
//save the note the;n get and render note.
//something in the model or 

router.get('/notes', (req, res) => {
  //return res.json("Hello James");
    store.getNotes().then((notes) => {
        return res.json(notes);
    }).catch((err) => res.status(500).json(err));
});



// [x] GET *should return the index.htmlfile.
router.post('/notes', (req, res) => {
  store.addNote(req.body).then((note) => res.json(note)).catch((err) => res.status(500).json(err));
  });

router.delete('/notes/:id', (req, res) => {
    store.removeNote(req.params.id).then(() => res.json({ ok: true })).catch((err) => res.status(500).json(err));
     
  });


module.exports = router;



