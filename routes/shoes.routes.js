const { Router } = require('express');
const router = Router();

const {
  getShoes,
  getShoesByQuery,
  searchShoes,
  getNikeShoes,
  getAdidasShoes,
  getAirJordans,
  getYeezyShoes,
  getShoeDetails,
} = require('../controllers/shoes.controller');

router.get('/', getShoes);
router.get('/filter', getShoesByQuery);
router.get('/search', searchShoes);
router.get('/nike', getNikeShoes);
router.get('/adidas', getAdidasShoes);
router.get('/air_jordan', getAirJordans);
router.get('/yeezy', getYeezyShoes);
router.get('/:id', getShoeDetails);

module.exports = router;
