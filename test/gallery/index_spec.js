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

const galleryData = [
  {
    _id: galleryIds[0],
    name: 'Timothy Taylor',
    image: 'https://bit.ly/2QPJ5iK',
    latlgn: { lat: 51.5, lgn: -0.14},
    locationName: 'Mayfair'
  },
  {
    _id: galleryIds[1],
    name: 'Somerset House',
    image: 'https://bit.ly/2ONZkeE',
    latlgn: { lat: 51.5, lgn: -0.11},
    locationName: 'Temple'
  }
];


describe('Galleries INDEX', () => {
  beforeEach(done => {
    Gallery.remove({})
      .then(() => Gallery.create(galleryData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get('/api/galleries')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/galleries')
      .end((err, res) => {
        // res.body is the result you would see in Insomnia
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/galleries')
      .end((err, res) => {
        // use res.body.forEach
        res.body.forEach((gallery) => {
          expect(gallery).to.be.an('object');
        });
        done();
      });
  });

  it('should return the correct data', done => {
    api.get('/api/galleries')
      .end((err, res) => {
        res.body.forEach((gallery) => {
          const dataItem = galleryData.find(item => item.name === gallery.name);
          expect(gallery.name).to.eq(dataItem.name);
          expect(gallery.image).to.eq(dataItem.image);
        });
        done();
      });
  });
});
