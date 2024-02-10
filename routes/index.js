var express = require('express');
var router = express.Router();
var fs = require('fs');
const axios = require('axios');

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

router.get('/contact-form', function(req, res, next) {
  res.render('form', { title: 'Formulario de Contacto' });
});

router.post('/contact-form', async function(req, res, next) {
  try {
    const webhookURL = 'https://discord.com/api/webhooks/1205743957129306122/pTc3VYyUE1NmgKNwBBSIMMND3nGIrAQQKOOJ6UAXkANtnSNW56CalsEppRmcNeuOfovl'; // Reemplaza con la URL de tu webhook
    const messageContent = `Nombre: ${req.body.nombre}\nCorreo Electrónico: ${req.body.email}\nProblema: ${req.body.problema}`;
    // Envía el mensaje al webhook de Discord
    await axios.post(webhookURL, {
      content: messageContent
    });

    // Renderiza la vista de popup solo cuando se envíe el formulario correctamente
    res.render('popup', { showPopup: true });
  } catch (error) {
    console.error('Error al enviar el mensaje a Discord:', error.message);
    res.status(500).send('Error al enviar el mensaje a Discord.');
  }
});

module.exports = router;





module.exports = router;
