const { Router } = require('express');
const router = Router();

const { addItem, stripePayment } = require('../controllers/cart.controller')

router.get('/:id', addItem);
router.post('/payment', stripePayment);

module.exports = router;
