var db = require('../db')

module.exports = {
  getProducts: function(callback) {
    let query = 'SELECT * FROM products';

    db.query(query, (err, products) => {
      callback(err, products);
    });
  }
}