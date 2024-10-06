const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');
const clientRoutes = require('./routes/client');

app.use('/admin', adminRoutes);  
app.use('/', clientRoutes);      

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
