import React from "react"
import CartStatus from '../components/CartStatus'
import Product from "../components/Product"

const productData = [
  {
    name: 'Water Bottle',
    sku: 'price_1IeDxuHyJvfx60DdClBfQcMW',
    price: 1500,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  },
  {
    name: 'Formal Shoe',
    sku: 'price_1Hwm6QHyJvfx60DdOnxWTpet',
    price: 3000,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  }
]


export default function Home() {
  
  return (
    <div> 
      <CartStatus />
      <div style={{margin:"20px"}}>
        {
          productData.map((product)=>(
            <Product key={product.sku} product={product} />
          ))
        }
      </div>
    </div>
  )
}
