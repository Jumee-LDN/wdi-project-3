const env = require('../config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const Exhibition = require('../models/exhibition');
//
// const userIds = [
//   '5be9bd11c7f4b190431791a3',
//   '5be9bd11c7f4b190431791a4'
// ];
//
// const userData = [
//   {
//     _id: userIds[0],
//     username: 'Jumee',
//     email: 'j@j',
//     password: 'pass'
//   },
//   {
//     _id: userIds[1],
//     username: 'India',
//     email: 'i@i',
//     password: 'pass'
//   }
// ];
//
// const exhibitionData = [
//   {
//   }
// ];
//
// Exhibition.collection.drop();
//
// Exhibition.create(exhibitionData)
//   .then(exhibitions => {
//     console.log(`Created ${exhibitions.length}`);
//     User.create(userData)
//       .then(users => {
//         mongoose.connection.close();
//       });
//   });
