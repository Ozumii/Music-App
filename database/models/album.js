// Todo: create Album Schema
/**
 * Album
 *  title:
 *  date:
 *  copiesSold
 *  numberTracks:
 *  image:
 *  revenue:
 */

 const mongoose = require('mongoose');
 
 const Schema = mongoose.Schema;

 const AlbumSchema = new Schema({

     title: String,
     date: Number,
     copiesSold: Number,
     numberTracks: Number,
     image: String,
     revenue: Number

 });

 const Album = mongoose.model('album',AlbumSchema);

 module.exports = Album;