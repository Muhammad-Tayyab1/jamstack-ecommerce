import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const promise = loadStripe("pk_test_51HwN7LHyJvfx60DdRmNOKARoNIPg2uWWoQLN3I9uFCJY2CLUl2oxJEdcSk2MlfkNGiICdN1SlVeWr65cTeKtGBKo00K53ZgPm6");

export default function Home() {
    return <div>
        <Elements stripe={promise}>
            <CheckoutForm />
        </Elements>
    </div>
}