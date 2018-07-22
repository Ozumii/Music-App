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
    retired: String,
    Albums: [Albums]


});

const Artist = mongoose.model('artist', Artist);

module.exports = Artist;
