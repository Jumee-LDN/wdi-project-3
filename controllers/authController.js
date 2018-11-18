const jwt = require('jsonwebtoken');
const User = require('../models/user');
const env = require('../config/environment');

//finds user in the db using the email they used to sign in with.
// if this user exists AND the validate password function returns true, a token is created that stores all the user information.
//In the front end, you can then do $auth.getPayload().username/sub to access this information and e.g. store on $scope.username.

function loginRoute(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user && user.validatePassword(req.body.password)) {
        const token = jwt.sign({
          username: user.username,
          sub: user._id
        }, env.secret, { expiresIn: '24h' });
        res.json({
          message: `Hello again ${user.username}`,
          token: token
        });
      } else {
        res.status(401).json({
          message: 'Dont think so!!!'
        });
      }
    })
    .catch(next);
}

function registerRoute(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome ${user.username}`
    }))
    .catch(next);
}

module.exports = {
  loginRoute: loginRoute,
  registerRoute: registerRoute
};
