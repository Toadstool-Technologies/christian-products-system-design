var productModel = require('../model/productModel.js');

module.exports = {
  get: function(req, res) {
    productModel.getProducts((err, products) => {
      if (err) {
        console.log('Unable to retrieve products: ', err);
        res.sendStatus(500);
      } else {
        res.send(products.rows);
      }
    });
  }
}