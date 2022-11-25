const stripe = require('stripe')('');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    // オプションをつければある程度は変更できるが、要望は満たしきらないと思われる。
    // オプション一覧は→ https://stripe.com/docs/api/checkout/sessions/create
    line_items: [
      {
        price: 'price_1M7vopKyihnEXM2qcZzYI2Do',
        quantity: 1,
      },
      {
        price: 'price_1M7vpPKyihnEXM2qgSEw88u1',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    "custom_text[submit][message]": "これはテストメッセージです"
    // custom_text: {
    //   shipping_address: 'test shipping_address',
    //   submit: 'test submit',
    // },
  });

  res.redirect(303, session.url)
});

app.listen(4242, () => console.log('Running on port 4242'));
