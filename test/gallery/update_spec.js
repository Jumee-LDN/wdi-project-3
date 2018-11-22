/* global api, expect, describe, it, beforeEach */

const Gallery = require('../../models/gallery');

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// TODO: add secret to environment file
const { secret } = require('../../config/environment');


const galleryIds = [
  '5be9bd11c7f4b190431791a6',
  '5be9bd11c7f4b190431791a7',
  '5be9bd11c7f4b190431791a8',
  '5be9bd11c7f4b190431791a9',
  '5be9bd11c7f4b190431791a5',
  '5be9bd11c7f4b190431791a4'
];


const galleryData =  {
  _id: galleryIds[1],
  name: 'Somerset House',
  image: 'https://bit.ly/2ONZkeE',
  city: 'London',
  country: 'UK',
  description: 'Offering a diverse and dynamic public programme of contemporary arts and culture, we are also a home to a large community of creative businesses, artists and makers, including Somerset House Studios. One of the city’s most spectacular and well-loved spaces, we are a place where art and culture is imagined, made and experienced by our 3 million visitors every year.',
  latlgn: { lat: 51.51135, lgn: -0.11903},
  locationName: 'Temple'
};


let galleryId;
let token;

describe('Galleries UPDATE', () => {

  beforeEach(done => {
    Gallery.remove({})
      .then(() => Gallery.create(galleryData))
      .then(gallery => galleryId = gallery._id)
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });

  it('should return a 401 response without a token', done => {
    api.put(`/api/galleries/${galleryId}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
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

});
