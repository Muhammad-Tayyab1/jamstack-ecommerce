const stripe = require('stripe')('sk_test_51HwN7LHyJvfx60DdJy1XLWpyrCJw7vnpWV8nKjVux0myV3EOwDyg2bMNrzpkXiLrFcY5ujnQ4E0DoHXN3IswIlC500CbexY0v5');

exports.handler = async (event, context) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: 'usd',
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: 'accept_a_payment' },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}