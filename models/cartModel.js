const db = require('../config/db');

const Cart = {
    addToCart: (productId, quantity, callback) => {
        const query = 'INSERT INTO cart (product_id, quantity) VALUES (?, ?)';
        db.query(query, [productId, quantity], (err, result) => {
            if (err) callback(err, null);
            else callback(null, result);
        });
    },

    getCartItems: (callback) => {
        const query = `
            SELECT p.name, p.price, c.quantity 
            FROM cart c
            JOIN products p ON c.product_id = p.id
        `;
        db.query(query, (err, results) => {
            if (err) callback(err, null);
            else callback(null, results);
        });
    },

    clearCart: (callback) => {
        const query = 'DELETE FROM cart';
        db.query(query, (err, result) => {
            if (err) callback(err, null);
            else callback(null, result);
        });
    }
};

module.exports = Cart;
