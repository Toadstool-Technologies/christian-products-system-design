var db = require('../db')

module.exports = {
  getAllProducts: function(count, page, callback) {
    count = count || 5;
    page = page * count - 5 || 0;
    db.query(`SELECT * FROM products LIMIT ${count} OFFSET ${page}`, (err, products) => {
      callback(err, products);
    });
  },

  getOneProduct: function(id, callback) {
    let query = `SELECT *,
    (SELECT JSON_agg(json_build_object('feature', features.feature, 'value', features.value))
    AS features
    FROM features
    WHERE features.product_id=$1)
    FROM products
    WHERE products.id=$1`;

    db.query(query, [id], (err, product) => {
      callback(err, product);
    });
  },

  getStyles: function(id, callback) {
    let query = `SELECT *,
    (SELECT JSON_agg(json_build_object('thumbnail_url', style_photos.thumbnail_url, 'url', style_photos.url))
    AS photos
    FROM style_photos
    WHERE style_photos.styleId=styles.id),
    (SELECT json_object_agg(skus.id, json_build_object('quantity', skus.quantity, 'size', skus.size))
    AS skus
    FROM skus
    WHERE skus.styleID=styles.id)
    FROM styles
    WHERE product_id=$1
    ORDER BY styles.id`;

    db.query(query, [id], (err, styles) => {
      let result = {
        product_id: id,
        results: styles.rows
      };

      callback(err, result);
    })
  }

}