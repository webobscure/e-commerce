import Stripe from 'stripe';


<<<<<<< HEAD
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
=======
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
>>>>>>> 3b58860 (connect stripe)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.cartItems);
    try {
      const params = 
        {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1MMrfBGDJR3B2DcRViQJyo5C'},
                { shipping_rate: 'shr_1MMrfmGDJR3B2DcRCuPy7bgi'},
            ],
            line_items: req.body.cartItems.map((item) => {
              const img = item.image[0].asset._ref;
              const newImage = img.replace('image-', 'https://cdn.sanity.io/images/w3yf98gh/production/').replace('_webp', '.webp');

              return {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: item.name,
                    images: [newImage],
                  },
                  unit_amount: item.price * 100, 
                },
<<<<<<< HEAD
                adjustable_quantity: {
=======
                adjustable_quantity: { 
>>>>>>> 3b58860 (connect stripe)
                  enabled: true,
                  minimum: 1,
                },
                quantity: item.quantity
              }
            }),
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          
      }

      const session = await stripe.checkout.sessions.create(params)
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}