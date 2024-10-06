const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Import Routes
const adminRoutes = require('./routes/admin');
const clientRoutes = require('./routes/client');

// Use Routes
app.use('/admin', adminRoutes);
app.use('/', clientRoutes);

// Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
