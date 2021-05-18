const { Router } = require('express');
const router = Router();

const { addItem } = require('../controllers/cart.controller')

router.get('/:id', addItem)

module.exports = router;