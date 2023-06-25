const Cart = require("../models/cart");
exports.addItemToCart = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json({ message: error });
    if (cart) {
      const product = req.body.cartItems.product;
      const isItemAdded = cart.cartItems.find(
        (c) => c.product == req.body.cartItems.product
      );

      if (isItemAdded) {
        // if cart already then update bu quantity
        Cart.findOneAndUpdate(
          { user: req.user._id, "cartItems.product": product },
          {
            $set: {
              "cartItems.$": {
                ...req.body.cartItems,
                quantity: isItemAdded.quantity + 1,
              },
            },
          }
        ).exec((error, _cart) => {
          if (error) return res.status(400).json({ message: error });
          if (_cart) return res.status(201).json({ cart: _cart });
        });
      } else {
        // if cart already then update bu quantity
        Cart.findOneAndUpdate(
          { user: req.user._id },

          {
            $push: { cartItems: req.body.cartItems },
          }
        ).exec((error, _cart) => {
          if (error) return res.status(400).json({ message: error });
          if (_cart) return res.status(201).json({ cart: _cart });
        });
      }

      // res.status(200).json({ message: cart })
    } else {
      // if cart not then add cart
      const cart = new Cart({
        user: req.user._id,
        cartItems: req.body.cartItems,
      });

      cart.save((error, cart) => {
        if (error) return res.status(400).json({ message: error });
        if (cart) return res.status(201).json({ cart });
      });
    }
  });
};
