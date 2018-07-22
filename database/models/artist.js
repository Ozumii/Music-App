// Todo: Create Artist Model
/**
 * Artists
 *  name:
 * age
 * yearsActive:
 * image:
 * genre
 * website:
 * netWorth
 * labelName
 * retired:
 * Albums:[subdocumen]
 */

const mongoose = require('mongoose');

const AlbumSchema = require('../models/album');

const Schema = mongoose.Schema;


const ArtistSchema = new Schema({

    name: String,
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number, 
    labelName: String,
    retired: Boolean,
    Albums: [AlbumSchema]


});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
