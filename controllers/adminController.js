const Product = require('../models/productModel');

const adminController = {
    listProducts: (req, res) => {
        Product.getAllProducts((err, products) => {
            if (err) throw err;
            res.render('admin/products', { products });
        });
    },

    showAddProductForm: (req, res) => {
        res.render('admin/addProduct');
    },

    addProduct: (req, res) => {
        const { name, price, description, quantity } = req.body;
        const newProduct = { name, price, description, quantity };
        Product.createProduct(newProduct, (err) => {
            if (err) throw err;
            res.redirect('/admin/products');
        });
    },

    showEditProductForm: (req, res) => {
        const productId = req.params.id;
        Product.getProductById(productId, (err, product) => {
            if (err) throw err;
            res.render('admin/editProduct', { product });
        });
    },

    editProduct: (req, res) => {
        const productId = req.params.id;
        const { name, price, description, quantity } = req.body;
        const updatedProduct = { name, price, description, quantity };
        Product.updateProduct(productId, updatedProduct, (err) => {
            if (err) throw err;
            res.redirect('/admin/products');
        });
    },

    deleteProduct: (req, res) => {
        const productId = req.params.id;
        Product.deleteProduct(productId, (err) => {
            if (err) throw err;
            res.redirect('/admin/products');
        });
    }
};

module.exports = adminController;
