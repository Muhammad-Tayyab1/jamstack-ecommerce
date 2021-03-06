import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { graphql, useStaticQuery } from "gatsby"

const stripePromise = loadStripe("pk_test_51HwN7LHyJvfx60DdRmNOKARoNIPg2uWWoQLN3I9uFCJY2CLUl2oxJEdcSk2MlfkNGiICdN1SlVeWr65cTeKtGBKo00K53ZgPm6")

export default function Products({location}) {

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
                                description
                            }
                        }
                    }
                }
            }
        `
    );
    console.log("Stripe Data = ", data);

  return (
      <div>
        <div>Product List</div>
        {
            data.prices.edges.map((node)=>(
                <div key={ node.node.id } style={{margin:"20px", border:"1px solid gray", borderRadius:"5px", padding:"10px"}}>
                    <div>Product Name: {node.node.product.name}</div>
                    <div>Product Price: {node.node.unit_amount}</div>
                    <div><img width="200px" src={node.node.product.images[0]}/> </div>
                    <button className="snipcart-add-item"
                     data-item-id={node.node.id}
                     data-item-price={node.node.unit_amount}
                     data-item-description={node.node.product.description}
                     data-item-url="https://admiring-archimedes-965d47.netlify.app/products"
                     data-item-image={node.node.product.images[0]}
                     data-item-name={node.node.product.name}
                    
                    >Add to Cart</button>
                </div>
            ))
        }
      </div>
    )
}
