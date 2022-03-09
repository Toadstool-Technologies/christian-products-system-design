const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000 || process.env.PORT;
const product = require('./controller/productControl.js');

app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  product.getProducts(req, res);
})

app.get('/products/:productId', (req, res) => {
  product.getProduct(req, res);
})

app.get('/products/:productID/styles', (req, res) => {
  product.getStyles(req,res);
})


module.exports = app;