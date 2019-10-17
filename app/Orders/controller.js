const Order = require('./model');

const createOrder = function (req, res, next) {
  const {
    items,
    totalCost
  } = req.body;

  const userId = req.user._id;

  const order = new Order({
    userId,
    items,
    totalCost
  });

  order
    .save()
    .then(order => {
      res.json({
        success: true,
        order,
      });
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
    .then((orders) => {
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
    const payload = userId ? {userId} : null;
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

  // // if paid =true
  // else {
  //   Order
  //   .find({ paid: true })
  //   .exec()
  //   .then((orders) => {
  //     res.json({
  //       orders
  //     });
  //   })
  //   .catch(e => next(e));
  // }
};


const updateStatus = function (req, res, next) {
  const { id } = req.params;
  Order.findById(req.body.order_id)
    .exec()
    .then(() => {
      if(['new-order', 'pending', 'ready-for-delivery', 'delivered'].includes(req.body.status)) {
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


// Patch only for one thing
// const updateToPending = function (req, res, next) {
//   const { id } = req.params;

//   Order.findById(req.body.order_id)
//     .exec()
//     .then(() => {
//       Order.findByIdAndUpdate(id, req.body)
//         .exec()
//         .then(() => res.json({
//           success: true
//         }))
//         .catch(err => next(err));
//     })
//     .catch(err => next(err));
// };

module.exports = {
  createOrder,
  getOrderByUser,
  getAllOrder,
  // updateToPending,
  updateStatus,
};
