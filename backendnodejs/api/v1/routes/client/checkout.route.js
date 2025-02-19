const express = require('express');
const router = express.Router();
const controller = require('../../controllers/client/checkOut.controller');
// const controller = require('../../controllers/client/cart.controller');


router.get('/', controller.index);
router.post('/order', controller.order);

router.get('/success/:orderId', controller.success);
router.get('/order/history', controller.orderHistory);





module.exports = router;