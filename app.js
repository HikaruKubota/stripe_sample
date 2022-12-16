const stripe = require('stripe')('key');
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
      // {
      //   price: 'price_1M7vpPKyihnEXM2qgSEw88u1',
      //   quantity: 1,
      // },
      {
        price: 'price_1MFXKFKyihnEXM2q2XlbQJNG',
        quantity: 1,
      },
      {
        price: 'price_1MFU3rKyihnEXM2q2K87ItcL',
        quantity: 1,
      },
    ],
    // coupon: couponId
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    "discounts[][coupon]": '0IS2qpuS',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    "custom_text[submit][message]": "これはテストメッセージです"
  });

  res.redirect(303, session.url)
});

app.listen(4242, () => console.log('Running on port 4242'));
