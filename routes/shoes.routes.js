const { Router } = require('express');
const router = Router();

const {
  getShoes,
  getNikeShoes,
  getAdidasShoes,
  getAirJordans,
  getYeezyShoes,
  getShoeDetails,
  getShoesByQuery,
} = require('../controllers/shoes.controller');

router.get('/', getShoes);
router.get('/filter', getShoesByQuery);
router.get('/nike', getNikeShoes);
router.get('/adidas', getAdidasShoes);
router.get('/air_jordan', getAirJordans);
router.get('/yeezy', getYeezyShoes);
router.get('/:id', getShoeDetails);

module.exports = router;
