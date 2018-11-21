const Gallery = require('../models/gallery');

function indexRoute(req, res, next) {
  Gallery
    .find()
    .populate('galleries')
    .then(galleries => res.json(galleries))
    .catch(next);
}

function showRoute(req, res, next) {
  Gallery
    .findById(req.params.id)
    .populate('exhibitionList')
    .then(gallery => res.json(gallery))
    .catch(next);
}

function createRoute(req, res, next) {
  Gallery
    .create(req.body)
    .then(gallery => {
      console.log('creating a gallery', req.body);
      res.status(201).json(gallery);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  console.log('updating gallery');
  Gallery.findById(req.params.id)
    .then(gallery => gallery.set(req.body))
    .then(gallery => gallery.save())
    .then(gallery => res.json(gallery))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Gallery.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('The gallery has been deleted');
      res.sendStatus(204);
    })
    .catch(next);
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
