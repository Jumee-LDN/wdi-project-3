const Exhibition = require('../models/exhibition');

function bookmarkRoute(req, res, next) {
  Exhibition
    .findById(req.params.exhibitionId)
    .populate('gallery')
    .then(exhibition => {
      if(!exhibition.bookmarked.find(userId => userId.toString() === req.tokenUserId)){
        exhibition.bookmarked.push(req.tokenUserId);
        return exhibition.save();
      } else {
        res.status(442).json({ message: 'Cannot bookmark twice silly!'});
        next();
      }
    })
    .then(exhibition => res.json(exhibition))
    .catch(next);
}

function deleteRoute(req, res, next) {
  console.log('you got to the unbookmark function');
  Exhibition
    .findById(req.params.exhibitionId)
    .populate('gallery')
    .then(exhibition => {
      console.log('exhibition', exhibition, req.tokenUserId);
      if(!exhibition.bookmarked.find( userId => userId.toString() === req.tokenUserId)){
        res.status(422).json({ message: 'You havent bookmarked this yet'});
      } else {
        console.log('unbookmarked');
        exhibition.bookmarked = exhibition.bookmarked.filter(x => x.toString() !== req.tokenUserId);
        return exhibition.save();
      }
    })
    .then(exhibition => res.json(exhibition))
    .catch(next);
}




module.exports = {
  bookmarkRoute: bookmarkRoute,
  deleteRoute: deleteRoute
};
