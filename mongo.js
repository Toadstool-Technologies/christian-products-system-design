const mongoose = require('mongoose');

let productsSchema = mongoose.Schema({
  id: Number,
  campus: String,
  name: String,
  slogan: String,
  description: String,
  category: String
});

let featuresSchema = mongoose.Schema({
  feature: String,
  value: String
});

let stylesSchema = mongoose.Schema({
  style_id: Number,
  name: String,
  original_price: Number,
  sale_price: Number,
  default?: Boolean,
  photos: [{
    thumbnail_url: String,
    url: String
  }],
  skus: {
    id: String,
    quantity: Number,
    size: String
  }
});

