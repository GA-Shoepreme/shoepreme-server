const Shoe = require('../models/shoe.model');
const catchAsync = require('../utils/catchAsync');

//route to all shoes
//queries to filter by gender and release date(newest to olderst and vice versa)
const getShoes = catchAsync(async (req, res) => {
  const shoes = await Shoe.find({});
  const { gender, date, mktvalue, price, limit } = req.query;
  console.log(req.query);
  if (gender) {
    const shoesByGender = await Shoe.find({ gender: gender }).limit(+limit);
    res.json(shoesByGender);
  } else if (date === 'newest') {
    const newestShoes = await Shoe.find({})
      .sort({ releaseDate: -1 })
      .limit(+limit);
    res.json(newestShoes);
  } else if (date === 'oldest') {
    const oldestShoes = await Shoe.find({ releaseDate: { $nin: null } })
      .sort({
        releaseDate: 1,
      })
      .limit(+limit);
    res.json(oldestShoes);
  } else if(mktvalue === 'newest') {
    const marketValueShoes = await Shoe.find({}).sort({estimatedMarketValue: -1});
    res.json(marketValueShoes)
  } else if(price === 'high') {
    const shoes = await Shoe.find({}).sort({retailPrice: -1});
    res.json(shoes)
  } else if(price === 'low') {
    const shoes = await Shoe.find({}).sort({retailPrice: 1});
    res.json(shoes)
  } else {
    res.json(shoes);
  }
});

//route to nike brand
//query to filter by gender
const getNikeShoes = catchAsync(async (req, res) => {
  const { limit } = req.query;
  const nikeShoes = await Shoe.find({ brand: 'Nike' }).limit(+limit);
  const gender = req.query.gender;
  console.log(req.query);
  if (gender) {
    const shoesByGender = await Shoe.find({
      brand: 'Nike',
      gender: gender,
    }).limit(+limit);
    res.json(shoesByGender);
  } else {
    res.json(nikeShoes);
  }
});

//route to adidas brand
//query to filter by gender
const getAdidasShoes = catchAsync(async (req, res) => {
  const { limit } = req.query;
  const adidasShoes = await Shoe.find({ brand: 'adidas' }).limit(+limit);
  const gender = req.query.gender;
  console.log(req.query);
  if (gender) {
    const shoesByGender = await Shoe.find({
      brand: 'adidas',
      gender: gender,
    }).limit(+limit);
    res.json(shoesByGender);
  } else {
    res.json(adidasShoes);
  }
});

//route to Air Jordan brand
//query to filter by gender
//do we want to include jordan brand with air jordans?
const getAirJordans = catchAsync(async (req, res) => {
  const airJordans = await Shoe.find({ brand: 'Air Jordan' }).limit(+limit);
  const gender = req.query.gender;
  console.log(req.query);
  if (gender) {
    const shoesByGender = await Shoe.find({
      brand: 'Air Jordan',
      gender: gender,
    }).limit(+limit);
    res.json(shoesByGender);
  } else {
    res.json(airJordans);
  }
});

//route to yeezy brand
//query to filter by gender
const getYeezyShoes = catchAsync(async (req, res) => {
  const yeezyShoes = await Shoe.find({ name: { $regex: 'Yeezy' } }).limit(
    +limit
  );
  const gender = req.query.gender;
  console.log(req.query);
  if (gender) {
    const shoesByGender = await Shoe.find({
      name: { $regex: 'Yeezy' },
      gender: gender,
    }).limit(+limit);
    res.json(shoesByGender);
  } else {
    res.json(yeezyShoes);
  }
});


//route for shoe detail pages
const getShoeDetails = catchAsync(async (req, res) => {
  const shoe = await Shoe.findById(req.params.id);
  res.json(shoe);
});

module.exports = {
  getShoes,
  getNikeShoes,
  getAdidasShoes,
  getAirJordans,
  getYeezyShoes,
  getShoeDetails,
};
