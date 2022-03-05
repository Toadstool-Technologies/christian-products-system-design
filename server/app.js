const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000 || process.env.PORT;
const productControl = require('./controller/productControl.js');

app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  productControl.get(req, res);
})

module.exports = app;