/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// TODO: add secret to environment file
const { secret } = require('../../config/environment');

const Gallery = require('../../models/gallery');
const userIds = [
  '5be9bd11c7f4b190431791a3'
];

const userData = {
  _id: userIds[0],
  username: 'Jumee',
  email: 'j@j',
  password: 'pass'
};

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

let token;

describe('Galleries CREATE', () => {

  beforeEach(done => {
    Gallery.remove({})
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
    api.post('/api/galleries')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        done();
      });
  });

  it('should return a 201 response', done => {
    // NOTE: This test requires a change to the app!
    // I've updated the CREATE route (see dessertController)
    api.post('/api/galleries')
      .set('Authorization', `Bearer ${token}`)
      .send(galleryData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/galleries')
      .set('Authorization', `Bearer ${token}`)
      .send(galleryData)
      .end((err, res) => {
        // test the type of res.body
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/galleries')
      .set('Authorization', `Bearer ${token}`)
      .send(galleryData)
      .end((err, res) => {
        // test the contents of res.body against the test data
        expect(res.body.name).to.eq(galleryData.name);
        expect(res.body.image).to.eq(galleryData.image);
        done();
      });
  });

});
