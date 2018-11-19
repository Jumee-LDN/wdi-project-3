const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
  name: String,
  image: String,
  latlgn: {
    lat: Number,
    lgn: Number
  },
  locationName: String
});

gallerySchema.virtual('exhibitionList', {
  ref: 'Exhibition',
  localField: '_id',
  foreignField: 'gallery'
});

const galleryModel = mongoose.model('Gallery', gallerySchema);

module.exports = galleryModel;
