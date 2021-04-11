import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { graphql, useStaticQuery } from "gatsby"

const stripePromise = loadStripe("pk_test_51HwN7LHyJvfx60DdRmNOKARoNIPg2uWWoQLN3I9uFCJY2CLUl2oxJEdcSk2MlfkNGiICdN1SlVeWr65cTeKtGBKo00K53ZgPm6")

export default function ProductList({location}) {

    const data = useStaticQuery(
        graphql`
            query ProductPrices {
                prices : allStripePrice {
                    edges {
                        node {
                            id
                            active
                            currency
                            unit_amount
                            product {
                                id
                                name
                                images
                            }
                        }
                    }
                }
            }
        `
    );
    console.log("Stripe Data = ", data);

    const redirectToCheckout = async (id) => {
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
          mode: "payment",
          lineItems: [{ price: id, quantity: 1 }],
          successUrl: `${location.origin}/payment-success/`,
          cancelUrl: `${location.origin}/payment-error`,
        });
      }


  return (
      <div>
        <div>Product List</div>
        {
            data.prices.edges.map((node)=>(
                <div key={ node.node.id } style={{display: 'flex'}}>
                    <div>Product Name: {node.node.product.name}</div>
                    <div>Product Price: {node.node.unit_amount}</div>
                    <div><img width="300px" src={node.node.product.images[0]}/> </div>
                    <button onClick={()=>{
                        redirectToCheckout(node.node.id)
                    }}  style={{ height:'50px'}}>Checkout</button>
                </div>
            ))
        }
      </div>
    )
}
