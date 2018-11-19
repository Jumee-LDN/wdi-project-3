/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// TODO: add secret to environment file
const { secret } = require('../../config/environment');

const Gallery = require('../../models/gallery');
const userIds = [
  '5be9bd11c7f4b190431791a3'
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
    // NOTE: This requires a change to the app! I've updated
    // secureRoute to pass this test...
    api.post('/api/galleries')
      .end((err, res) => {
        expect(res.status).to.eq(401);
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
