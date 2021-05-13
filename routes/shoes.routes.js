const { Router } = require('express');
const router = Router();

const { getShoes } = require('../controllers/shoes.controller');

router.get('/', getShoes);

module.exports = router;
