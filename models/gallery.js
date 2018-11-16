const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
  name: String,
  latlgn: {
    lat: Number,
    lgn: Number
  },
  locationName: String
});

const galleryModel = mongoose.model('Gallery', gallerySchema);

module.exports = galleryModel;
