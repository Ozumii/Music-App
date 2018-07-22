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
     date: Date,
     copiesSold: Number,
     numberTracks: Number,
     image: String,
     revenue: Number

 });
 //this is a schema to a subdoc not a actual model
 //const Album = mongoose.model('album', AlbumSchema);

 module.exports = AlbumSchema;
