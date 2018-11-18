const router = require('express').Router();
const galleryController = require('../controllers/galleryController');
const exhibitionController = require('../controllers/exhibitionController');
const commentController = require('../controllers/commentController');
const authController = require('../controllers/authController');
// const jwt = require('jsonwebtoken');

router.route('/register')
  .post(authController.register);

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
  .put(exhibitionController.updateRoute)
  .delete(exhibitionController.deleteRoute);

router.route('/exhibitions/:exhibitionId/comments')
  .post( commentController.createRoute);

router.route('/exhibitions/:exhibitionId/comments/:commentId')
  .delete( commentController.deleteRoute);

module.exports = router;
