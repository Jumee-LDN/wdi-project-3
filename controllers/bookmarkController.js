const Exhibition = require('../models/exhibition');

function bookmarkRoute(req, res, next) {
  Exhibition
    .findById(req.params.exhibitionId)
    .then(exhibition => {
      exhibition.bookmarked.push(req.tokenUserId);
      exhibition.save();
      return exhibition;
    })
    .then(exhibition => res.json(exhibition))
    .catch(next);
}

// function deleteRoute(req, res, next) {
//   Exhibition
//     .findById(req.params.exhibitionId)
//     .then(exhibition => {
//     if(exhibition.bookmarked.includes(req.tokenUserId)){
//       console.log('you have bookmarked this exhibition')
//     };
//
// });
// }


module.exports = {
  bookmarkRoute: bookmarkRoute,
  // deleteRoute: deleteRoute
};
