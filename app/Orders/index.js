var Router = require('express').Router();
var OrderController = require('./controller');
const Authorization = require('../utils/roleAuthorization');

module.exports = function (passport) {
  Router
    .post(
      '/',
      passport.authenticate('jwt', { session: false }),
      Authorization.roleAuthorization(['customer']),
      OrderController.createOrder
    );
  
  Router
    .get(
      '/',
      passport.authenticate('jwt', { session: false }),
      Authorization.roleAuthorization(['admin', 'customer', 'kitchen', 'staff']),
      OrderController.getAllOrder
    );

    Router
    .patch(
      '/:id',
      passport.authenticate('jwt', { session: false }),
      Authorization.roleAuthorization(['customer']),
      OrderController.updateStatus
    );
  
  return Router;
};
