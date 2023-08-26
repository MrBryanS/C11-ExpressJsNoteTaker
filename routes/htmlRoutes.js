const router = require('express').Router();

const path = require(`path`);// const { readAndAppend } = require('../helpers/fsUtils');;l

// GET Route for retrieving all the feedback
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
  });


//20230826-1025 change '*' to `/` if solves heroku issue: method=GET path="/" 

  // router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
//   });


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
  });


// POST Route for submitting feedback


module.exports = router;
