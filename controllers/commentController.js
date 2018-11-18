const Exhibition = require('../models/exhibition');

// once login/register rutes are done & secure route written - add 'user' key onto req.body in this function, so that the id of the user is stored and accessible (e.g. req.tokenUserId). THEN, need to populate with comments.user (exhibition, 'comments.user').

function createRoute(req, res, next){
  Exhibition
    .findById(req.params.exhibitionId)
    .then(exhibition => {
      exhibition.comments.push(req.body);
      console.log('creating a comment', req.body);
      return exhibition.save()
    })
    // .then(exhibition => Exhibition.populate(exhibition, 'comments'))
    .then(exhibition => res.json(exhibition))
    .catch(next);
}

function deleteRoute(req, res, next){
  Exhibition
    .findById(req.params.exhibitionId)
    .then(exhibition => {
      const comment = exhibition.comments.id(req.params.commentId);
      comment.remove();
      return exhibition.save();
    })
    // .then(exhibition => Exhibition.populate(exhibition, ''))
    .then(exhibition => res.json(exhibition))
    .catch(next);
}
module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
