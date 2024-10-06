const db = require('../config/db');

const Product = {
    getAllProducts: (callback) => {
        const query = 'SELECT * FROM products';
        db.query(query, (err, results) => {
            if (err) callback(err, null);
            else callback(null, results);
        });
    },

    getProductById: (id, callback) => {
        const query = 'SELECT * FROM products WHERE id = ?';
        db.query(query, [id], (err, result) => {
            if (err) callback(err, null);
            else callback(null, result[0]);
        });
    },

    createProduct: (product, callback) => {
        const query = 'INSERT INTO products (name, price, description, quantity) VALUES (?, ?, ?, ?)';
        db.query(query, [product.name, product.price, product.description, product.quantity], (err, result) => {
            if (err) callback(err, null);
            else callback(null, result);
        });
    },

    updateProduct: (id, product, callback) => {
        const query = 'UPDATE products SET name = ?, price = ?, description = ?, quantity = ? WHERE id = ?';
        db.query(query, [product.name, product.price, product.description, product.quantity, id], (err, result) => {
            if (err) callback(err, null);
            else callback(null, result);
        });
    },

    deleteProduct: (id, callback) => {
        const query = 'DELETE FROM products WHERE id = ?';
        db.query(query, [id], (err, result) => {
            if (err) callback(err, null);
            else callback(null, result);
        });
    }
};

module.exports = Product;
