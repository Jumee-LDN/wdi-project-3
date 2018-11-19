/* global api, expect, describe, it, beforeEach */

const Gallery = require('../../models/gallery');

const userIds = [
  '5be9bd11c7f4b190431791a3',
  '5be9bd11c7f4b190431791a4',
  '5be9bd11c7f4b190431791a5'
];

const galleryIds = [
  '5be9bd11c7f4b190431791a6',
  '5be9bd11c7f4b190431791a7'
];

const galleryData = {
  _id: galleryIds[1],
  name: 'Somerset House',
  image: 'https://bit.ly/2ONZkeE',
  latlgn: { lat: 51.5, lgn: -0.11},
  locationName: 'Temple'
};

let galleryId;

describe('Gallery SHOW', () => {

  beforeEach(done => {
    Gallery.remove({})
      .then(() => Gallery.create(galleryData))
      .then(gallery => {
        galleryId = gallery._id;
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/galleries/${galleryId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/galleries/${galleryId}`)
      .end((err, res) => {
        // res.body is the result you would see in Insomnia
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/galleries/${galleryId}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(galleryData.name);
        expect(res.body.image).to.eq(galleryData.image);
        done();
      });
  });

});
