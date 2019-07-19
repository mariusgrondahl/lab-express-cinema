const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET Movies */
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(Movies => {
      res.render('movies', {Movies});
    })
    .catch(error => {
      console.log(error)
    })
});

/* Single Movie */
router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(Movies => {
      res.render('single-movie', {Movies});

    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
