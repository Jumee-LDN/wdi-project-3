const Exhibition = require('../models/exhibition');

function indexRoute(req, res, next){
  Exhibition
    .find()
    .then(exhibitions => {
      res.json(exhibitions);
    })
    .catch(next);
}
function showRoute(req, res, next){
  Exhibition
    .findById(req.params.id)
    .then(exhibition => {
      res.json(exhibition)
    })
    .catch(next);
}
function createRoute(req, res, next){
  req.body.gallery = req.params.galleryId;
  Exhibition
    .create(req.body)
    .then(exhibition => {
      console.log('creating a exhibition', req.body);
      res.json(exhibition);
    })
    .catch(next);
}

function updateRoute(req, res, next){
  Exhibition
    .findById(req.params.id)
    .then(exhbition => exhbition.set(req.body))
    .then(exhbition => exhbition.save())
    .then(exhbition => res.json(exhbition))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Exhibition.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('exhibition has been deleted');
      res.sendStatus(204);
    })
    .catch(next);
}
module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  createRoute: createRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
