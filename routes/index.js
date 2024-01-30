var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  fs.readFile('products.json', 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al leer el archivo JSON');
    }

    const productsData = JSON.parse(data);

    res.render('products', { products: productsData });
  });
});

module.exports = router;
