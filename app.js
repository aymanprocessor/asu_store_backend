require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const product = require('./models/products');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
//IMPORT ROUTES
const productsRoute = require('./routes/products');
const usersRoute = require('./routes/users');
const transactionsRoute = require('./routes/transactions');
const balancesRoute = require('./routes/balances');

//ROUTES
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use(bodyParser.json());
app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/transactions', transactionsRoute);
app.use('/balances', balancesRoute);


app.get('/', (req, res) => {
    res.send('We Are On Home');
});




mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
}, () => console.log('connected to DB!'));
//how to we start listening to the server
app.listen(3000);