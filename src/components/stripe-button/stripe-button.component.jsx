import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IyVmFG4yqXIBK9wFXdYpRG2oLTbGYsXR5v74rLUv5Sa8A2hoV0XnmizwiwIT0AMxiyWn3hcnS751l6goV9dCc2m00NT37EQrd';

  const onToken = token => {
    console.log(token);
    alert('Paiement successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      image='https://svgshare.com/i/CUz.svg'
      description={ `Your total is ${ price }€` }
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publishableKey }
      billingAddress
      shippingAddress
    />
  );
};

export default StripeCheckoutButton;
