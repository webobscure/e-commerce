import { loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
<<<<<<< HEAD
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
=======
        stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`)
>>>>>>> 3b58860 (connect stripe)
    }

    return stripePromise;
}

export default getStripe;