const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const productControl = require('./controller/productControl.js');

app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  productControl.get(req, res);
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})