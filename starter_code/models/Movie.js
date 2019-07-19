const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = mongoose.model('movie', new Schema({
    title: String,
    director: String,
    stars: {type: Array},
    image: String,
    description: String,
    showtimes: {type: Array},
}), );

module.exports = Movie;