/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const { secret } = require('../../config/environment');

const Exhibition = require('../../models/exhibition');

const userIds = [
  '5be9bd11c7f4b190431791a4',
  '5be9bd11c7f4b190431791a5'
];

const galleryIds = [
  '5be9bd11c7f4b190431791a6'
];

const exhibitionData = {
  name: 'Alex Katz: Coca-Cola Girls',
  dates: 'Until Friday December 21 2018',
  rating: 4,
  description: 'Everything was good once. Not like today. Back in the 1950s, America was booming. Money was flowing, business was good, the war had been won and the sun was always shining. It was the halcyon days of modern capitalism.',
  image: 'https://bit.ly/2S1OdRj',
  gallery: galleryIds[0],
  comments: [
    {
      text: 'This is glamorous.',
      commentAuthor: userIds[0]
    }, {
      text: 'Such a boring exhibition.',
      commentAuthor: userIds[1]
    }
  ]
};

let token;

describe('Exhibition CREATE', () => {
  beforeEach(done => {
    Exhibition.remove({})
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
});

it('should return a 401 response without a token', done => {
  api.post('/api/galleries/:galleryId')
    .end((err, res) => {
      expect(res.status).to.eq(401);
      done();
    });
});

it('should return a 201 response', done => {
  api.post('/api/galleries/:galleryId')
    .set('Authorization', `Bearer ${token}`)
    .send(exhibitionData)
    .end((err, res) => {
      expect(res.status).to.eq(201);
      done();
    });
});

it('should return an object', done => {
  api.post('/api/galleries/:galleryId')
    .set('Authorization', `Bearer ${token}`)
    .send(exhibitionData)
    .end((err, res) => {
      expect(res).to.be.an('object');
      done();
    });
});

it('should return the correct data', done => {
  api.post('/api/galleries/:galleryId')
    .set('Authorization', `Bearer ${token}`)
    .send(exhibitionData)
    .end((err, res) => {
      console.log(res.body);
      expect(res.body.name).to.eq(exhibitionData.name);
      expect(res.body.image).to.eq(exhibitionData.image);
      expect(res.body.gallery).to.eq(exhibitionData.gallery);
      done();
    });
});
