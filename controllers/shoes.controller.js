const Shoe = require('../models/shoe.model');
const catchAsync = require('../utils/catchAsync');

const getShoes = catchAsync(async (req, res) => {
  const shoes = await Shoe.find({});

  res.send(shoes);
});

const getNikeShoes = catchAsync(async (req, res) => {
  const nikeShoes = await Shoe.find({ brand: 'Nike' });
  const gender = req.query.gender;
  console.log(req.query);
  if (gender) {
    const shoesByGender = await Shoe.find({ brand: 'Nike', gender: gender });
    res.send(shoesByGender);
  } else {
    res.send(nikeShoes);
  }
});

const getAdidasShoes = catchAsync(async (req, res) => {
  const adidasShoes = await Shoe.find({ brand: 'adidas' });
  const gender = req.query.gender;
  console.log(req.query);
  if (gender) {
    const shoesByGender = await Shoe.find({ brand: 'adidas', gender: gender });
    res.send(shoesByGender);
  } else {
    res.send(adidasShoes);
  }
});

//do we want to include jordan brand with air jordans?
const getAirJordans = catchAsync(async (req, res) => {
  const airJordans = await Shoe.find({ brand: 'Air Jordan' });
  const gender = req.query.gender;
  console.log(req.query);
  if (gender) {
    const shoesByGender = await Shoe.find({
      brand: 'Air Jordan',
      gender: gender,
    });
    res.send(shoesByGender);
  } else {
    res.send(airJordans);
  }
});

//only has mens shoes and child
const getYeezyShoes = catchAsync(async (req, res) => {
  const yeezyShoes = await Shoe.find({ name: { $regex: 'Yeezy' } });
  const gender = req.query.gender;
  console.log(req.query);
  if (gender) {
    const shoesByGender = await Shoe.find({
      name: { $regex: 'Yeezy' },
      gender: gender,
    });
    res.send(shoesByGender);
  } else {
    res.send(yeezyShoes);
  }
});

module.exports = {
  getShoes,
  getNikeShoes,
  getAdidasShoes,
  getAirJordans,
  getYeezyShoes,
};
