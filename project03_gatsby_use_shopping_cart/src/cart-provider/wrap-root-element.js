import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

const stripePromise = loadStripe("pk_test_51HwN7LHyJvfx60DdRmNOKARoNIPg2uWWoQLN3I9uFCJY2CLUl2oxJEdcSk2MlfkNGiICdN1SlVeWr65cTeKtGBKo00K53ZgPm6")

export const wrapRootElement = ({element})=> {
    return (
        <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl="http://localhost:8000/payment-success"
        cancelUrl="http://localhost:8888/"
        currency="USD"
        >
            {element}
        </CartProvider>
    )
}
