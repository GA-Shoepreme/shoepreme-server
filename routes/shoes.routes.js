const { Router } = require('express');
const router = Router();

const { getShoes, getNikeShoes, getAdidasShoes, getAirJordans, getYeezyShoes, getShoeDetails} = require('../controllers/shoes.controller');


router.get('/', getShoes);

router.get('/nike', getNikeShoes )

router.get('/adidas', getAdidasShoes )

router.get('/airjordan', getAirJordans )

router.get('/yeezy', getYeezyShoes )

router.get('/:id', getShoeDetails)


module.exports = router;