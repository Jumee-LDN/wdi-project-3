const router = require('express').Router();
const galleryController = require('../controllers/galleryController');
// const jwt = require('jsonwebtoken');

router.route('/galleries')
  .get(galleryController.index)
  .post(galleryController.create);

router.route('/galleries/:id')
  .get(galleryController.show)
  .put(galleryController.update)
  .delete(galleryController.delete);

module.exports = router;
