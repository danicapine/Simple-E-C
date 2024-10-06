const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Routes for client to view products and cart
router.get('/', clientController.listProducts);
router.post('/cart/add/:id', clientController.addToCart);
router.get('/cart', clientController.viewCart);
router.get('/checkout', clientController.checkout);

module.exports = router;
