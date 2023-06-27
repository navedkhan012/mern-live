// eslint-disable-file no-use-before-define

const Cart = require("../models/cart");
exports.addItemToCart = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json({ message: error });
    if (cart) {
      const product = req.body.cartItems.product;
      const item = cart.cartItems.find((c) => c.product == product);
      let condition, action;
      if (item) {
        condition = { user: req.user._id, "cartItems.product": product };
        action = {
          /* eslint-disable no-use-before-define */
          // prettier-ignore
          "$set": {
            "cartItems.$": {
              ...req.body.cartItems,
              quantity: item.quantity + req.body.cartItems.quantity,
            },
          },
        };
        // if cart already then update bu quantity
        Cart.findOneAndUpdate(condition, action).exec((error, _cart) => {
          if (error) return res.status(400).json({ message: error });
          if (_cart) return res.status(201).json({ cart: _cart });
        });
      } else {
        condition = { user: req.user._id };
        action = {
          // prettier-ignore
          "$push": { "cartItems": req.body.cartItems },
        };
        // if cart already then update bu quantity
        Cart.findOneAndUpdate(condition, action).exec((error, _cart) => {
          if (error) return res.status(400).json({ message: error });
          if (_cart) return res.status(201).json({ cart: _cart });
        });
      }

      // res.status(200).json({ message: cart })
    } else {
      // if cart not then add cart
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      cart.save((error, cart) => {
        if (error) return res.status(400).json({ message: error });
        if (cart) return res.status(201).json({ cart });
      });
    }
  });
};
