const Shoe = require('../models/shoe.model');
const catchAsync = require('../utils/catchAsync');

//route to all shoes
//queries to filter by gender and release date(newest to olderst and vice versa)
const getShoes = catchAsync(async (req, res) => {
  const { gender, date, mktvalue, price, limit } = req.query;
  const shoes = await Shoe.find({}).limit(+limit);
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
  } else if (mktvalue === 'highest') {
    const marketValueShoes = await Shoe.find({})
      .sort({ estimatedMarketValue: -1 })
      .limit(+limit);
    res.json(marketValueShoes);
  } else if (price === 'high') {
    const shoes = await Shoe.find({})
      .sort({ retailPrice: -1 })
      .limit(+limit);
    res.json(shoes);
  } else if (price === 'low') {
    const shoes = await Shoe.find({})
      .sort({ retailPrice: 1 })
      .limit(+limit);
    res.json(shoes);
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
  const { limit } = req.query;
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
  const { limit } = req.query;
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

/**
 * filter by multiple queries
 **/
const getShoesByQuery = catchAsync(async (req, res) => {
  const { filter, page, limit, sort } = formatQuery(req.query);
  console.log('~ filter', filter);

  if (filter.brand && filter.brand.toLowerCase() === 'yeezy') {
    console.log('~ filter.brand', filter.brand);
    const shoes = await Shoe.find({ name: { $regex: 'Yeezy' } })
      .skip(page)
      .limit(limit)
      .sort(sort);

    res.json(shoes);
  } else {
    const shoes = await Shoe.find(filter).skip(page).limit(limit).sort(sort);

    res.json(shoes);
  }
});

function formatQuery(query) {
  const filter = {};
  const sort = {};
  let page = 0;
  let limit = 0;

  if (query.brand && query.brand === 'nike') {
    const split = query.brand.split(' ');

    split.forEach((word, index) => {
      split[index] = word[0].toUpperCase() + word.slice(1);
    });

    filter.brand = split.join(' ');
  } else if (query.brand === 'air_jordan') {
    const split = query.brand.split('_');

    split.forEach((word, index) => {
      split[index] = word[0].toUpperCase() + word.slice(1);
    });

    filter.brand = split.join(' ');
  } else {
    filter.brand = query.brand;
  }

  if (query.limit) limit = +query.limit;
  if (query.page) page = (+query.page - 1) * limit;
  if (query.gender) filter.gender = query.gender;

  if (query.date) {
    if (query.date === 'newest') sort.releaseDate = -1;
    if (query.date === 'oldest') sort.releaseDate = 1;
  }

  if (query.price) {
    if (query.price === 'high') sort.retailPrice = -1;
    if (query.price === 'low') sort.retailPrice = 1;
  }

  if (query.mktvalue) {
    if (query.mktvalue === 'high') sort.estimatedMarketValue = -1;
    if (query.mktvalue === 'low') sort.estimatedMarketValue = 1;
  }

  return { filter, page, limit, sort };
}

module.exports = {
  getShoes,
  getNikeShoes,
  getAdidasShoes,
  getAirJordans,
  getYeezyShoes,
  getShoeDetails,
  getShoesByQuery,
};
