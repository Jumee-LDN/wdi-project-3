/* global api, expect, describe, it, beforeEach */

const Gallery = require('../../models/gallery');


const galleryIds = [
  '5be9bd11c7f4b190431791a6',
  '5be9bd11c7f4b190431791a7',
  '5be9bd11c7f4b190431791a8',
  '5be9bd11c7f4b190431791a9',
  '5be9bd11c7f4b190431791a5',
  '5be9bd11c7f4b190431791a4'
];


const galleryData = [
  {
    _id: galleryIds[0],
    name: 'Timothy Taylor',
    image: 'http://cdn.ltstatic.com/2009/November/CS096631_942long.jpg',
    city: 'London',
    country: 'UK',
    description: 'Timothy Taylor is a modern and contemporary art gallery in Mayfair, London, owned and founded by the art dealer Timothy Taylor. The gallery represents artists and sells original and editioned artworks across different media.',
    latlgn: { lat: 51.51051, lgn: -0.14986},
    locationName: 'Mayfair'
  },
  {
    _id: galleryIds[1],
    name: 'Somerset House',
    image: 'https://bit.ly/2ONZkeE',
    city: 'London',
    country: 'UK',
    description: 'Offering a diverse and dynamic public programme of contemporary arts and culture, we are also a home to a large community of creative businesses, artists and makers, including Somerset House Studios. One of the city’s most spectacular and well-loved spaces, we are a place where art and culture is imagined, made and experienced by our 3 million visitors every year.',
    latlgn: { lat: 51.51135, lgn: -0.11903},
    locationName: 'Temple'
  },
  {
    _id: galleryIds[2],
    name: 'MoMA',
    image: 'https://bit.ly/2ldJoG7',
    city: 'New York City',
    country: 'USA',
    description: 'At The Museum of Modern Art and MoMA PS1, we celebrate creativity, openness, tolerance, and generosity. We aim to be inclusive places—both onsite and online—where diverse cultural, artistic, social, and political positions are welcome. We’re committed to sharing the most thought-provoking modern and contemporary art, and hope you will join us in exploring the art, ideas, and issues of our time.',
    latlgn: { lat: 40.76108, lgn: -73.97715},
    locationName: 'Manhattan'
  },
  {
    _id: galleryIds[3],
    name: 'Palais de Tokyo',
    image: 'https://i2.wp.com/farm8.staticflickr.com/7094/7310164232_73986e374e_b.jpg?zoom=2.625&resize=348%2C231&ssl=1',
    city: 'Paris',
    country: 'France',
    description: ' Palais de Tokyo is the dynamic place for the artists of our time. It is also the largest center for contemporary artistic creation in all of Europe, as well as a one-of-a-kind exhibition space. A rebellious wasteland with the air of a Palace, an anti-museum in permanent transformation, Palais de Tokyo has kept Paris full of life and on its toes since 2002. At once convivial and challenging, generous and cutting edge, inviting and radical, poetic and transgressive, it is a space to learn, to experience, to feel, and to live – a space from which the unexpected springs forth.',
    latlgn: { lat: 48.86463, lgn: 2.29706},
    locationName: 'Trocadéro'
  },
  {
    _id: galleryIds[4],
    name: 'Saatchi Gallery',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/0f/4d/f2/saatchi-gallery.jpg',
    city: 'London',
    country: 'England',
    description: 'The Saatchi Gallery aims to provide an innovative forum for contemporary art, presenting work by largely unseen young artists or by international artists whose work has been rarely or never exhibited in the UK.The audience for exhibitions of contemporary art has increased widely during the recent years as general awareness and interest in contemporary art has developed both in Britain and abroad.',
    latlgn: { lat: 51.49148, lgn: -0.15997},
    locationName: 'Chelsea'
  },
  {
    _id: galleryIds[5],
    name: 'SFMoMA',
    image: 'https://s3-us-west-2.amazonaws.com/sfmomamedia/media/t/uploads/images/Z4H4ADFv6b-Y.jpg',
    city: 'San Francisco',
    country: 'USA',
    description: 'SFMOMA is dedicated to making the art for our time a vital and meaningful part of public life. For that reason we assemble unparalleled collections, create exhilarating exhibitions, and develop engaging public programs. In all of these endeavors, we are guided by our enduring commitment to fostering creativity and embracing new ways of seeing the world.',
    latlgn: { lat: 37.78592, lgn: -122.40074},
    locationName: '151 3rd St'
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
