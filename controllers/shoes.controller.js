const Shoe = require('../models/shoe.model');
const catchAsync = require('../utils/catchAsync');

const getShoes = catchAsync(async (req, res) => {
    const shoes = await Shoe.find({});

    res.send(shoes);
});

module.exports = { getShoes };
