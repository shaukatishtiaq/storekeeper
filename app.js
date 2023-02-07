require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const body_parser = require('body-parser');
app.use(body_parser.json());

// Database configuration
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL).catch((error) => {
    console.error(error);
});
const database = mongoose.connection;

database.once('connected', () => {
    console.log("DB CONNECTED");
    
    app.listen(process.env.PORT, () => {
        console.log("SERVER is up");
    });
});

// Routing
const product = require('./routes/products');
app.use('/product', product);

