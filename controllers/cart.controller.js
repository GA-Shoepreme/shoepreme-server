const Shoe = require('../models/shoe.model');
const Cart = require('../models/cart.model');
const catchAsync = require('../utils/catchAsync');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const addItem = catchAsync(async (req, res) => {
  const { id } = req.params;
  //create new cart: if cart is already in session pass that, otherwise pass empty object
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  //find product and add to cart
  Shoe.findById(id, (err, product) => {
    //video only redirected to root page on error but said we show some type of error message
    if (err) {
      console.log('ERROR', err);
      res.status(500);
    }

    cart.add(product, product.id); //pass product to add and product identifier with the product id
    req.session.cart = cart; //storing into current express session, auto saves on each response sent back
    console.log(req.session.cart);
    res.redirect('/shoes'); //reidrect back to prooduct page
  });
});

const stripePayment = catchAsync(async (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  await stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

module.exports = { addItem, stripePayment };
