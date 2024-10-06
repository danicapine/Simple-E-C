const Product = require('../models/productModel');
const Cart = require('../models/cartModel');

const clientController = {
    listProducts: (req, res) => {
        Product.getAllProducts((err, products) => {
            if (err) throw err;
            res.render('client/productList', { products });
        });
    },

    addToCart: (req, res) => {
        const productId = req.params.id;
        const quantity = req.body.quantity;
        Cart.addToCart(productId, quantity, (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    },

    viewCart: (req, res) => {
        Cart.getCartItems((err, cart) => {
            if (err) throw err;
            res.render('client/cart', { cart });
        });
    },

    checkout: (req, res) => {
        Cart.clearCart((err) => {
            if (err) throw err;
            res.render('client/checkout');
        });
    }
};

module.exports = clientController;
