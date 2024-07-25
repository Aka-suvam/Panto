import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { ColorRing } from 'react-loader-spinner'
import './StripeCheckout.css';

const stripePromise = loadStripe(process.env.STRIPE_API_KEY);
//console.log(process.env.REACT_APP_STRIPE_API_KEY);

const StripeCheckout = ({ cartItems, cartSubtotal }) => {
  const [stripeError, setStripeError] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkoutOptions = {
    mode: 'payment',
    lineItems: cartItems.map((item) => ({ price: item.priceId, quantity: item.quantity })),
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/fail`,
    customerEmail: 'customer@example.com',
  };

  const redirectToCheckout = async () => {
    if (!checkoutOptions) {
      console.error('Missing required params for Stripe checkout');
      return;
    }

    console.log('redirectToCheckout');

    try {
      setLoading(true);
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout(checkoutOptions);

      if (result.error) {
        setStripeError(result.error.message);
      }
    } catch (error) {
      setStripeError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (stripeError) alert(stripeError);

  return (
    <>
      {loading ? (
        <div className="loading-spinner">

<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
        </div>
      ) : (
        <button className="checkout" onClick={redirectToCheckout}>
          Proceed to CheckOut
        </button>
      )}
    </>
  );
};

export default StripeCheckout;
