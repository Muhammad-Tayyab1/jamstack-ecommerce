import React from "react"
import { loadStripe } from "@stripe/stripe-js"


const stripePromise = loadStripe("pk_test_51HwN7LHyJvfx60DdRmNOKARoNIPg2uWWoQLN3I9uFCJY2CLUl2oxJEdcSk2MlfkNGiICdN1SlVeWr65cTeKtGBKo00K53ZgPm6")


export default function Home({location}) {

  

  const redirectToCheckout = async () => {
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1HwNBSHyJvfx60Ddi3i6Xajp", quantity: 3 },
          { price: "price_1Hwm6QHyJvfx60DdOnxWTpet", quantity: 1 }],
      successUrl: `${location.origin}/payment-success/`,
      cancelUrl: `${location.origin}/payment-error`,
    });
  }

  return (
      <div>
        <div>Hello world!</div>

        <button onClick={redirectToCheckout}>Checkout</button>
      </div>
    )
}
