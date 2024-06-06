// Importa Express.js
const express = require('express');
const Shopify = require('shopify-api-node');
const app = express();
const PORT = 3000; // Puerto en el que se ejecutará el servidor

const shopify = new Shopify({
    shopName: 'tiendadevoscval',
    apiKey: 'b260656d0084173b4fa7d823c584f0a3',
    password: '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'
  });

// Define un endpoint
app.get('/get', async (req, res) => {
  try {
    const orders  = await shopify.order.list({
      fields: 'id,created_at,order_number,billing_address,customer,note,line_items,subtotal_price,total_tax,total_price',
    //   since_id: ultimaOrden
    });
    res.json({ orders });
  } catch (err) {
    console.log(err);
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
