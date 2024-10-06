const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Routes for admin to manage products
router.get('/products', adminController.listProducts);  // Admin product listing
router.get('/add', adminController.showAddProductForm);
router.post('/add', adminController.addProduct);
router.get('/edit/:id', adminController.showEditProductForm);
router.post('/edit/:id', adminController.editProduct);
router.get('/delete/:id', adminController.deleteProduct);

module.exports = router;
