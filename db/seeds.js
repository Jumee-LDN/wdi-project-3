const env = require('../config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const Exhibition = require('../models/exhibition');
const User = require('../models/user');
const Gallery = require('../models/gallery');

const userIds = [
  '5be9bd11c7f4b190431791a3',
  '5be9bd11c7f4b190431791a4',
  '5be9bd11c7f4b190431791a5'
];

const userData = [
  {
    _id: userIds[0],
    username: 'Jumee',
    email: 'j@j',
    password: 'pass'
  },
  {
    _id: userIds[1],
    username: 'India',
    email: 'i@i',
    password: 'pass'
  },
  {
    _id: userIds[2],
    username: 'Rob',
    email: 'r@r',
    password: 'pass'
  }
];

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
    image: 'https://bit.ly/2QPJ5iK',
    city: 'London',
    country: 'UK',
    latlgn: { lat: 51.51051, lgn: -0.14986},
    locationName: 'Mayfair'
  },
  {
    _id: galleryIds[1],
    name: 'Somerset House',
    image: 'https://bit.ly/2ONZkeE',
    city: 'London',
    country: 'UK',
    latlgn: { lat: 51.51135, lgn: -0.11903},
    locationName: 'Temple'
  },
  {
    _id: galleryIds[2],
    name: 'MoMA',
    image: 'https://bit.ly/2ldJoG7',
    city: 'New York City',
    country: 'USA',
    latlgn: { lat: 40.76108, lgn: -73.97715},
    locationName: 'Manhattan'
  },
  {
    _id: galleryIds[3],
    name: 'Palais de Tokyo',
    image: 'https://bit.ly/2DA7Ko1',
    city: 'Paris',
    country: 'France',
    latlgn: { lat: 48.86463, lgn: 2.29706},
    locationName: 'Trocadéro'
  },
  {
    _id: galleryIds[4],
    name: 'Saatchi Gallery',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/0f/4d/f2/saatchi-gallery.jpg',
    city: 'London',
    country: 'England',
    latlgn: { lat: 51.49148, lgn: -0.15997},
    locationName: 'Chelsea'
  },
  {
    _id: galleryIds[5],
    name: 'SFMoMA',
    image: 'https://s3-us-west-2.amazonaws.com/sfmomamedia/media/t/uploads/images/Z4H4ADFv6b-Y.jpg',
    city: 'San Francisco',
    country: 'USA',
    latlgn: { lat: 37.78592, lgn: -122.40074},
    locationName: '151 3rd St'
  }
];


const exhibitionData = [
  {
  //Review by Jumee
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
    name: 'Ribera: Art of Violence',
    dates: 'Until Sunday Jan 27 2019',
    rating: 8,
    description: 'Flayed skin and dislocated shoulders are two recurring themes of Jusepe de Ribera’s art. The first, normally inflicted on Christian saints as part of their martyrdoms, and the second, the result of a foul seventeenth-century torture device known as the ‘strappado’.',
    image: 'https://bit.ly/2R0ghV9',
    gallery: galleryIds[0],
    comments: [
      {
        text: 'I\'ve seen this before. Curating isn\'t great',
        commentAuthor: userIds[2]
      }
    ]
  },
  {
  //Review by India
    name: 'Athi-Patra Ruga: Of Gods, Rainbows and Omissions',
    dates: 'Until Sunday January 6 2019',
    rating: 9,
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
  },
  {
  //Review by India
    name: 'Elmgreen & Dragset',
    dates: 'Until Sunday January 13 2019',
    rating: 2,
    description: 'The Whitechapel Gallery is being turned into a luxury hotel. Sorry about that. Its galleries will be turned into suites for the moneyed hipster elite to huff designer drugs in, and its pool will become an opulent spa.',
    image: 'https://bit.ly/2AaIgdd',
    gallery: galleryIds[1],
    comments: [
      {
        text: 'This is something new.',
        commentAuthor: userIds[0]
      }
    ]
  },
  {
  //Review by India
    name: 'New Work: Etel Adnan',
    dates: 'September 1st 2018 – January 6th 2019',
    rating: 7,
    description: 'Born in Beirut, Lebanon, in 1925, visual artist, poet, and essayist Etel Adnan writes what must be communicated through language, and paints what cannot. While her earliest paintings favored pure abstraction, she is perhaps best known for her landscape works inspired by her long obsession with Mount Tamalpais. Adnan’s recent works once again return to abstraction, most specifically, color and its possibilities. A student of philosophy, Adnan came to Berkeley in 1955. As an active participant in Ann O’Hanlon’s Perception Workshops in Mill Valley in the 1960s, she developed her practice in dialogue with poets, experimental musicians, playwrights, and SFMOMA, at its original location in the War Memorial Veteran’s Building. Though she now resides in Paris, the Bay Area remained her home for more than fifty years, and was long the impetus behind her work. New Work: Etel Adnan presents new paintings and tapestries in SFMOMA’s first presentation of the artist’s work.',
    image: 'https://s3-us-west-2.amazonaws.com/sfmomamedia/media/t/uploads/images/qADMFERgLBq-.png',
    gallery: galleryIds[5],
    comments: [
      {
        text: 'This is awesome',
        commentAuthor: userIds[0]
      }
    ]
  },
  {
  //Review by India
    name: 'Lawrence Abu Hamdan',
    dates: 'Until Sunday December 9 2018',
    rating: 7,
    description: 'There’s crap everywhere in this show. There’s a bin full of plastic tubing and a cricket bat, a stepladder, metal shelves covered with popcorn, teacups and trainers, watermelons on the floor, big bottles of fizzy drink, a paddling pool.',
    image: 'https://bit.ly/2FuB7uw',
    gallery: galleryIds[1],
    comments: [
      {
        text: 'Abu Hamdan’s show has a point and a conscience.',
        commentAuthor: userIds[1]
      }
    ]
  }
];

Exhibition.collection.drop();
User.collection.drop();
Gallery.collection.drop();

Exhibition.create(exhibitionData)
  .then(exhibitions => {
    console.log(`Created ${exhibitions.length}`);
    User.create(userData)
      .then(users => {
        mongoose.connection.close();
      });

    Gallery.create(galleryData)
      .then(galleries => {
        mongoose.connection.close();
      });
  });
