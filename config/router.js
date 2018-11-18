const router = require('express').Router();
const galleryController = require('../controllers/galleryController');
const exhibitionController = require('../controllers/exhibitionController');
// const jwt = require('jsonwebtoken');

router.route('/galleries')
  .get(galleryController.index)
  .post(galleryController.create);

router.route('/exhibitions')
  .get(exhibitionController.indexRoute);

router.route('/galleries/:galleryId')
  .post(exhibitionController.createRoute);

router.route('/galleries/:id')
  .get(galleryController.show)
  .put(galleryController.update)
  .delete(galleryController.delete);

router.route('/exhibitions/:id')
  .get(exhibitionController.showRoute)
  .put(exhibitionController.updateRoute);

module.exports = router;
