var productModel = require('../model/productModel.js');

module.exports = {
  getProducts: function(req, res) {
    let count = req.query.count;
    let page = req.query.page;
    productModel.getAllProducts(count, page, (err, products) => {
      if (err) {
        console.log('Unable to retrieve products: ', err);
        res.sendStatus(500);
      } else {
        res.send(products.rows);
      }
    });
  },

  getProduct: function(req, res) {
    let id = req.params.productId;
    productModel.getOneProduct(id, (err, product) => {
      if (err) {
        console.log('Unable to retrieve product: ', err);
        res.sendStatus(500);
      } else {
        res.send(product.rows[0]);
      }
    });
  },

  getStyles: function(req, res) {
    let id = req.params.productID;
    productModel.getStyles(id, (err, styles) => {
      if (err) {
        console.log('Unable to retrieve styles: ', err);
        res.sendStatus(500);
      } else {
        res.send(styles);
      }
    })
  }
}