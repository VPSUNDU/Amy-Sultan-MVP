var express = require('express');
var router = express.Router();
const db = require('../model/helper');

const getAllBibleVerse = (req, res) => {
  db("SELECT * FROM bible_verse ORDER BY id ASC;")
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => res.status(500).send(err));
};

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/bible_verse", function (req, res, next) {
  db("SELECT * FROM bible_verse;")
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => res.status(500).send(err));
});

router.get("/bible_verse/:id", function (req, res, next) {
  db(`SELECT * FROM bible_verse WHERE id=${req.params.id};`)
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => res.status(500).send(err));
});

router.post("/bible_verse", function (req, res, next) {
  db(`INSERT INTO bible_verse(bible_verse, bible_scripture)VALUES ("${req.body.bible_verse}","${req.body.bible_scripture}")`)
  .then(() => {
    getAllBibleVerse(req, res);
  })
  .catch((err) => res.status(404).send(err));
});

router.delete("/bible_verse/:id", function (req, res, next) {
  db(`DELETE FROM bible_verse WHERE id = ${req.params.id}`)
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => res.status(404).send(err));
});

module.exports = router;
