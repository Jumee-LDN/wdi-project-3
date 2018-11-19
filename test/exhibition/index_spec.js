/* global api, expect, describe, it, beforeEach */

const Exhibition = require('../../models/exhibition');

const galleryIds = [
  '5be9bd11c7f4b190431791a6',
  '5be9bd11c7f4b190431791a7'
];

const userIds = [
  '5be9bd11c7f4b190431791a3',
  '5be9bd11c7f4b190431791a4',
  '5be9bd11c7f4b190431791a5'
];
const exhibitionData = [
  {
    name: 'Alex Katz: Coca-Cola Girls',
    dates: 'Until Friday December 21 2018',
    rating: 4,
    description: 'Everything was good once. Not like today. Back in the 1950s, America was booming. Money was flowing, business was good, the war had been won and the sun was always shining. It was the halcyon days of modern capitalism.',
    image: 'https://bit.ly/2S1OdRj',
    gallery: galleryIds[0],
    comments: [
      {
        text: 'This is glamorous.',
        commentAuthor: userIds[1]
      }, {
        text: 'Such a boring exhibition.',
        commentAuthor: userIds[2]
      }
    ]
  },

  {
    name: 'Athi-Patra Ruga: Of Gods, Rainbows and Omissions',
    dates: 'Until Sunday January 6 2019',
    rating: 4,
    description: 'Athi-Patra Ruga’s exhibition at Somerset House certainly justifies the reference in its title to rainbows. Each of the gallery’s Terrace Rooms is a kaleidoscopic mass of saturated colour. Ruby, fuchsia, turquoise, periwinkle, sunshine-happy yellow, this show of tapestries is the perfect inoculation against the growing greyness of London’s November sky.',
    image: 'https://bit.ly/2qP9bXU',
    gallery: galleryIds[1],
    comments: [
      {
        text: 'One of the best exhibition in 2018',
        commentAuthor: userIds[0]
      }, {
        text: 'I don\'t like it',
        commentAuthor: userIds[2]
      }
    ]
  }
];

describe('Exhibition INDEX', () => {
  beforeEach(done => {
    Exhibition.remove({})
      .then(() => Exhibition.create(exhibitionData))
      .then(() => done());
  });
});

it('should return an array', done => {
  api.get('/api/exhibitions')
    .end((err, res) => {
      expect(res.body).to.be.an('array');
      done();
    });
});

it('should return a 200 response', done => {
  api.get('/api/exhibitions')
    .end((err, res) => {
      expect(res.status).to.eq(200);
      done();
    });
});

it('should return an array of OBJECTS', done => {
  api.get('/api/exhibitions')
    .end((err, res) => {
      res.body.forEach(exhibition => expect(exhibition).to.be.an('object'));
      done();
    });
});

it('should return the CORRECT DATE', done => {
  api.get('/api/exhibitions')
    .end((err, res) => {
      res.body.forEach(exhibition => {
        const dataItem = exhibitionData.find(item => item.name === exhibition.name);
        expect(exhibition.name).to.eq(dataItem.name);
        expect(exhibition.gallery).to.eq(dataItem.gallery);
        expect(exhibition.image).to.eq(dataItem.image);
        expect(exhibition.description).to.eq(dataItem.description);
        expect(exhibition.dates).to.eq(dataItem.dates);
      });
      done();
    });
});
