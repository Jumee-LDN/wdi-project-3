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

module.exports = {
  bookmarkRoute: bookmarkRoute
};
