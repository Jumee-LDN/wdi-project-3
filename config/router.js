const router = require('express').Router();
const galleryController = require('../controllers/galleryController');
const exhibitionController = require('../controllers/exhibitionController');
const commentController = require('../controllers/commentController');
const authController = require('../controllers/authController');
const jwt = require('jsonwebtoken');

function secureRoute(req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).json({ message: 'unauthorised'});
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, 'indimee', function(err) {
    if(err){
      res.status(401).json({ message: 'Unauthorised!' });
    } else {
      req.tokenUserId = jwt.decode(token).sub;
      next();
    }
  });
}

router.route('/register')
  .post(authController.registerRoute);

router.route('/login')
  .post(authController.loginRoute);

router.route('/galleries')
  .get(galleryController.index)
  .post(secureRoute, galleryController.create);

router.route('/exhibitions')
  .get(exhibitionController.indexRoute);

router.route('/galleries/:galleryId')
  .post(exhibitionController.createRoute);

router.route('/galleries/:id')
  .get(galleryController.show)
  .put(secureRoute, galleryController.update)
  .delete(secureRoute, galleryController.delete);

router.route('/exhibitions/:id')
  .get(exhibitionController.showRoute)
  .put(secureRoute, exhibitionController.updateRoute)
  .delete(secureRoute, exhibitionController.deleteRoute);

router.route('/exhibitions/:exhibitionId/comments')
  .post(secureRoute, commentController.createRoute);

router.route('/exhibitions/:exhibitionId/comments/:commentId')
  .delete(secureRoute, commentController.deleteRoute);

module.exports = router;
