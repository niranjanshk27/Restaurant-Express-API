const Order = require('./model');
const Food = require('../Food/model');

const createOrder = function (req, res, next) {
  const {
    items,
    total
  } = req.body;

  const userId = req.user._id;

  const order = new Order({
    userId,
    items,
    total
  });

  order
    .save()
    .then(() => {
      res.json({
        success: true
      })
    });
};

const getOrderByUser = function (req, res, next) {
  const {
    userId,
  } = req.query;

  Order
    .find({
      userId,
    })
    .exec()
    .then(orders => {
      res.json({
        orders
      });
    })
    .catch(e => next(e));
};

const getAllOrder = function (req, res, next) {
  const { userId, id } = req.query;

  if (id) {
    Order
      .findById(id)
      .exec()
      .then(order => res.json(order))
      .catch(e => next(e));
  } else {
    const payload = userId ? { userId } : null;
    Order
      .find(payload)
      .exec()
      .then((orders) => {
        res.json({
          orders
        });
      })
      .catch(e => next(e));
  }
};


const updateStatus = function (req, res, next) {
  const { id } = req.params;
  Order.findById(req.body.order_id)
    .exec()
    .then(() => {
      if (['new-order', 'pending', 'ready-for-delivery', 'delivered'].includes(req.body.status)) {
        Order.findByIdAndUpdate(id, req.body)
          .exec()
          .then(() => res.json({
            success: true
          }))
          .catch(err => next(err));
      } else {
        res.json({
          success: false,
          message: "Something went wrong"
        })
      }
    })
    .catch(err => next(err));
};

module.exports = {
  createOrder,
  getOrderByUser,
  getAllOrder,
  updateStatus,
};
